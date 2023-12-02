#include "ArduinoGraphics.h"
#include "Arduino_LED_Matrix.h"
#include <SPI.h>
#include <WiFiS3.h>

// WiFi credentials
char ssid[] = "DLK";
char pass[] = "1RKq<@+MWpdaCWT";
WiFiSSLClient client;

// Server details
char server[] = "mlthesis.artidas.hu";
int port = 443; // Use port 443 for HTTPS
const int RESPONSE_LINE_NUMBER = 13;

// Delay between requests
unsigned long previousMillis = 0;
const long interval = 10000;

// Create an instance of the LED matrix
ArduinoLEDMatrix matrix;

void setup() {
  Serial.begin(9600);

  // Initialize LED matrix
  matrix.begin();
  
  // Display initial message on the LED matrix
  displayMessageOnMatrix("Hello...");

  // Initialize WiFi
  if (!WiFi.begin(ssid, pass)) {
      Serial.println("Failed to connect to WiFi!");
      displayMessageOnMatrix("Failed to connect to WiFi!!!");
      while (true);
  }

  // Wait for WiFi connection
  while (WiFi.status() != WL_CONNECTED) {
      delay(1000);
      Serial.println("Connecting to WiFi...");
      //displayMessageOnMatrix("Connecting to WiFi...");
  }

  // Display a message indicating the successful WiFi connection
  //displayMessageOnMatrix("Connected to WiFi...");
  Serial.println("Connected to WiFi...");
}

void loop() {
  unsigned long currentMillis = millis();

  if (WiFi.status() != WL_CONNECTED) {
    // Reconnect to Wi-Fi
    if (WiFi.begin(ssid, pass) != WL_CONNECTED) {
      Serial.println("Failed to reconnect to WiFi!");
      displayMessageOnMatrix("Failed to reconnect to WiFi!!!");
      delay(5000);  // Wait for a few seconds before retrying
    }
  }

  if (currentMillis - previousMillis >= interval) {
    previousMillis = currentMillis;

    printWifiStatus();

    // Make an HTTPS request
    String message = makeHttpsRequest();

    if (message.length() > 0) {
      // Display the received message on the LED matrix
      displayMessageOnMatrix(message);
    } else {
      // Handle error or no response
      Serial.println("Error or no response from server!!!");
      displayMessageOnMatrix("Error or no response from server!!!");
    }
  }

  // Wait for a while before making the next request
  //delay(10000);
}

String makeHttpsRequest() {
  // close any connection before sending a new request.
  // This will free the socket on the NINA module
  if (client.connected()) {
      client.stop();
      delay(100);  // Allow some time for the socket to be released
  }

  if (!client.connect(server, port)) {
      Serial.println("Connection to server failed");
      displayMessageOnMatrix("Connection to server failed!!!");
      return "";
  }

  // Make the HTTPS request
  client.println("GET /Microcontroller_BASE_V1/get_message.php HTTP/1.1");
  client.println("Host: mlthesis.artidas.hu");
  client.println("Connection: close");
  client.println();

  // Wait for the server's response
  while (client.connected() && !client.available());

  // Read the response
  String response = client.readString();
  client.stop();

  // Print the server's response
  Serial.println("Server Response:");
  Serial.println(response);
  //displayMessageOnMatrix(response);

  // Extract the actual content from the response (skip HTTP headers)
  /*int contentStart = response.indexOf("\r\n\r\n") + 4;
  if (contentStart != -1 && contentStart < response.length()) {
      return response.substring(contentStart);
  } else {
      return "";
  }*/

  return getLine(response, RESPONSE_LINE_NUMBER);
}

void displayMessageOnMatrix(String message) {
  Serial.println("Displaying message:");
  Serial.println(message);

  matrix.beginDraw();
  matrix.stroke(0xFFFFFFFF);
  matrix.textScrollSpeed(50);
  
  const char* prefix = "    ";
  const char* suffix = "    ";
  // Using the concat method to concatenate strings
  String concatenatedString = prefix + message + suffix;

  matrix.textFont(Font_5x7);
  matrix.beginText(0, 1, 0xFFFFFF);
  matrix.println(
    replaceNewlinesWithSpace(concatenatedString)
  );
  matrix.endText(SCROLL_LEFT);
  matrix.endDraw();
}

void printWifiStatus() {
  // print the SSID of the network you're attached to:
  Serial.print("SSID: ");
  Serial.println(WiFi.SSID());

  // print your board's IP address:
  IPAddress ip = WiFi.localIP();
  Serial.print("IP Address: ");
  Serial.println(ip);

  // print the received signal strength:
  long rssi = WiFi.RSSI();
  Serial.print("signal strength (RSSI):");
  Serial.print(rssi);
  Serial.println(" dBm");
}

String replaceNewlinesWithSpace(String input) {
  String result = input;
  result.replace('\r', ' ');
  result.replace('\n', ' ');
  return result;
}

String getLine(const String& multiLineString, int lineNumber) {
    int currentLine = 1; // Start from the first line
    int start = 0;
    int end = 0;

    while (currentLine < lineNumber && end != -1) {
        start = end + 1; // Move to the beginning of the next line
        end = multiLineString.indexOf('\n', start); // Find the end of the next line
        currentLine++;
    }

    // Check if the requested line number is within the valid range
    if (currentLine == lineNumber) {
        if (end == -1) {
            // If this is the last line, return from the start position to the end of the string
            return multiLineString.substring(start);
        } else {
            // Return the content of the requested line
            return multiLineString.substring(start, end);
        }
    } else {
        // Line number is out of range
        return "Line not found";
    }
}
