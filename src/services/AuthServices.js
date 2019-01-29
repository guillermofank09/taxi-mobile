import axios from 'axios';
import { LAZARUS_URL } from '../utils/resources';

export const login = (email, password) => {
    const authValue = {
        username: email,
        password: password
    };

    const url = LAZARUS_URL + '/auth';
    return axios({
        method: 'POST',
        url: url, auth: authValue, data: { email: email, password: password }
    });
}

export const signUp = (name, email, password) => {
    const data = {
        name: name,
        email: email,
        password: password
    };
    return axios.post(LAZARUS_URL + '/users', data);
}

export  const requestGeolocationPermission = async () => {
    try{
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          'title': 'Ridesharer Geolocation Permission',
          'message': 'Ridesharer needs access to your current location so you can share or search for a ride'
        }
      );

      if(granted === PermissionsAndroid.RESULTS.GRANTED){
        console.log("You can use the geolocation")
      }else{
        console.log("Geolocation permission denied")
      }
    }catch(err){
      console.warn(err)
    }
  }
