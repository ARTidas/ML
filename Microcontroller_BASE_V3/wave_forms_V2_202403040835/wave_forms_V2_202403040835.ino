const int outputPinDigital = 8;
const int outputPinAnalog = A0;
const int signalCycles = 30;

int signalLength = 100;

void setup() {
  Serial.begin(9600);
}

void loop() {
  transmitDimmAnalogSquareWave();
}

void transmitAnalogSquareWave() {
  analogWrite(outputPinAnalog, 255); // High voltage level for analog output
  delay(signalLength);
  analogWrite(outputPinAnalog, 0); // Low voltage level for analog output
  delay(signalLength);
}

void transmitSmoothAnalogSquareWave() {
  for (int i = 0; i < 255; i++) {
    analogWrite(outputPinAnalog, i);
    delay(1);
  }
  for (int i = 255; i > 0; i--) {
    analogWrite(outputPinAnalog, i);
    delay(1);
  }
}

void transmitDimmAnalogSquareWave() {
  for (int i = 0; i < 255; i++) {
    analogWrite(outputPinAnalog, i);
    delay(i / 100);
  }
  for (int i = 255; i > 0; i--) {
    analogWrite(outputPinAnalog, i);
    delay(i / 100);
  }
}

void transmitDigitalSquareWave() {
  digitalWrite(outputPinDigital, HIGH);
  delay(signalLength);
  digitalWrite(outputPinDigital, LOW);
  delay(signalLength);
}



void transmitDigitalTriangularWave() {
  int steps = 10; // Number of steps for the wave

  // Dim in effect
  for (int j = 0; j < steps; j++) {
    digitalWrite(outputPinDigital, HIGH); // Set digital output high
    delay(signalLength * ((float)j / steps)); // Decreasing delay for dimming effect
    digitalWrite(outputPinDigital, LOW); // Set digital output low
    delay(signalLength * ((float)(steps - j) / steps)); // Increasing delay for dimming effect
  }
  
  // Dim out effect
  for (int j = steps; j > 0; j--) {
    digitalWrite(outputPinDigital, HIGH); // Set digital output high
    delay(signalLength * ((float)j / steps)); // Decreasing delay for dimming effect
    digitalWrite(outputPinDigital, LOW); // Set digital output low
    delay(signalLength * ((float)(steps - j) / steps)); // Increasing delay for dimming effect
  }
}

void transmitAnalogTriangularWave() {
  int steps = 100; // Number of steps for the wave

  // Dim in effect
  for (int j = 0; j < steps; j++) {
    analogWrite(outputPinAnalog, map(j, 0, steps, 0, 255)); // Set analog output based on current step
    delay(signalLength / steps); // Decreasing delay for dimming effect
  }
  
  // Dim out effect
  for (int j = steps; j > 0; j--) {
    analogWrite(outputPinAnalog, map(j, 0, steps, 0, 255)); // Set analog output based on current step
    delay(signalLength / steps); // Decreasing delay for dimming effect
  }
}

void transmitDigitalSineWave() {
  for (int i = 0; i < 360; i++) {
    // Map the sine wave to digital output (0 or 1)
    int outputValue = sin(i * PI / 180.0) >= 0 ? HIGH : LOW;
    digitalWrite(outputPinDigital, outputValue);
    delay(10); // Adjust this delay for desired frequency and resolution
  }
}

void transmitAnalogSineWave() {
  for (int i = 0; i < 360; i++) {
    // Map the sine wave to PWM duty cycle (0-255)
    int dutyCycle = 128 + 127 * sin(i * PI / 180.0);
    analogWrite(outputPinAnalog, dutyCycle);
    delay(10); // Adjust this delay as needed for the desired frequency
  }
}