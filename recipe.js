const db = require('./dbConfig');
const Sequelize = require('sequelize');
const { STRING, INTEGER, BOOLEAN, ENUM } = Sequelize;

//YOUR CODE GOES HERE

const Recipe = db.define('recipe', {
  name: {
    type: STRING,
    defaultValue: 'cereal',
    validate: {
      notEmpty: true,
    },
  },
  cookTime: {
    type: INTEGER,
    validate: {
      min: 1,
      max: 60,
    },
  },
  vegan: {
    type: BOOLEAN,
  },
  foodGroup: {
    type: ENUM(['vegetable', 'meat', 'dairy', 'grain', 'fruit']),
  },
});
//--------------------
module.exports = Recipe;
