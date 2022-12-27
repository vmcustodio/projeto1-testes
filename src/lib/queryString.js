const keyValueToString = ([key, value]) => {
  if (typeof value === 'object' && !Array.isArray(value)) {
    // se for um objeto e nao for um array, pois o typeof de um array é um objeto
    throw new Error('Please check your pams');
  }
  return `${key}=${value}`;
};

module.exports.queryString = (obj) =>
  Object.entries(obj).map(keyValueToString).join('&');

module.exports.parse = (string) => {
  return Object.fromEntries(
    string.split('&').map((item) => {
      let [key, value] = item.split('=');

      if (value.indexOf(',') > -1) {
        value = value.split(',');
      }
      return [key, value];
    })
  );
};
