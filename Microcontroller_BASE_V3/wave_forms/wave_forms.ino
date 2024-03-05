int outputPin; // Pin connected to the output
int selectedWaveform = -1; // Variable to store the selected waveform
int repeatSignal = 50;
int signalLength = 100;
bool isAnalogOutput = false;

void setup() {
  Serial.begin(9600);
  printMenu();
}

void loop() {
  if (isAnalogOutput) {
    outputPin = A0; // Set output pin to analog pin
  } else {
    outputPin = 8; // Set output pin to digital pin
  }

  if (Serial.available() > 0) { // Check if there is serial input available
    char input = Serial.read(); // Read the serial input

    switch (input) {
      case 'd':
        isAnalogOutput = false;
        Serial.println("Digital output selected.");
        break;
      case 'a':
        isAnalogOutput = true;
        Serial.println("Analog output selected.");
        break;
      case '1':
        transmitSquareWave();
        break;
      case '2':
        transmitSineWave();
        break;
      case '3':
        transmitTriangularWave();
        break;
      default:
        Serial.println("Invalid input. Please enter a valid option.");
        break;
    }
  }

  delay(1000);
}

void printMenu() {
  Serial.println("Select output type:");
  Serial.println("d. Digital");
  Serial.println("a. Analog");
  Serial.println("Select a waveform:");
  Serial.println("1. Square Wave");
  Serial.println("2. Sine Wave");
  Serial.println("3. Triangular Wave");
}

void transmitSquareWave() {
  for (int i = 0; i < repeatSignal; i++) {
    if (isAnalogOutput) {
      analogWrite(outputPin, 255); // High voltage level for analog output
    } else {
      digitalWrite(outputPin, HIGH); // Set digital output high
    }
    delay(signalLength);
    if (isAnalogOutput) {
      analogWrite(outputPin, 0); // Low voltage level for analog output
    } else {
      digitalWrite(outputPin, LOW); // Set digital output low
    }
    delay(signalLength);
  }
}

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
        delayMicroseconds(dutyCycle); // Adjusted delay for digital output
        digitalWrite(outputPin, LOW); // Set digital output low
        delayMicroseconds(255 - dutyCycle); // Adjusted delay for digital output
      }
    }
  }
}

void transmitTriangularWave() {
  for (int i = 0; i < repeatSignal; i++) {
    for (int i = 0; i < 255; i++) {
      if (isAnalogOutput) {
        analogWrite(outputPin, i); // Output PWM signal for analog output
      } else {
        analogWrite(outputPin, HIGH); // Set digital output high
        delayMicroseconds(i * 4); // Adjusted delay for digital output
      }
    }
    for (int i = 255; i > 0; i--) {
      if (isAnalogOutput) {
        analogWrite(outputPin, i); // Output PWM signal for analog output
      } else {
        analogWrite(outputPin, HIGH); // Set digital output high
        delayMicroseconds(i * 4); // Adjusted delay for digital output
      }
    }
  }
}
