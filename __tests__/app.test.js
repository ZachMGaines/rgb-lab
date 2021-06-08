const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');
const getName = require('../lib/app');

describe('rgrefactor routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  it('this is a test that will return the name in the object', () => {


    const spot = { name: 'spot', age: 5, weight: '20 lbs' };
    const actual = getName(spot); // returns spot
    expect(actual).toEqual('spot');

    const character = { _id: '5cf5679a915ecad153ab68c9', name: 'Aang' };
    getName(character); // returns Aang
    expect(actual).toEqual('Aang');


  });
});
