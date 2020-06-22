const db = require('./dbConfig');
const Sequelize = require('sequelize');
const { STRING, INTEGER, BOOLEAN, ENUM } = Sequelize;

//YOUR CODE GOES HERE

const Recipe = db.define('recipe', {
  name: {
    type: STRING,
    defaultValue: 'cereal',
    notEmpty: true,
  },
  cookTime: {
    type: INTEGER,
    min: 1,
    max: 60,
  },
  vegan: {
    type: BOOLEAN,
  },
  foodGroup: {
    type: ENUM,
    values: ['vegetable', 'dairy', 'grain', 'fruit'],
  },
});
//--------------------
module.exports = Recipe;
