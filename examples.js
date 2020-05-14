const someQuestion = {
  thing: 'question',
  params: {
    body: 'Do you believe in ET life??',
    preset: 'ynp',
    expiry: '2020-06-01T00:00:00Z',
  },
};

const questionString = JSON.stringify(someQuestion);
console.log(questionString);
// {"thing":"question","params":{"body":"Do you believe in ET life??","preset":"ynp","expiry":"2020-06-01T00:00:00Z"}}

// 1. uri component encoded
// 2. sent to wallet via dna url here
// 3. uri component decoded in wallet

const questionOnChain = fromUtf8(questionString);
console.log(questionOnChain);
// 0x7b227468696e67223a227175657374696f6e222c22706172616d73223a7b22626f6479223a22446f20796f752062656c6965766520696e204554206c6966653f3f222c22707265736574223a22796e70222c22657870697279223a22323032302d30362d30315430303a30303a30305a227d7d

// when mined to chain it will have a transaction hash
// e.g. 0x9a35d124b3523a5125569d3bd66f126266479f26b8698fa5854d5e149a025dec

const anotherQuestion = {
  thing: 'question',
  params: {
    body: 'Do you believe in ET life??',
    options: ['yes', 'no', 'maybe'],
  },
};

const someAnswer = {
  thing: 'answer',
  params: {
    body: 'yes',
    parent:
      '0x9a35d124b3523a5125569d3bd66f126266479f26b8698fa5854d5e149a025dec',
  },
};

// We may decide that if an array is passed as params then it will create multiple things

const someAnswers = {
  thing: 'answer',
  params: [
    {
      body: 'yes',
      parent:
        '0x9a35d124b3523a5125569d3bd66f126266479f26b8698fa5854d5e149a025dec',
    },
    {
      body: 'no',
      parent:
        '0xaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
    },
  ],
};

const someProof = {
  thing: 'proof',
  params: {
    body: 'Proof that this work or documents exist at time of tx',
    urls: [
      'https://gist.github.com/0xAshish/da7dd0d57885fdcd8f8e296e4f669a81/960f29f429a319f3ec20f9cc9604ce3f8598fd0f',
      'https://github.com/ethereumjs/ethereumjs-util/commit/03bb3ffec33641b895d361e01da5961ae01a3d2b',
    ],
    strings: [],
    parent:
      '0x9a35d124b3523a5125569d3bd66f126266479f26b8698fa5854d5e149a025dec',
  },
};

const someComment = {
  thing: 'comment',
  params: {
    body: 'This is some comment',
    parent:
      '0x9a35d124b3523a5125569d3bd66f126266479f26b8698fa5854d5e149a025dec',
  },
};

// If we want to store many different things then make the payload an array of things.
const manyDifferentThings = [
  {
    thing: 'answer',
    params: {
      body: 'yes',
      parent:
        '0x9a35d124b3523a5125569d3bd66f126266479f26b8698fa5854d5e149a025dec',
    },
  },
  {
    thing: 'comment',
    params: {
      body: 'This is some comment',
      parent:
        '0x9a35d124b3523a5125569d3bd66f126266479f26b8698fa5854d5e149a025dec',
    },
  },
];
