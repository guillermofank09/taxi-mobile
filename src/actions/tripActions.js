export const SET_TRIP = 'SET_TRIP';

export const setTrip = trip => {
    return {
      type: SET_TRIP,
      payload: trip
    }
  }