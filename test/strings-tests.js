const assert = require('assert');
const tasks = require('../src/strings-tasks');
it.optional = require('../extensions/it-optional');

describe('strings-tasks', () => {
  it.optional('getStringLength should return the length of string', () => {
    assert.equal(tasks.getStringLength('aaaaa'), 5);
    assert.equal(tasks.getStringLength('b'), 1);
    assert.equal(tasks.getStringLength(''), 0);
    assert.equal(tasks.getStringLength('Hello, World!'), 13);
    assert.equal(tasks.getStringLength('   '), 3);
    assert.equal(tasks.getStringLength('!@#$'), 4);
    assert.equal(tasks.getStringLength(null), 0);
    assert.equal(tasks.getStringLength(undefined), 0);
    assert.equal(tasks.getStringLength(), 0);
  });

  it.optional('isString should return true if argument is a string', () => {
    assert.equal(tasks.isString('test'), true);
    assert.equal(tasks.isString(''), true);
    assert.equal(tasks.isString('123'), true);
    // eslint-disable-next-line no-new-wrappers
    assert.equal(tasks.isString(new String('test')), true);
    // eslint-disable-next-line no-new-wrappers
    assert.equal(tasks.isString(new String('')), true);
    // eslint-disable-next-line no-new-wrappers
    assert.equal(tasks.isString(new String('123')), true);

    assert.equal(tasks.isString(), false);
    assert.equal(tasks.isString(null), false);
    assert.equal(tasks.isString(undefined), false);
    assert.equal(tasks.isString(123), false);
    assert.equal(tasks.isString([]), false);
    assert.equal(tasks.isString({}), false);
    assert.equal(tasks.isString(true), false);
    assert.equal(tasks.isString(false), false);
    assert.equal(tasks.isString(42), false);
    assert.equal(tasks.isString(3.14), false);
  });

  it.optional(
    'concatenateStrings should return concatenation of two strings',
    () => {
      assert.equal(tasks.concatenateStrings('aa', 'bb'), 'aabb');
      assert.equal(
        tasks.concatenateStrings('Hello, ', 'World!'),
        'Hello, World!'
      );
      assert.equal(tasks.concatenateStrings('123', '456'), '123456');
      assert.equal(tasks.concatenateStrings('', 'bb'), 'bb');
      assert.equal(tasks.concatenateStrings('', '123'), '123');
      assert.equal(tasks.concatenateStrings('aa', ''), 'aa');
      assert.equal(tasks.concatenateStrings('Hello, ', ''), 'Hello, ');
      assert.equal(tasks.concatenateStrings('', ''), '');
    }
  );

  it.optional(
    'getFirstChar should return the first char from given string',
    () => {
      assert.equal(tasks.getFirstChar('cat'), 'c');
      assert.equal(tasks.getFirstChar('Hello, World!'), 'H');
      assert.equal(tasks.getFirstChar('a'), 'a');
      assert.equal(tasks.getFirstChar(''), '');
      assert.equal(tasks.getFirstChar('   John'), ' ');
      assert.equal(tasks.getFirstChar('12345'), '1');
      assert.equal(tasks.getFirstChar('!@#$'), '!');
    }
  );

  it.optional(
    'removeLeadingAndTrailingWhitespaces should remove leading and trailing whitespaces from the string',
    () => {
      assert.equal(
        tasks.removeLeadingAndTrailingWhitespaces('  Abracadabra'),
        'Abracadabra'
      );
      assert.equal(tasks.removeLeadingAndTrailingWhitespaces(' cat '), 'cat');
      assert.equal(tasks.removeLeadingAndTrailingWhitespaces('!@#$'), '!@#$');
      assert.equal(
        tasks.removeLeadingAndTrailingWhitespaces('\tHello, World! '),
        'Hello, World!'
      );
      assert.equal(
        tasks.removeLeadingAndTrailingWhitespaces('\t\t\tHello, World! '),
        'Hello, World!'
      );
      assert.equal(
        tasks.removeLeadingAndTrailingWhitespaces(' Hello, World!\t\t\t'),
        'Hello, World!'
      );
      assert.equal(tasks.removeLeadingAndTrailingWhitespaces(''), '');
      assert.equal(tasks.removeLeadingAndTrailingWhitespaces('    '), '');
      assert.equal(tasks.removeLeadingAndTrailingWhitespaces('\t\t\t'), '');
      assert.equal(tasks.removeLeadingAndTrailingWhitespaces('\n\n\n'), '');
    }
  );

  it.optional(
    'removeLeadingWhitespaces should remove leading whitespaces from the string',
    () => {
      assert.equal(
        tasks.removeLeadingWhitespaces('  Abracadabra'),
        'Abracadabra'
      );
      assert.equal(tasks.removeLeadingWhitespaces(' cat '), 'cat ');
      assert.equal(tasks.removeLeadingWhitespaces('!@#$'), '!@#$');
      assert.equal(
        tasks.removeLeadingWhitespaces('\tHello, World! '),
        'Hello, World! '
      );
      assert.equal(
        tasks.removeLeadingWhitespaces('\t\t\tHello, World! '),
        'Hello, World! '
      );
      assert.equal(
        tasks.removeLeadingWhitespaces(' Hello, World!\t\t\t'),
        'Hello, World!\t\t\t'
      );
      assert.equal(tasks.removeLeadingWhitespaces(''), '');
      assert.equal(tasks.removeLeadingWhitespaces('    '), '');
      assert.equal(tasks.removeLeadingWhitespaces('\t\t\t'), '');
      assert.equal(tasks.removeLeadingWhitespaces('\n\n\n'), '');
    }
  );

  it.optional(
    'removeTrailingWhitespaces should remove trailing whitespaces from the string',
    () => {
      assert.equal(
        tasks.removeTrailingWhitespaces('  Abracadabra'),
        '  Abracadabra'
      );
      assert.equal(tasks.removeTrailingWhitespaces(' cat '), ' cat');
      assert.equal(tasks.removeTrailingWhitespaces('!@#$'), '!@#$');
      assert.equal(
        tasks.removeTrailingWhitespaces('\tHello, World! '),
        '\tHello, World!'
      );
      assert.equal(
        tasks.removeTrailingWhitespaces('\t\t\tHello, World! '),
        '\t\t\tHello, World!'
      );
      assert.equal(
        tasks.removeTrailingWhitespaces(' Hello, World!\t\t\t'),
        ' Hello, World!'
      );
      assert.equal(tasks.removeTrailingWhitespaces(''), '');
      assert.equal(tasks.removeTrailingWhitespaces('    '), '');
      assert.equal(tasks.removeTrailingWhitespaces('\t\t\t'), '');
      assert.equal(tasks.removeTrailingWhitespaces('\n\n\n'), '');
    }
  );

  it.optional(
    'repeatString should repeat string specified number of times',
    () => {
      assert.equal(tasks.repeatString('A', 5), 'AAAAA');
      assert.equal(tasks.repeatString('cat', 3), 'catcatcat');
      assert.equal(tasks.repeatString('', 3), '');
      assert.equal(tasks.repeatString('Hello, World!', 0), '');
      assert.equal(tasks.repeatString('abc', -2), '');
      assert.equal(tasks.repeatString('!@#', 4), '!@#!@#!@#!@#');
    }
  );

  it.optional(
    'removeFirstOccurrences should remove the first occurrence of a substring from a string',
    () => {
      assert.equal(
        tasks.removeFirstOccurrences('To be or not to be', 'be'),
        'To  or not to be'
      );
      assert.equal(
        tasks.removeFirstOccurrences('I like legends', 'end'),
        'I like legs'
      );
      assert.equal(tasks.removeFirstOccurrences('ABABAB', 'BA'), 'ABAB');
      assert.equal(tasks.removeFirstOccurrences('', 'test'), '');
      assert.equal(
        tasks.removeFirstOccurrences('Hello, World!', ''),
        'Hello, World!'
      );
      assert.equal(
        tasks.removeFirstOccurrences('The quick brown fox', 'dog'),
        'The quick brown fox'
      );
      assert.equal(tasks.removeFirstOccurrences('!@#', '!@'), '#');
    }
  );

  it.optional(
    'removeLastOccurrences should remove the last occurrence of a substring from a string',
    () => {
      assert.equal(
        tasks.removeLastOccurrences('To be or not to be', 'be'),
        'To be or not to '
      );
      assert.equal(
        tasks.removeLastOccurrences('I like legends', 'end'),
        'I like legs'
      );
      assert.equal(tasks.removeLastOccurrences('ABABAB', 'BA'), 'ABAB');
      assert.equal(tasks.removeLastOccurrences('', 'test'), '');
      assert.equal(
        tasks.removeLastOccurrences('Hello, World!', ''),
        'Hello, World!'
      );
      assert.equal(
        tasks.removeLastOccurrences('The quick brown fox', 'dog'),
        'The quick brown fox'
      );
      assert.equal(tasks.removeLastOccurrences('!@#', '!@'), '#');
    }
  );

  it.optional(
    'sumOfCodes should calculate the sum of character codes of the given string',
    () => {
      assert.equal(tasks.sumOfCodes('My String'), 861);
      assert.equal(tasks.sumOfCodes('12345'), 255);
      assert.equal(tasks.sumOfCodes(''), 0);
      assert.equal(tasks.sumOfCodes(), 0);
      assert.equal(tasks.sumOfCodes(null), 0);
      assert.equal(tasks.sumOfCodes(undefined), 0);
      assert.equal(tasks.sumOfCodes('Hello, World!'), 1129);
      assert.equal(tasks.sumOfCodes('!@#$%^&*()'), 460);
    }
  );

  it.optional('startsWith should return true if str starts with substr', () => {
    assert.equal(tasks.startsWith('Hello World', 'Hello'), true);
    assert.equal(tasks.startsWith('123456789', '1234'), true);
    assert.equal(tasks.startsWith('', ''), true);
    assert.equal(tasks.startsWith('Hello', ''), true);
    assert.equal(tasks.startsWith('Hello World', 'hello'), false);
    assert.equal(tasks.startsWith('HELLO World', 'hello'), false);
    assert.equal(tasks.startsWith('Hello World', 'World'), false);
    assert.equal(tasks.startsWith('123456789', '9876'), false);
    assert.equal(tasks.startsWith('', 'Hello'), false);
  });

  it.optional('endsWith should return true if str ends with substr', () => {
    assert.equal(tasks.endsWith('Hello World', 'World'), true);
    assert.equal(tasks.endsWith('123456789', '6789'), true);
    assert.equal(tasks.endsWith('', ''), true);
    assert.equal(tasks.endsWith('Hello', ''), true);
    assert.equal(tasks.endsWith('Hello WORLD', 'World'), false);
    assert.equal(tasks.endsWith('Hello world', 'World'), false);
    assert.equal(tasks.endsWith('Hello World', 'Hello'), false);
    assert.equal(tasks.endsWith('123456789', '1234'), false);
    assert.equal(tasks.endsWith('', 'World'), false);
  });

  it.optional(
    'formatTime should format time with leading zeros for minutes and seconds',
    () => {
      assert.equal(tasks.formatTime(5, 30), '05:30');
      assert.equal(tasks.formatTime(1, 15), '01:15');
      assert.equal(tasks.formatTime(0, 45), '00:45');
      assert.equal(tasks.formatTime(0, 0), '00:00');
      assert.equal(tasks.formatTime(9, 5), '09:05');
    }
  );

  it.optional('reverseString should reverse a string with letters', () => {
    assert.equal(tasks.reverseString('abcdef'), 'fedcba');
    assert.equal(tasks.reverseString('Hello'), 'olleH');
    assert.equal(tasks.reverseString('12345'), '54321');
    assert.equal(tasks.reverseString('9876543210'), '0123456789');
    assert.equal(tasks.reverseString(''), '');
    assert.equal(tasks.reverseString('a'), 'a');
    assert.equal(tasks.reverseString('5'), '5');
  });

  it.optional(
    'orderAlphabetically should order characters in alphabetical order for a given string',
    () => {
      assert.equal(tasks.orderAlphabetically('webmaster'), 'abeemrstw');
      assert.equal(tasks.orderAlphabetically('textbook'), 'bekoottx');
      assert.equal(tasks.orderAlphabetically('hello world'), ' dehllloorw');
      assert.equal(tasks.orderAlphabetically('abc123xyz'), '123abcxyz');
      assert.equal(tasks.orderAlphabetically('a'), 'a');
      assert.equal(tasks.orderAlphabetically(''), '');
    }
  );

  it.optional(
    'containsSubstring should return true if the input string contains the specified substring',
    () => {
      assert.equal(tasks.containsSubstring('Hello, World!', 'World'), true);
      assert.equal(tasks.containsSubstring('12345', '34'), true);
      assert.equal(tasks.containsSubstring('Sample text', ''), true);
      assert.equal(
        tasks.containsSubstring('JavaScript is Fun', 'Python'),
        false
      );
      assert.equal(tasks.containsSubstring('abc', 'xyz'), false);
      assert.equal(tasks.containsSubstring('', 'substring'), false);
      assert.equal(tasks.containsSubstring('', ''), true);
      assert.equal(tasks.containsSubstring('Hello, world!', 'World'), false);
      assert.equal(tasks.containsSubstring('Hello, World!', 123), false);
    }
  );

  it.optional(
    'countVowels should return the number of vowels in the string',
    () => {
      assert.equal(tasks.countVowels(''), 0);
      assert.equal(tasks.countVowels('apple'), 2);
      assert.equal(tasks.countVowels('banana'), 3);
      assert.equal(tasks.countVowels('cherry'), 2);
      assert.equal(tasks.countVowels('aEiOu'), 5);
      assert.equal(tasks.countVowels('XYZ'), 1);
      assert.equal(tasks.countVowels('hmm'), 0);
      assert.equal(tasks.countVowels('1234'), 0);
    }
  );

  it.optional(
    'isPalindrome should return true if the string is a palindrome',
    () => {
      assert.equal(tasks.isPalindrome('madam'), true);
      assert.equal(tasks.isPalindrome('racecar'), true);
      assert.equal(tasks.isPalindrome('a'), true);
      assert.equal(tasks.isPalindrome('deified'), true);
      assert.equal(tasks.isPalindrome('apple'), false);
      assert.equal(tasks.isPalindrome('hello'), false);
      assert.equal(tasks.isPalindrome('world'), false);
      assert.equal(tasks.isPalindrome('openai'), false);
      assert.equal(tasks.isPalindrome('Madam'), true);
      assert.equal(tasks.isPalindrome('RacECaR'), true);
      assert.equal(tasks.isPalindrome('Deified'), true);
      assert.equal(tasks.isPalindrome('A man, a plan, a canal, Panama!'), true);
      assert.equal(tasks.isPalindrome('Was it a car or a cat I saw?'), true);
      assert.equal(tasks.isPalindrome('No lemon, no melon'), true);
    }
  );

  it.optional(
    'findLongestWord should return the longest word in the sentence',
    () => {
      assert.equal(tasks.findLongestWord('The quick brown fox'), 'quick');
      assert.equal(tasks.findLongestWord('A long and winding road'), 'winding');
      assert.equal(tasks.findLongestWord('No words here'), 'words');
      assert.equal(tasks.findLongestWord('Hello World'), 'Hello');
      assert.equal(tasks.findLongestWord('One two three four'), 'three');
      assert.equal(tasks.findLongestWord('The quick brown fox quick'), 'quick');
      assert.equal(
        tasks.findLongestWord('A long and winding road winding'),
        'winding'
      );
      assert.equal(tasks.findLongestWord('The QuIck BROWN foX'), 'QuIck');
      assert.equal(tasks.findLongestWord(''), '');
    }
  );

  it.optional('reverseWords should reverse each word in the sentence', () => {
    assert.equal(tasks.reverseWords('Hello World'), 'olleH dlroW');
    assert.equal(
      tasks.reverseWords('The Quick Brown Fox'),
      'ehT kciuQ nworB xoF'
    );
    assert.equal(tasks.reverseWords('12345'), '54321');
    assert.equal(
      tasks.reverseWords('UPPERCASE lowercase'),
      'ESACREPPU esacrewol'
    );
    assert.equal(tasks.reverseWords(''), '');
  });

  it.optional(
    'invertCase should return the string with the case of each character inverted.',
    () => {
      assert.equal(tasks.invertCase('Hello, World!'), 'hELLO, wORLD!');
      assert.equal(tasks.invertCase('JavaScript is Fun'), 'jAVAsCRIPT IS fUN');
      assert.equal(tasks.invertCase('12345'), '12345');
      assert.equal(tasks.invertCase('!@#$'), '!@#$');
      assert.equal(tasks.invertCase(''), '');
      assert.equal(tasks.invertCase('Hello, 12345!'), 'hELLO, 12345!');
      assert.equal(tasks.invertCase('1a2b3c4d5'), '1A2B3C4D5');
    }
  );

  it.optional(
    'getStringFromTemplate should create a string from template using given parameters',
    () => {
      assert.equal(
        tasks.getStringFromTemplate('John', 'Doe'),
        'Hello, John Doe!'
      );
      assert.equal(
        tasks.getStringFromTemplate('Chuck', 'Norris'),
        'Hello, Chuck Norris!'
      );
    }
  );

  it.optional(
    'extractNameFromTemplate should parse the name from given string',
    () => {
      assert.equal(
        tasks.extractNameFromTemplate('Hello, John Doe!'),
        'John Doe'
      );
      assert.equal(
        tasks.extractNameFromTemplate('Hello, Chuck Norris!'),
        'Chuck Norris'
      );
    }
  );

  it.optional(
    'unbracketTag should remove first and last angle brackets from tag string',
    () => {
      assert.equal(tasks.unbracketTag('<div>'), 'div');
      assert.equal(tasks.unbracketTag('<span>'), 'span');
      assert.equal(tasks.unbracketTag('<a>'), 'a');
    }
  );

  it.optional(
    'extractEmails should extract emails from string list delimeted by semicolons',
    () => {
      assert.deepEqual(
        tasks.extractEmails(
          'angus.young@gmail.com;brian.johnson@hotmail.com;bon.scott@yahoo.com'
        ),
        [
          'angus.young@gmail.com',
          'brian.johnson@hotmail.com',
          'bon.scott@yahoo.com',
        ]
      );
      assert.deepEqual(tasks.extractEmails('info@gmail.com'), [
        'info@gmail.com',
      ]);
    }
  );

  it.optional(
    'encodeToRot13 should encode-decode string using ROT13 algorithm',
    () => {
      assert.equal(tasks.encodeToRot13('hello'), 'uryyb');
      assert.equal(
        tasks.encodeToRot13('Why did the chicken cross the road?'),
        'Jul qvq gur puvpxra pebff gur ebnq?'
      );
      assert.equal(
        tasks.encodeToRot13('Gb trg gb gur bgure fvqr!'),
        'To get to the other side!'
      );
      assert.equal(
        tasks.encodeToRot13(
          'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
        ),
        'NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm'
      );
    }
  );

  it.optional(
    'getCardId should return the index of card in the initial deck',
    () => {
      [
        'A♣',
        '2♣',
        '3♣',
        '4♣',
        '5♣',
        '6♣',
        '7♣',
        '8♣',
        '9♣',
        '10♣',
        'J♣',
        'Q♣',
        'K♣',
        'A♦',
        '2♦',
        '3♦',
        '4♦',
        '5♦',
        '6♦',
        '7♦',
        '8♦',
        '9♦',
        '10♦',
        'J♦',
        'Q♦',
        'K♦',
        'A♥',
        '2♥',
        '3♥',
        '4♥',
        '5♥',
        '6♥',
        '7♥',
        '8♥',
        '9♥',
        '10♥',
        'J♥',
        'Q♥',
        'K♥',
        'A♠',
        '2♠',
        '3♠',
        '4♠',
        '5♠',
        '6♠',
        '7♠',
        '8♠',
        '9♠',
        '10♠',
        'J♠',
        'Q♠',
        'K♠',
      ].forEach((val, index) => {
        assert.equal(
          tasks.getCardId(val),
          index,
          `Invalid id for card '${val}':`
        );
      });
    }
  );
});

describe('strings-tasks optimal implementation', () => {
  it.optional('optimal implementation of concatenateStrings', function test() {
    let fnStr = tasks.concatenateStrings.toString();
    const idx = fnStr.indexOf('{');
    fnStr = fnStr.slice(idx);

    if (!fnStr.includes('return')) {
      this.skip();
    }

    assert.equal(
      fnStr.includes('concat'),
      true,
      'You need to use a different method, look for the appropriate method in the documentation https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String'
    );
  });

  it.optional('optimal implementation of getFirstChar', function test() {
    const fnStr = tasks.getFirstChar.toString();
    if (!fnStr.includes('return')) {
      this.skip();
    }
    assert.equal(
      fnStr.includes('charAt'),
      true,
      'You need to use a different method, look for the appropriate method in the documentation https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String'
    );
  });

  it.optional(
    'optimal implementation of removeLeadingAndTrailingWhitespaces',
    function test() {
      let fnStr = tasks.removeLeadingAndTrailingWhitespaces.toString();
      const idx = fnStr.indexOf('{');
      fnStr = fnStr.slice(idx);

      if (!fnStr.includes('return')) {
        this.skip();
      }

      assert.equal(
        fnStr.includes('trim'),
        true,
        'You need to use a different method, look for the appropriate method in the documentation https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String'
      );
    }
  );

  it.optional(
    'optimal implementation of removeLeadingWhitespaces',
    function test() {
      let fnStr = tasks.removeLeadingWhitespaces.toString();
      const idx = fnStr.indexOf('{');
      fnStr = fnStr.slice(idx);

      if (!fnStr.includes('return')) {
        this.skip();
      }

      assert.equal(
        fnStr.includes('trimStart'),
        true,
        'You need to use a different method, look for the appropriate method in the documentation https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String'
      );
    }
  );

  it.optional(
    'optimal implementation of removeTrailingWhitespaces',
    function test() {
      let fnStr = tasks.removeTrailingWhitespaces.toString();
      const idx = fnStr.indexOf('{');
      fnStr = fnStr.slice(idx);

      if (!fnStr.includes('return')) {
        this.skip();
      }

      assert.equal(
        fnStr.includes('trimEnd'),
        true,
        'You need to use a different method, look for the appropriate method in the documentation https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String'
      );
    }
  );

  it.optional('optimal implementation of repeatString', function test() {
    let fnStr = tasks.repeatString.toString();
    const idx = fnStr.indexOf('{');
    fnStr = fnStr.slice(idx);

    if (!fnStr.includes('return')) {
      this.skip();
    }

    assert.equal(
      fnStr.includes('repeat'),
      true,
      'You need to use a different method, look for the appropriate method in the documentation https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String'
    );
  });

  it.optional(
    'optimal implementation of removeFirstOccurrences',
    function test() {
      const fnStr = tasks.removeFirstOccurrences.toString();
      if (!fnStr.includes('return')) {
        this.skip();
      }
      assert.equal(
        fnStr.includes('indexOf'),
        true,
        'You need to use a different method, look for the appropriate method in the documentation https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String'
      );
    }
  );

  it.optional(
    'optimal implementation of removeLastOccurrences',
    function test() {
      const fnStr = tasks.removeLastOccurrences.toString();
      if (!fnStr.includes('return')) {
        this.skip();
      }
      assert.equal(
        fnStr.includes('lastIndexOf'),
        true,
        'You need to use a different method, look for the appropriate method in the documentation https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String'
      );
    }
  );

  it.optional('optimal implementation of sumOfCodes', function test() {
    const fnStr = tasks.sumOfCodes.toString();
    if (!fnStr.includes('return')) {
      this.skip();
    }
    assert.equal(
      fnStr.includes('charCodeAt'),
      true,
      'You need to use a different method, look for the appropriate method in the documentation https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String'
    );
  });

  it.optional('optimal implementation of endsWith', function test() {
    let fnStr = tasks.endsWith.toString();
    const idx = fnStr.indexOf('{');
    fnStr = fnStr.slice(idx);

    if (!fnStr.includes('return')) {
      this.skip();
    }

    assert.equal(
      fnStr.includes('endsWith'),
      true,
      'You need to use a different method, look for the appropriate method in the documentation https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String'
    );
  });

  it.optional('optimal implementation of startsWith', function test() {
    let fnStr = tasks.startsWith.toString();
    const idx = fnStr.indexOf('{');
    fnStr = fnStr.slice(idx);

    if (!fnStr.includes('return')) {
      this.skip();
    }

    assert.equal(
      fnStr.includes('startsWith'),
      true,
      'You need to use a different method, look for the appropriate method in the documentation https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String'
    );
  });

  it.optional('optimal implementation of formatTime', function test() {
    const fnStr = tasks.formatTime.toString();
    if (!fnStr.includes('return')) {
      this.skip();
    }
    assert.equal(
      fnStr.includes('padStart'),
      true,
      'You need to use a different method, look for the appropriate method in the documentation https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String'
    );
  });

  it.optional('optimal implementation of containsSubstring', function test() {
    const fnStr = tasks.containsSubstring.toString();
    if (!fnStr.includes('return')) {
      this.skip();
    }
    assert.equal(
      fnStr.includes('includes'),
      true,
      'You need to use a different method, look for the appropriate method in the documentation https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String'
    );
  });

  it.optional('optimal implementation of invertCase', function test() {
    const fnStr = tasks.invertCase.toString();
    if (!fnStr.includes('return')) {
      this.skip();
    }
    assert.equal(
      fnStr.includes('toLowerCase') && fnStr.includes('toUpperCase'),
      true,
      'You need to use a different method, look for the appropriate method in the documentation https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String'
    );
  });

  it.optional('optimal implementation of extractEmails', function test() {
    const fnStr = tasks.extractEmails.toString();
    if (!fnStr.includes('return')) {
      this.skip();
    }
    assert.equal(
      fnStr.includes('split'),
      true,
      'You need to use a different method, look for the appropriate method in the documentation https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String'
    );
  });
});
