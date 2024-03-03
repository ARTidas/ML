// Define the IR receiver pin
const int irReceiverPin = 11;

// Variables to store IR signal timings
unsigned long previousTime = 0;
unsigned long currentTime = 0;
unsigned long elapsedTime = 0;

void setup() {
  // Start serial communication
  Serial.begin(9600);

  // Set the IR receiver pin as an input
  pinMode(irReceiverPin, INPUT);
}

void loop() {
  // Read the IR receiver pin
  int irValue = digitalRead(irReceiverPin);

  // Check for a falling edge (IR signal detected)
  if (irValue == LOW) {
    // Record the current time
    currentTime = micros();

    // Calculate elapsed time since the last falling edge
    elapsedTime = currentTime - previousTime;

    // Reset previous time to current time
    previousTime = currentTime;

    // Decode Morse code based on the elapsed time
    decodeMorse(elapsedTime);
  }
}

// Function to decode Morse code based on elapsed time
void decodeMorse(unsigned long elapsedTime) {
  // Define thresholds for dot, dash, and space
  const unsigned long dotThreshold = 30000; // Adjust this threshold based on your IR receiver and transmitter
  const unsigned long dashThreshold = dotThreshold * 3;
  const unsigned long spaceThreshold = dotThreshold * 3;

  // Decode Morse code based on elapsed time
  if (elapsedTime < dotThreshold) {
    Serial.println("."); // Dot
  } else if (elapsedTime < dashThreshold) {
    Serial.println("-"); // Dash
  } else if (elapsedTime < spaceThreshold) {
    Serial.println(" "); // Space (character separator)
  }
}