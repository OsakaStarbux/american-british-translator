/*
 *
 *
 *       FILL IN EACH UNIT TEST BELOW COMPLETELY
 *       -----[Keep the tests in the same order!]----
 *       (if additional are added, keep them at the very end!)
 */

const chai = require('chai');
const assert = chai.assert;

const { JSDOM } = require('jsdom');
let Translator;

suite('Unit Tests', () => {
  suiteSetup(() => {
    // Mock the DOM for testing and load Translator
    return JSDOM.fromFile('./views/index.html')
      .then((dom) => {
        global.window = dom.window;
        global.document = dom.window.document;

        Translator = require('../public/translator.js');
      });
  });

  suite('Function translate()', () => {

    suite('American to British English', () => {

      test('Mangoes are my favorite fruit. --> Mangoes are my favourite fruit.', done => {
        const input = 'Mangoes are my favorite fruit.';
        const expected = 'Mangoes are my favourite fruit.';
        const result = Translator.translate(input,"A2B")
        assert.equal(result, expected)
        done();
      });

      test('I ate yogurt for breakfast. --> I ate yoghurt for breakfast.', done => {
        const input = 'I ate yogurt for breakfast.';
        const expected = 'I ate yoghurt for breakfast.';

        const result = Translator.translate(input, "A2B")
        assert.equal(result, expected)
        done();
      });

      test("We had a party at my friend's condo. --> We had a party at my friend's flat.", done => {
        const input = "We had a party at my friend's condo.";
        const expected = "We had a party at my friend's flat.";

         const result = Translator.translate(input, "A2B")
        assert.equal(result, expected)
        done();
      });

      test('Can you toss this in the trashcan for me? --> Can you toss this in the bin for me?', done => {
        const input = 'Can you toss this in the trashcan for me?';
        const expected = 'Can you toss this in the bin for me?';

         const result = Translator.translate(input, "A2B")
        assert.equal(result, expected)
        done();
      });

      test('The parking lot was full. --> The car park was full.', done => {
        const input = 'The parking lot was full.';
        const expected = 'The car park was full.';

        const result = Translator.translate(input, "A2B")
        assert.equal(result, expected)
        done();
      });

      test('Like a high tech Rube Goldberg machine. --> Like a high tech Heath Robinson device.', done => {
        const input = 'Like a high tech Rube Goldberg machine.';
        const expected = 'Like a high tech Heath Robinson device.';

         const result = Translator.translate(input, "A2B")
        assert.equal(result, expected)
        done();
      });
      
      test('To play hooky means to skip class or work. --> To bunk off means to skip class or work.', done => {
        const input = 'To play hooky means to skip class or work.';
        const expected = 'To bunk off means to skip class or work.';

         const result = Translator.translate(input, "A2B")
        assert.equal(result, expected)
        done();
      });

      test('No Mr. Bond, I expect you to die. --> No Mr Bond, I expect you to die. ', done => {
        const input = 'No Mr. Bond, I expect you to die.';
        const expected = 'No Mr Bond, I expect you to die.';

         const result = Translator.translate(input, "A2B")
         console.log(result)
        assert.equal(result, expected)
        done();
      });

      test('Dr. Grosh will see you now. --> Dr Grosh will see you now. ', done => {
        const input = 'Dr. Grosh will see you now.';
        const expected = 'Dr Grosh will see you now.';

         const result = Translator.translate(input, "A2B")
         console.log(result)
        assert.equal(result, expected)
        done();
      });

      test('Lunch is at 12:15 today. --> Lunch is at 12.15 today.', done => {
        const input = 'Lunch is at 12:15 today.';
        const expected = 'Lunch is at 12.15 today.';
        
         const result = Translator.translate(input, "A2B")
        assert.equal(result, expected)
        done();
      });

    });

    suite('British to American English', () => {

      test('We watched the footie match for a while. --> We watched the soccer match for a while.', done => {
        const input = 'We watched the footie match for a while.';
        const expected = 'We watched the soccer match for a while.';

         const result = Translator.translate(input, "B2A")
        assert.equal(result, expected)
        done();
      });

      test('Paracetamol takes up to an hour to work. --> Tylenol takes up to an hour to work.', done => {
        const input = 'Paracetamol takes up to an hour to work.';
        const expected = 'Tylenol takes up to an hour to work.';

         const result = Translator.translate(input, "B2A")
        assert.equal(result, expected)
        done();
      });

      test('First, caramelise the onions. --> First, caramelize the onions.', done => {
        const input = 'First, caramelise the onions.';
        const expected = 'First, caramelize the onions.';

         const result = Translator.translate(input, "B2A")
        assert.equal(result, expected)
        done();
      });

      test('I spent the bank holiday at the funfair. --> I spent the public holiday at the carnival.', done => {
        const input = 'I spent the bank holiday at the funfair.';
        const expected = 'I spent the public holiday at the carnival.';

         const result = Translator.translate(input, "B2A")
        assert.equal(result, expected)
        done();
      });

      test('I had a bicky then went to the chippy. --> I had a cookie then went to the fish-and-chip shop.', done => {
        const input = 'I had a bicky then went to the chippy.';
        const expected = 'I had a cookie then went to the fish-and-chip shop.';

         const result = Translator.translate(input, "B2A")
        assert.equal(result, expected)
        done();
      });

      test("I've just got bits and bobs in my bum bag. --> I've just got odds and ends in my fanny pack.", done => {
        const input = "I've just got bits and bobs in my bum bag.";
        const expected = "I've just got odds and ends in my fanny pack.";

         const result = Translator.translate(input, "B2A")
        assert.equal(result, expected)
        done();
      });
      
      test("The car boot sale at Boxted Airfield was called off. --> The swap meet at Boxted Airfield was called off.", done => {
        const input = "The car boot sale at Boxted Airfield was called off.";
        const expected = "The swap meet at Boxted Airfield was called off.";

         const result = Translator.translate(input, "B2A")
        assert.equal(result, expected)
        done();
      });

      test("Have you met Mrs Kalyani? --> Have you met Mrs. Kalyani?", done => {
        const input = "Have you met Mrs Kalyani?";
        const expected = "Have you met Mrs. Kalyani?";

         const result = Translator.translate(input, "B2A")
        assert.equal(result, expected)
        done();
      });

      test("Prof Joyner of King's College, London. --> Prof. Joyner of King's College, London.", done => {
        const input = "Prof Joyner of King's College, London.";
        const expected = "Prof. Joyner of King's College, London.";

         const result = Translator.translate(input, "B2A")
        assert.equal(result, expected)
        done();
      });

      test('Lunch is at 12.15 today. --> Lunch is at 12:15 today.', done => {
        const input = 'Lunch is at 12.15 today.';
        const expected = 'Lunch is at 12:15 today.';

         const result = Translator.translate(input, "B2A")
        assert.equal(result, expected)
        done();
      });
      
         test('Tea time is usually around 4 or 4.30. --> Tea time is usually around 4 or 4:30.', done => {
        const input = 'Tea time is usually around 4 or 4.30.';
        const expected = 'Tea time is usually around 4 or 4:30.';

         const result = Translator.translate(input, "B2A")
        assert.equal(result, expected)
        done();
      });

    });

  });

});
