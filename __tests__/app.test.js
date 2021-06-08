
// const request = require('supertest');
// const app = require('../lib/app');
import getName from '../lib/rgbapp.js';

describe('rgrefactor routes', () => {
  //   beforeEach(() => {
  //     return setup(pool);
  //   });

  it('this is a test that will return the name in the object', () => {
    const spot = { name: 'spot', age: 5, weight: '20 lbs' };
    const actual = getName(spot); // returns spot
    expect(actual).toEqual('spot');

  });

  it('this is a test that will return the name in the object', () => {
    const character = { _id: '5cf5679a915ecad153ab68c9', name: 'Aang' };
    const actual = getName(character); // returns Aang
    expect(actual).toEqual('Aang');


  });
});
