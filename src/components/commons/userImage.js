import React from 'react'
import { View, Image, AsyncStorage } from 'react-native';
import {ROLES} from '../../utils/constants'
import defaultUser from '../../assets/images/user-color.png';
import defaultDriver from '../../assets/images/default-driver.png';
import {isUser} from '../../helpers/sessionHelper'

class UserImage extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            userRole: ROLES.USER
        }
    }
    componentDidMount(){
        AsyncStorage.getItem('userRole').then((value) => this.setUserRole(value));
      }
    
      setUserRole = (value) => {
        this.setState({userRole: value})
      }

    render(){
    return <View style={{ height: 150, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center' }}>
        <Image source={isUser(this.state.userRole) ? defaultUser : defaultDriver} style={{ height: 120, width: 120, borderRadius: 60 }} />
    </View>
    }
}

export default UserImage