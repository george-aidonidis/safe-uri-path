# safe-uri-path

[![CircleCI](https://circleci.com/gh/george-aidonidis/safe-uri-path.svg?style=svg)](https://circleci.com/gh/george-aidonidis/safe-uri-path) [![codecov](https://codecov.io/gh/george-aidonidis/safe-uri-path/badge.svg?branch=master)](https://codecov.io/gh/George-Aidonidis/safe-uri-path?branch=master) [![npm version](https://badge.fury.io/js/safe-uri-path.svg)](https://badge.fury.io/js/safe-uri-path)

A module to safely parse uri paths.

## Why? :thinking:

There are times that a string path will contain special characters. Imagine you are using a cat api and someone named a cat `cat?*=my&cat`. That is not a valid part of a url if someone was to include it. This library helps parsing correctly any uri paths :tada:

## Install :metal:

```bash
yarn add --save safe-uri-path
```

## Example

```javascript
const safeUriPath = require('safe-uri-path');

const cat = 'cat';
// weird string with special characters
const weirdCat = 'cat?format=json';

const uriPath = safelyParseUri`/${cat}/${weirdCat}`;
```

## Contributing

1. Fork it (<https://github.com/George-Aidonidis/safe-uri-path/fork>)
2. Create your feature branch (git checkout -b feature/fooBar)
3. Commit your changes (git commit -am 'Add some fooBar')
4. Push to the branch (git push origin feature/fooBar)
5. Create a new Pull Request

## License

[MIT](./license) ©
