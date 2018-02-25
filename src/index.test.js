const safelyParseUri = require('.');

describe('safelyParseUri', () => {
	test('encodes path when special characters are in place', () => {
		const cat = 'cat';
		const weirdCat = 'cat?format=json';
		const uriPath = safelyParseUri`/${cat}/${weirdCat}`;
		expect(uriPath).toEqual('/cat/cat%3Fformat%3Djson');
	});

	test('Returns empty string when empty string is passed', () => {
		const uriPath = safelyParseUri``;
		expect(uriPath).toEqual('');
	});
});
