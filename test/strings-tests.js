const assert = require('assert');
const tasks = require('../src/strings-tasks');
it.optional = require('../extensions/it-optional');
const forbidden = require('../extensions/forbidden');

let concatenateStringsSuccess = false;
let getFirstCharSuccess = false;
let removeLeadingAndTrailingWhitespacesSuccess = false;
let removeLeadingWhitespacesSuccess = false;
let removeTrailingWhitespacesSuccess = false;
let repeatStringSuccess = false;
let removeFirstOccurrencesSuccess = false;
let removeLastOccurrencesSuccess = false;
let sumOfCodesSuccess = false;
let endsWithSuccess = false;
let startsWithSuccess = false;
let formatTimeSuccess = false;
let containsSubstringSuccess = false;
let invertCaseSuccess = false;
let extractEmailsSuccess = false;

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
    assert.equal(
      forbidden.isCommented(tasks.getStringLength),
      false,
      'Be sure to remove comments from the final solution'
    );
  });

  it.optional('isString should return true if argument is a string', () => {
    assert.equal(tasks.isString('test'), true, '"test" is correct string');
    assert.equal(
      tasks.isString(''),
      true,
      'empty string value is correct string'
    );
    assert.equal(tasks.isString('123'), true, '"123" is correct string');
    assert.equal(
      // eslint-disable-next-line no-new-wrappers
      tasks.isString(new String('test')),
      true,
      '"test" in String is correct string'
    );
    assert.equal(
      // eslint-disable-next-line no-new-wrappers
      tasks.isString(new String('')),
      true,
      'empty string value in String is correct string'
    );
    assert.equal(
      // eslint-disable-next-line no-new-wrappers
      tasks.isString(new String('123')),
      true,
      '"123" in String is correct string'
    );

    assert.equal(tasks.isString(), false, 'empty value is not correct string');
    assert.equal(tasks.isString(null), false, 'null is not string');
    assert.equal(tasks.isString(undefined), false, 'undefined is not string');
    assert.equal(tasks.isString(123), false, 'number 123 is not string');
    assert.equal(tasks.isString([]), false, 'array is not string');
    assert.equal(tasks.isString({}), false, 'object is not string');
    assert.equal(tasks.isString(true), false, 'boolean value is not string');
    assert.equal(tasks.isString(false), false, 'boolean value is not string');
    assert.equal(tasks.isString(42), false, 'number 42 is not string');
    assert.equal(tasks.isString(3.14), false, 'number 3.14 is not string');
    assert.equal(
      forbidden.isCommented(tasks.isString),
      false,
      'Be sure to remove comments from the final solution'
    );
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
      assert.equal(
        forbidden.isCommented(tasks.concatenateStrings),
        false,
        'Be sure to remove comments from the final solution'
      );
      concatenateStringsSuccess = true;
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
      assert.equal(
        forbidden.isCommented(tasks.getFirstChar),
        false,
        'Be sure to remove comments from the final solution'
      );
      getFirstCharSuccess = true;
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
      assert.equal(
        forbidden.isCommented(tasks.removeLeadingAndTrailingWhitespaces),
        false,
        'Be sure to remove comments from the final solution'
      );
      removeLeadingAndTrailingWhitespacesSuccess = true;
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
      assert.equal(
        forbidden.isCommented(tasks.removeLeadingWhitespaces),
        false,
        'Be sure to remove comments from the final solution'
      );
      removeLeadingWhitespacesSuccess = true;
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
      assert.equal(
        forbidden.isCommented(tasks.removeTrailingWhitespaces),
        false,
        'Be sure to remove comments from the final solution'
      );
      removeTrailingWhitespacesSuccess = true;
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
      assert.equal(
        forbidden.isCommented(tasks.repeatString),
        false,
        'Be sure to remove comments from the final solution'
      );
      repeatStringSuccess = true;
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
      assert.equal(
        forbidden.isCommented(tasks.removeFirstOccurrences),
        false,
        'Be sure to remove comments from the final solution'
      );
      removeFirstOccurrencesSuccess = true;
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
      assert.equal(
        forbidden.isCommented(tasks.removeLastOccurrences),
        false,
        'Be sure to remove comments from the final solution'
      );
      removeLastOccurrencesSuccess = true;
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
      assert.equal(
        forbidden.isCommented(tasks.sumOfCodes),
        false,
        'Be sure to remove comments from the final solution'
      );
      sumOfCodesSuccess = true;
    }
  );

  it.optional('startsWith should return true if str starts with substr', () => {
    assert.equal(
      tasks.startsWith('Hello World', 'Hello'),
      true,
      'the line "Hello World" starts with the word "Hello"'
    );
    assert.equal(
      tasks.startsWith('123456789', '1234'),
      true,
      'the line "Hello World" starts with the word "Hello"'
    );
    assert.equal(
      tasks.startsWith('', ''),
      true,
      'the line "" starts with the word ""'
    );
    assert.equal(
      tasks.startsWith('Hello', ''),
      true,
      'the line "Hello" starts with the word ""'
    );
    assert.equal(
      tasks.startsWith('Hello World', 'hello'),
      false,
      'the line "Hello World" not starts with the word "hello"'
    );
    assert.equal(
      tasks.startsWith('HELLO World', 'hello'),
      false,
      'the line "HELLO World" not starts with the word "hello"'
    );
    assert.equal(
      tasks.startsWith('Hello World', 'World'),
      false,
      'the line "Hello World" not starts with the word "World"'
    );
    assert.equal(
      tasks.startsWith('123456789', '9876'),
      false,
      'the line "123456789" not starts with the word "9876"'
    );
    assert.equal(
      tasks.startsWith('', 'Hello'),
      false,
      'the line "" not starts with the word "Hello"'
    );
    assert.equal(
      forbidden.isCommented(tasks.startsWith),
      false,
      'Be sure to remove comments from the final solution'
    );
    startsWithSuccess = true;
  });

  it.optional('endsWith should return true if str ends with substr', () => {
    assert.equal(
      tasks.endsWith('Hello World', 'World'),
      true,
      'the line "Hello World" ends with the word "World"'
    );
    assert.equal(
      tasks.endsWith('123456789', '6789'),
      true,
      'the line "123456789" ends with the word "6789"'
    );
    assert.equal(
      tasks.endsWith('', ''),
      true,
      'the line "" ends with the word ""'
    );
    assert.equal(
      tasks.endsWith('Hello', ''),
      true,
      'the line "Hello" ends with the word ""'
    );
    assert.equal(
      tasks.endsWith('Hello WORLD', 'World'),
      false,
      'the line "Hello WORLD" not ends with the word "World"'
    );
    assert.equal(
      tasks.endsWith('Hello world', 'World'),
      false,
      'the line "Hello world" not ends with the word "World"'
    );
    assert.equal(
      tasks.endsWith('Hello World', 'Hello'),
      false,
      'the line "Hello World" not ends with the word "Hello"'
    );
    assert.equal(
      tasks.endsWith('123456789', '1234'),
      false,
      'the line "123456789" not ends with the word "1234"'
    );
    assert.equal(
      tasks.endsWith('', 'World'),
      false,
      'the line "" not ends with the word "World"'
    );
    assert.equal(
      forbidden.isCommented(tasks.endsWith),
      false,
      'Be sure to remove comments from the final solution'
    );
    endsWithSuccess = true;
  });

  it.optional(
    'formatTime should format time with leading zeros for minutes and seconds',
    () => {
      assert.equal(tasks.formatTime(5, 30), '05:30');
      assert.equal(tasks.formatTime(1, 15), '01:15');
      assert.equal(tasks.formatTime(0, 45), '00:45');
      assert.equal(tasks.formatTime(0, 0), '00:00');
      assert.equal(tasks.formatTime(9, 5), '09:05');
      assert.equal(
        forbidden.isCommented(tasks.formatTime),
        false,
        'Be sure to remove comments from the final solution'
      );
      formatTimeSuccess = true;
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
    assert.equal(
      forbidden.isCommented(tasks.reverseString),
      false,
      'Be sure to remove comments from the final solution'
    );
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
      assert.equal(
        forbidden.isCommented(tasks.orderAlphabetically),
        false,
        'Be sure to remove comments from the final solution'
      );
    }
  );

  it.optional(
    'containsSubstring should return true if the input string contains the specified substring',
    () => {
      assert.equal(
        tasks.containsSubstring('Hello, World!', 'World'),
        true,
        'the line "Hello, World!" contains the substring "World"'
      );
      assert.equal(
        tasks.containsSubstring('12345', '34'),
        true,
        'the line "12345" contains the substring "34"'
      );
      assert.equal(
        tasks.containsSubstring('Sample text', ''),
        true,
        'the line "Sample text" contains the substring ""'
      );
      assert.equal(
        tasks.containsSubstring('JavaScript is Fun', 'Python'),
        false,
        'the line "JavaScript is Fun" not contains the substring "Python"'
      );
      assert.equal(
        tasks.containsSubstring('abc', 'xyz'),
        false,
        'the line "abc" not contains the substring "xyz"'
      );
      assert.equal(
        tasks.containsSubstring('', 'substring'),
        false,
        'the line "" not contains the substring "substring"'
      );
      assert.equal(
        tasks.containsSubstring('', ''),
        true,
        'the line "" contains the substring ""'
      );
      assert.equal(
        tasks.containsSubstring('Hello, world!', 'World'),
        false,
        'the line "Hello, world!" not contains the substring "World"'
      );
      assert.equal(
        tasks.containsSubstring('Hello, World!', 123),
        false,
        'the line "Hello, World!" not contains the number value 123'
      );
      assert.equal(
        forbidden.isCommented(tasks.containsSubstring),
        false,
        'Be sure to remove comments from the final solution'
      );
      containsSubstringSuccess = true;
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
      assert.equal(
        forbidden.isCommented(tasks.countVowels),
        false,
        'Be sure to remove comments from the final solution'
      );
    }
  );

  it.optional(
    'isPalindrome should return true if the string is a palindrome',
    () => {
      assert.equal(
        tasks.isPalindrome('madam'),
        true,
        '"madam" this string is a palindome'
      );
      assert.equal(
        tasks.isPalindrome('racecar'),
        true,
        '"racecar" this string is a palindome'
      );
      assert.equal(
        tasks.isPalindrome('a'),
        true,
        '"a" this string is a palindome'
      );
      assert.equal(
        tasks.isPalindrome('deified'),
        true,
        '"deified" this string is a palindome'
      );
      assert.equal(
        tasks.isPalindrome('apple'),
        false,
        '"apple" this string is not a palindome'
      );
      assert.equal(
        tasks.isPalindrome('hello'),
        false,
        '"hello" this string is not a palindome'
      );
      assert.equal(
        tasks.isPalindrome('world'),
        false,
        '"world" this string is not a palindome'
      );
      assert.equal(
        tasks.isPalindrome('openai'),
        false,
        '"openai" this string is not a palindome'
      );
      assert.equal(
        tasks.isPalindrome('Madam'),
        true,
        '"Madam" this string is a palindome'
      );
      assert.equal(
        tasks.isPalindrome('RacECaR'),
        true,
        '"RacECaR" this string is a palindome'
      );
      assert.equal(
        tasks.isPalindrome('Deified'),
        true,
        '"Deified" this string is a palindome'
      );
      assert.equal(
        tasks.isPalindrome('A man, a plan, a canal, Panama!'),
        true,
        '"A man, a plan, a canal, Panama!" this string is a palindome'
      );
      assert.equal(
        tasks.isPalindrome('Was it a car or a cat I saw?'),
        true,
        '"Was it a car or a cat I saw?" this string is a palindome'
      );
      assert.equal(
        tasks.isPalindrome('No lemon, no melon'),
        true,
        '"No lemon, no melon" this string is a palindome'
      );
      assert.equal(
        forbidden.isCommented(tasks.isPalindrome),
        false,
        'Be sure to remove comments from the final solution'
      );
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
      assert.equal(
        forbidden.isCommented(tasks.findLongestWord),
        false,
        'Be sure to remove comments from the final solution'
      );
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
    assert.equal(
      forbidden.isCommented(tasks.reverseWords),
      false,
      'Be sure to remove comments from the final solution'
    );
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
      assert.equal(
        forbidden.isCommented(tasks.invertCase),
        false,
        'Be sure to remove comments from the final solution'
      );
      invertCaseSuccess = true;
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
      assert.equal(
        forbidden.isCommented(tasks.getStringFromTemplate),
        false,
        'Be sure to remove comments from the final solution'
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
      assert.equal(
        forbidden.isCommented(tasks.extractNameFromTemplate),
        false,
        'Be sure to remove comments from the final solution'
      );
    }
  );

  it.optional(
    'unbracketTag should remove first and last angle brackets from tag string',
    () => {
      assert.equal(tasks.unbracketTag('<div>'), 'div');
      assert.equal(tasks.unbracketTag('<span>'), 'span');
      assert.equal(tasks.unbracketTag('<a>'), 'a');
      assert.equal(
        forbidden.isCommented(tasks.unbracketTag),
        false,
        'Be sure to remove comments from the final solution'
      );
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
      assert.equal(
        forbidden.isCommented(tasks.extractEmails),
        false,
        'Be sure to remove comments from the final solution'
      );
      extractEmailsSuccess = true;
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
      assert.equal(
        forbidden.isCommented(tasks.encodeToRot13),
        false,
        'Be sure to remove comments from the final solution'
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
      assert.equal(
        forbidden.isCommented(tasks.getCardId),
        false,
        'Be sure to remove comments from the final solution'
      );
    }
  );
});

describe('strings-tasks optimal implementation', () => {
  it.optional('optimal implementation of concatenateStrings', function test() {
    let fnStr = tasks.concatenateStrings.toString();
    const idx = fnStr.indexOf('{');
    fnStr = fnStr.slice(idx);

    if (!fnStr.includes('return') || !concatenateStringsSuccess) {
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
    if (!fnStr.includes('return') || !getFirstCharSuccess) {
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

      if (
        !fnStr.includes('return') ||
        !removeLeadingAndTrailingWhitespacesSuccess
      ) {
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

      if (!fnStr.includes('return') || !removeLeadingWhitespacesSuccess) {
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

      if (!fnStr.includes('return') || !removeTrailingWhitespacesSuccess) {
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

    if (!fnStr.includes('return') || !repeatStringSuccess) {
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
      if (!fnStr.includes('return') || !removeFirstOccurrencesSuccess) {
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
      if (!fnStr.includes('return') || !removeLastOccurrencesSuccess) {
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
    if (!fnStr.includes('return') || !sumOfCodesSuccess) {
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

    if (!fnStr.includes('return') || !endsWithSuccess) {
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

    if (!fnStr.includes('return') || !startsWithSuccess) {
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
    if (!fnStr.includes('return') || !formatTimeSuccess) {
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
    if (!fnStr.includes('return') || !containsSubstringSuccess) {
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
    if (!fnStr.includes('return') || !invertCaseSuccess) {
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
    if (!fnStr.includes('return') || !extractEmailsSuccess) {
      this.skip();
    }
    assert.deepEqual(tasks.extractEmails('info@gmail.com'), ['info@gmail.com']);
    assert.equal(
      fnStr.includes('split'),
      true,
      'You need to use a different method, look for the appropriate method in the documentation https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String'
    );
  });
});
