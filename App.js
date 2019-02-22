
import React, { Component } from 'react';
import { createStackNavigator, createDrawerNavigator, DrawerItems } from 'react-navigation';
import SignUp from './src/screens/signUp';
import Login from './src/screens/login';
import Logout from './src/screens/logout';
import { appStyle } from './src/styles/commons/app';
import { SafeAreaView, ScrollView, Dimensions, View, Image} from 'react-native';
import MapScreen from './src/screens/maps';
import ProfileScreen from './src/screens/profile';
import ScoreScrenn from './src/screens/score';
import Calification from './src/screens/calification';
import TripConfirmation from './src/screens/tripConfirmation';
import { Icon } from 'native-base';
import './src/config/ReactotronConfig';
import { Provider } from 'react-redux';
import configureStore from './src/config/store';
import UserImage from './src/components/commons/userImage'
import HeaderTitle from './src/components/commons/headerTitle'
import taxiReyHeader from './src/assets/images/header.png'

const store = configureStore()

export default class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <AppStackNavigator />
      </Provider>
    )
  }
}

const { width } = Dimensions.get('window');

const DrawerComponent = (props) => (
  <SafeAreaView style={{ flex: 1 }}>
    <UserImage />
    <ScrollView>
      <DrawerItems {...props} />
    </ScrollView>
  </SafeAreaView>
)

const userDrawerNavigator = createDrawerNavigator({
  Map: {
    screen: MapScreen,
    navigationOptions: {
      headerTitle: <HeaderTitle/>,
      headerBackTitle: null,
      drawerIcon: ({ tintColor }) => (
        <Icon ios='ios-home' android="md-home" style={{ fontSize: 24, color: tintColor }} />
      )
    }
  },
  Profile: {
    screen: ProfileScreen,
    navigationOptions: {
      title: 'Mi Perfil',
      headerTitleStyle: appStyle.title,
      headerBackTitle: null,
      drawerIcon: ({ tintColor }) => (
        <Icon ios='ios-person' android="md-person" style={{ fontSize: 24, color: tintColor }} />
      )
    }
  },
  Score: {
    screen: ScoreScrenn,
    navigationOptions: {
      title: 'Mis Kilómetros',
      headerTitleStyle: appStyle.title,
      headerBackTitle: null,
      drawerIcon: ({ tintColor }) => (
        <Icon ios='ios-star' android="md-star" style={{ fontSize: 24, color: tintColor }} />
      )
    }
  },
  Logout: {
    screen: Logout,
    navigationOptions: {
      title: 'Salir',
      headerTitleStyle: appStyle.title,
      headerBackTitle: null,
      drawerIcon: ({ tintColor }) => (
        <Icon ios='ios-exit' android="mios-exit" style={{ fontSize: 24, color: tintColor }} />
      )
    }
  }
}, {
    contentComponent: DrawerComponent,
    drawerWidth: width,
    contentOptions: {
      activeTintColor: 'blue'
    }
  });

const AppStackNavigator = createStackNavigator(
  {
    SignUp: {
      screen: SignUp,
      navigationOptions: {
        headerBackTitle: null
      }
    },
    Login: {
      screen: Login,
      navigationOptions: {
        headerBackTitle: null
      }
    },
    Calification: {
      screen: Calification,
      navigationOptions: {
        headerBackTitle: null
      }
    },
    Home: {
      screen: userDrawerNavigator,
      navigationOptions: ({ navigation }) => ({
        headerLeft: <Icon ios='ios-menu' android="md-menu" style={appStyle.menuButton} onPress={() => navigation.openDrawer()} />,
        headerRight: <View />
      })

    },
    TripConfirmation : {
      screen: TripConfirmation,
      navigationOptions: {
        headerBackTitle: null
      }
    }
  },{
    navigationOptions: {
      headerBackground: (
        <SafeAreaView><Image source={taxiReyHeader} style={{alignSelf: 'center'}} /></SafeAreaView>
      ),
      headerTitleStyle: { color: '#fff' },
    }
  });
