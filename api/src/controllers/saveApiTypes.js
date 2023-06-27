const { Type } = require('../db');
const axios = require('axios');

const getApitype = async () => {
  try {
    const typesCount = await Type.count();

    if (typesCount === 0) {
      const { data } = await axios('https://pokeapi.co/api/v2/type');

      let types = data.results.map((tp, i) => {
        return {
          name: tp.name,
        };
      });

      const createdTypes = await Type.bulkCreate(types);
      return createdTypes;
    } else {
      return
    }
  } catch (error) {
    return error.message;
  }
};

module.exports = { getApitype };