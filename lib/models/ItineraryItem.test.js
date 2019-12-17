//const mongoose = require('mongoose');
const ItineraryItem = require('./ItineraryItem');

describe('ItineraryItem validation', () => {
  it('has a required event', () => {
    const itineraryItem = new ItineraryItem();
    const { errors } = itineraryItem.validateSync();
    expect(errors.event.message).toEqual('Path `event` is required.');
  });
  it('has a begin time', () => {
    const itineraryItem = new ItineraryItem();
    const { errors } = itineraryItem.validateSync();
    expect(errors.beginTime.message).toEqual('Path `beginTime` is required.');
  });
  it('has an end time', () => {
    const itineraryItem = new ItineraryItem();
    const { errors } = itineraryItem.validateSync();
    expect(errors.endTime.message).toEqual('Path `endTime` is required.');
  });
  it('has an event city', () => {
    const itineraryItem = new ItineraryItem();
    const { errors } = itineraryItem.validateSync();
    expect(errors.eventCity.message).toEqual('Path `eventCity` is required.');
  });
});
