const int irReceiverPin = A0;
const int ledPin = 11;

bool signalReceiving = false;
unsigned long signalStart = 0;
unsigned long pauseStart = 0;
unsigned long signalLength = 0;
unsigned long pauseLength = 0;

void setup() {
  Serial.begin(9600);
  pinMode(ledPin, OUTPUT);
}

void loop() {
  // Measure signal strength and control LED brightness
  int signalStrength = 1000 - analogRead(irReceiverPin);
  analogWrite(ledPin, signalStrength / 4 - 18);

  Serial.println(analogRead(irReceiverPin));

  // Detect signal transitions
  if (!signalReceiving && signalStrength < 300) {
    signalReceiving = true;
    signalStart = micros();
  }
  else if (signalReceiving && signalStrength > 300) {
    signalReceiving = false;
    signalLength = micros() - signalStart;
    //Serial.print("Signal Length: ");
    //Serial.println(signalLength);
    //decodeSignal(signalLength);
    decodeSeries(signalLength, pauseLength);
  }

  // Measure pause length
  if (!signalReceiving && signalStrength >= 300) {
    if (micros() - signalStart > 1000) { // Ensure a minimum pause length
      pauseLength = micros() - pauseStart;
      //Serial.print("Pause Length: ");
      //Serial.println(pauseLength);
      //decodePause(pauseLength);
    }
    pauseStart = micros();
  }

  delay(125); // Adjust delay as needed
}

void decodeSeries(
  unsigned long signalLength,
  unsigned long pauseLength
) {
  signalLength /= 1000;
  pauseLength /= 1000;

  /*if (pauseLength > 124) {
    Serial.print(" ");
  }*/

  if (signalLength == 125 || signalLength == 250 || signalLength == 375 || signalLength == 500 || signalLength == 1125) {
    Serial.print(".");
  }
  else if (signalLength == 2375 || signalLength == 2500 || signalLength == 2625) {
    Serial.print(".");
    Serial.println(" ");
  }
  else if (signalLength == 625 || signalLength == 750 || signalLength == 875 || signalLength == 1000) {
    Serial.print("-");
  }
  else {
    Serial.println(" ");
    Serial.print("UnKnown series detected: ");
    Serial.print(signalLength);
    Serial.print(" ");
    Serial.println(pauseLength);
  }
}