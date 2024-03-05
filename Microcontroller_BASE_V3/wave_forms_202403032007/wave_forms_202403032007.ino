const int outputPinDigital = 8;
const int outputPinAnalog = A0;
const int signalCycles = 30;

int selectedWaveform = -1; // Variable to store the selected waveform
int signalLength = 100;

void setup() {
  Serial.begin(9600);
}

void loop() {
  /*for (int i = 0; i < signalCycles; i++) {
    transmitDigitalSquareWave();
  }
  for (int i = 0; i < signalCycles; i++) {
    transmitAnalogSquareWave();
  }*/

  /*for (int i = 0; i < signalCycles; i++) {
    transmitDigitalTriangularWave();
  }*/
  for (int i = 0; i < signalCycles; i++) {
    transmitAnalogTriangularWave();
  }
}

void transmitDigitalSquareWave() {
  digitalWrite(outputPinDigital, HIGH);
  delay(signalLength);
  digitalWrite(outputPinDigital, LOW);
  delay(signalLength);
}

void transmitAnalogSquareWave() {
  analogWrite(outputPinAnalog, 255); // High voltage level for analog output
  delay(signalLength);
  analogWrite(outputPinAnalog, 0); // Low voltage level for analog output
  delay(signalLength);
}

void transmitDigitalTriangularWave() {
  for (int j = 0; j < 255; j++) {
    digitalWrite(outputPinDigital, HIGH); // Set digital output high
    delay((255 - j) * signalLength / 255 / 10); // Decreasing delay for dimming effect
    digitalWrite(outputPinDigital, LOW); // Set digital output low
    delay(j * signalLength / 255 / 2); // Increasing delay for dimming effect
  }
  for (int j = 255; j > 0; j--) {
    digitalWrite(outputPinDigital, HIGH); // Set digital output high
    delay((255 - j) * signalLength / 255 / 10); // Decreasing delay for dimming effect
    digitalWrite(outputPinDigital, LOW); // Set digital output low
    delay(j * signalLength / 255 / 2); // Increasing delay for dimming effect
  }
}

void transmitAnalogTriangularWave() {
  for (int j = 0; j < 255; j++) {
    int dutyCycle = map(j, 0, 255, 0, 255); // Map j to the range of PWM values
    analogWrite(outputPinAnalog, dutyCycle); // Set analog output level
    delay((255 - j) * signalLength / 255 / 10); // Decreasing delay for dimming effect
    analogWrite(outputPinAnalog, 0); // Set analog output low
    delay(j * signalLength / 255 / 2); // Increasing delay for dimming effect
  }
  for (int j = 255; j > 0; j--) {
    int dutyCycle = map(j, 0, 255, 0, 255); // Map j to the range of PWM values
    analogWrite(outputPinAnalog, dutyCycle); // Set analog output level
    delay((255 - j) * signalLength / 255 / 10); // Decreasing delay for dimming effect
    analogWrite(outputPinAnalog, 0); // Set analog output low
    delay(j * signalLength / 255 / 2); // Increasing delay for dimming effect
  }
}

/*
void transmitSineWave() {
  const int steps = 100; // Number of steps in the sine wave
  const float stepSize = 2 * PI / steps; // Calculate step size for one complete cycle

  for (int i = 0; i < repeatSignal; i++) {
    for (int i = 0; i < steps; i++) {
      float angle = i * stepSize; // Calculate the angle for the current step
      float sinValue = sin(angle); // Calculate sine value for the current angle
      int dutyCycle = (sinValue + 1) * 127.5;
      if (isAnalogOutput) {
        analogWrite(outputPin, dutyCycle); // Output PWM signal for analog output
      } else {
        digitalWrite(outputPin, HIGH); // Set digital output high
        delay(dutyCycle); // Adjusted delay for digital output
        digitalWrite(outputPin, LOW); // Set digital output low
        delay(255 - dutyCycle); // Adjusted delay for digital output
      }
    }
  }
}

void transmitTriangularWave() {
  for (int i = 0; i < repeatSignal; i++) {
    // Increase brightness
    for (int j = 0; j < 255; j++) {
      if (isAnalogOutput) {
        analogWrite(outputPin, j); // Output PWM signal for analog output
        delay(signalLength / 255); // Adjusted delay for analog output
      }
      else {
        digitalWrite(outputPin, HIGH); // Set digital output high
        delay(signalLength / 255); // Adjusted delay for digital output
      }
    }
    
    // Decrease brightness
    for (int j = 255; j > 0; j--) {
      if (isAnalogOutput) {
        analogWrite(outputPin, j); // Output PWM signal for analog output
        delay(signalLength / 255); // Adjusted delay for analog output
      }
      else {
        digitalWrite(outputPin, LOW); // Set digital output low
        delay(signalLength / 255); // Adjusted delay for digital output
      }
    }
  }
}
*/