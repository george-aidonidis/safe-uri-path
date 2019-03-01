# safe-uri-path

[![Build Status](https://travis-ci.org/George-Aidonidis/safe-path-uri.svg?branch=master)](https://travis-ci.org/George-Aidonidis/safe-path-uri) [![npm version](https://badge.fury.io/js/safe-uri-path.svg)](https://badge.fury.io/js/safe-uri-path)

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
