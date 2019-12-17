require('dotenv').config();

const request = require('supertest');
const app = require('../lib/app');
const connect = require('../lib/utils/connect');
const mongoose = require('mongoose');

describe('app routes', () => {
  beforeAll(() => {
    connect();
  });

  beforeEach(() => {
    return mongoose.connection.dropDatabase();
  });

  afterAll(() => {
    return mongoose.connection.close();
  });

  it('creates a trip', () => {
    return request(app)
      .post('/api/v1/trips')
      .send({
        name: 'Paris',
        beginDate: new Date('2019-12-20T00:00:00'),
        endDate: new Date('2019-12-27T00:00:00')
      })
      .then(res => {
        expect(res.body).toEqual({
          _id: expect.any(String),
          name: 'Paris',
          beginDate: expect.toEqual('2019-12-20T08:00:00.000Z'),
          endDate: expect.toEqual('2019-12-27T08:00:00.000Z'),
          __v: 0
        });
      });
  });
});
