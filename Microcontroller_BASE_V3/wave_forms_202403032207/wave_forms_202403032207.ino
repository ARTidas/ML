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
  }

  for (int i = 0; i < signalCycles; i++) {
    transmitDigitalTriangularWave();
  }
  for (int i = 0; i < signalCycles; i++) {
    transmitAnalogTriangularWave();
  }*/

  for (int i = 0; i < signalCycles; i++) {
    transmitAnalogSineWave();
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

void transmitAnalogSineWave() {
  int steps = 100; // Number of steps for the wave
  int cycleDuration = 1000; // Duration of one complete cycle (in milliseconds)
  int frequency = 1; // Frequency of the sine wave (in Hz)

  for (int t = 0; t < cycleDuration; t += cycleDuration / steps) {
    int brightness = map(sin(2 * PI * frequency * t / cycleDuration), -1, 1, 0, 255);
    analogWrite(outputPinAnalog, brightness);
    delay(cycleDuration / steps);
  }
}