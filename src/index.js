const safelyParseUri = (strings, ...values) =>
  strings.reduce((acc, next, i) => {
    const encodedString = encodeURIComponent(values[i - 1]);
    return `${acc}${encodedString}${next}`;
  });

module.exports = safelyParseUri;
