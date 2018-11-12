
import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation';
import SignUp from './src/screens/signUp';
import Login from './src/screens/login';
import { appStyle } from './src/styles/commons/app';
import MapScreen from './src/screens/maps';

export default class App extends Component {

  render() {
    return (
      <AppStackNavigator />
    )
  }
}

const AppStackNavigator = createStackNavigator(
  {
    Login: {
      screen: Login,
      navigationOptions: {
        title: 'Iniciar Sesión',
        headerTitleStyle: appStyle.title,
        headerBackTitle: null
      }
    },
    SignUp: {
      screen: SignUp,
      navigationOptions: {
        title: 'Registro de Usuario',
        headerTitleStyle: appStyle.title,
        headerBackTitle: null
      }
    },
    MapScreen: { screen: MapScreen,
      navigationOptions:{
        title: 'Mapa',
        headerTitleStyle: appStyle.title,
        headerBackTitle: null
      }
     }
  }
);


