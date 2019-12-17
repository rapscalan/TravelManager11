//const mongoose = require('mongoose');
const Trip = require('./Trip');

describe('validate a Trip', ()=>{
  it('has a required name', () => {
    const trip = new Trip();
    const { errors } = trip.validateSync();
    expect(errors.name.message).toEqual('Path `name` is required.');
  });
  
  it('has a required begin date', ()=>{
    const trip = new Trip();
    const { errors } = trip.validateSync();
    expect(errors.beginDate.message).toEqual('Path `beginDate` is required.');
  });

  it('has a required end date', ()=>{
    const trip = new Trip();
    const { errors } = trip.validateSync();
    expect(errors.endDate.message).toEqual('Path `endDate` is required.');
  });
});
