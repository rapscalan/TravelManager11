require('dotenv').config();

const request = require('supertest');
const app = require('../lib/app');
const connect = require('../lib/utils/connect');
const mongoose = require('mongoose');
const Trip = require('../lib/models/Trip');

describe('app routes', () => {
  beforeAll(() => {
    connect();
  });

  beforeEach(() => {
    return mongoose.connection.dropDatabase();
  });
  let tripForTest = null;

  beforeEach(async() => {
    tripForTest = JSON.parse(JSON.stringify(await Trip.create({
      name: 'Paris',
      beginDate: new Date('2019-12-28T00:00:00'),
      endDate: new Date('2019-12-30T00:00:00')
    })));
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
          beginDate: expect.any(String),
          endDate: expect.any(String),
          __v: 0
        });
      });
  });

  it('creates an itineraryItem', () => {
    return request(app)
      .post('/api/v1/itineraryItems')
      .send({
        tripId: tripForTest._id,
        event: 'Eiffel Tower',
        beginTime: new Date('2019-12-28T18:00:00'),
        endTime: new Date('2019-12-20T18:30:00')
      })
      .then(res => {
        expect(res.body).toEqual({
          _id: expect.any(String),
          tripId: tripForTest._id,
          event: 'Eiffel Tower',
          beginTime: expect.any(String),
          endTime: expect.any(String),
          __v: 0
        });
      });
  });
});
