require('dotenv').config();

const request = require('supertest');
const app = require('../lib/app');
const connect = require('../lib/utils/connect');
const mongoose = require('mongoose');
const Trip = require('../lib/models/Trip');
const ItineraryItem = require('../lib/models/ItineraryItem');

describe('app routes', () => {
  beforeAll(() => {
    connect();
  });

  beforeEach(() => {
    return mongoose.connection.dropDatabase();
  });
  let tripForTest = null;
  let itineraryForTest = null;

  beforeEach(async() => {
    tripForTest = JSON.parse(JSON.stringify(await Trip.create({
      name: 'France',
      beginDate: new Date('2019-12-28T00:00:00'),
      endDate: new Date('2019-12-30T00:00:00')
    })));
    itineraryForTest = JSON.parse(JSON.stringify(await ItineraryItem.create({
      event: 'Eiffel Tower',
      tripId: tripForTest._id,
      beginTime: new Date('2019-12-29T18:30:00'),
      endTime: new Date('2019-12-29T19:00:00'),
      eventCity: 'Paris'
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
        endTime: new Date('2019-12-20T18:30:00'),
        eventCity: 'Paris'
      })
      .then(res => {
        expect(res.body).toEqual({
          _id: expect.any(String),
          tripId: tripForTest._id,
          event: 'Eiffel Tower',
          beginTime: expect.any(String),
          endTime: expect.any(String),
          eventCity: 'Paris',
          __v: 0
        });
      });
  });

  it('deletes a itinerary item by id', () => {
    return request(app)
      .delete(`/api/v1/itineraryItems/${itineraryForTest._id}`)
      .then(res => {
        expect(res.body).toEqual({
          _id: expect.any(String),
          tripId: tripForTest._id.toString(),
          beginTime: expect.any(String),
          endTime: expect.any(String),
          event: 'Eiffel Tower',
          eventCity: 'Paris',
          __v: 0
        });
      });
  });
});
