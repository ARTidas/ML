let model;
let tokenizer;
let wordIndex = {};

function setup() {
  noCanvas();
  createModel().then(() => {
    let textInput = createInput('Enter text');
    let button = createButton('Classify');
    button.mousePressed(classifyText);
  });
}

async function createModel() {
  model = tf.sequential();
  model.add(tf.layers.dense({ units: 8, inputShape: [Object.keys(wordIndex).length], activation: 'relu' }));
  model.add(tf.layers.dense({ units: 2, activation: 'softmax' }));
  model.compile({
    optimizer: 'adam',
    loss: 'categoricalCrossentropy',
    metrics: ['accuracy'],
  });

  // Training data
  const trainingData = [
    { text: 'When can I have this product', label: 0 },
    { text: 'Any chance for a discount', label: 0 },
    { text: 'I love this product', label: 0 },
    { text: 'This is great', label: 0 },
    { text: 'This is awful', label: 0 },
    { text: 'I hate this product', label: 0 },
    { text: 'I hate this fucking product', label: 1 },
    { text: 'The fuck is wrong with this product', label: 1 }, // Contains the word "fuck"
    { text: 'This is terrible', label: 0 },
    { text: 'Fuck this', label: 1 }, // Contains the word "fuck"
    { text: 'This is awful fuck', label: 1 }, // Contains the word "fuck"
  ];

  const texts = trainingData.map(item => item.text);
  const labels = trainingData.map(item => item.label);

  // Tokenize the text using a simple space-based tokenizer
  tokenizer = text => text.split(' ');

  // Build a word index
  texts.forEach(text => {
    tokenizer(text).forEach(word => {
      if (!wordIndex[word]) {
        wordIndex[word] = Object.keys(wordIndex).length;
      }
    });
  });

  // Train the model
  await trainModel(texts, labels);
}

async function trainModel(texts, labels) {
  // Tokenize and encode sequences
  const sequences = texts.map(text => tokenizer(text));
  const encodedSequences = sequences.map(seq =>
    seq.map(word => wordIndex[word] || 0) // Use 0 for unknown words
  );

  // Calculate the correct size for the input tensor
  const vocabSize = Object.keys(wordIndex).length;

  // Convert to a 2D tensor with the correct shape
  const inputTensor = tf.tensor2d(encodedSequences, [texts.length, vocabSize]);

  // Convert labels to one-hot encoding
  const oneHotLabels = tf.oneHot(tf.tensor1d(labels, 'int32'), 2);

  // Train the model
  await model.fit(inputTensor, oneHotLabels, {
    epochs: 100,
  });
}


async function classifyText() {
  let inputText = select('input').value();
  let prediction = await classify(inputText);
  let category = prediction[1] > prediction[0] ? 'Contains "fuck"' : 'Does not contain "fuck"';
  let resultP = createP('Category: ' + category);
  resultP.style('color', category === 'Contains "fuck"' ? 'red' : 'green');
}

async function classify(text) {
  // Tokenize and encode the input text
  const sequence = tokenizer(text);
  const encodedSequence = sequence.map(word => wordIndex[word] || 0);

  // Make sure the encoded sequence has the same length as the vocabulary
  while (encodedSequence.length < Object.keys(wordIndex).length) {
    encodedSequence.push(0); // Pad with zeros for unknown words
  }

  // Convert to a 1D tensor
  const inputTensor = tf.tensor1d(encodedSequence);

  // Reshape to match the model's input shape
  const reshapedInput = inputTensor.reshape([1, Object.keys(wordIndex).length]);

  const prediction = await model.predict(reshapedInput);
  return prediction.dataSync();
}
