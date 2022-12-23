module.exports.queryString = (obj) =>
  Object.entries(obj)
    .map(([key, value]) => {
      if (typeof value === 'object' && !Array.isArray(value)) {
        // se for um objeto e nao for um array, pois o typeof de um array é um objeto
        throw new Error('Please check your pams');
      }
      return `${key}=${value}`;
    })
    .join('&');
