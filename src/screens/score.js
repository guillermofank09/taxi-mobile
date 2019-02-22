import React, { Component } from 'react';
import { View, Image, Text, Button } from 'react-native';
import { appStyle } from '../styles/commons/app';
import { getUserScore } from '../services/UserService';
import { getArrivalHour } from '../helpers/systemHelper';
import NotFound from '../components/commons/notFound'
import { AsyncStorage } from 'react-native';

class Score extends Component {

    constructor(props) {
        super(props);
        this.state = {
            score: null
        }
    }

    componentDidMount() {
        AsyncStorage.getItem('score').then((score) => {
            this.setState({ score: score });
        });

    }

    render() {
        return (<View style={{ flex: 1, flexDirection: 'column', backgroundColor: 'white' }} >
            {this.state.score ?
                <View style={appStyle.tripDetailsInfo}>
                    <View style={appStyle.scoreScreen}>
                        <Text> Tienes {this.state.score} km acumulados!</Text>
                    </View>
                </View>
                :
                <View style={appStyle.tripDetailsInfo}>
                    <View style={appStyle.scoreScreen}>
                    <NotFound message='Ops, todavía no tienes viajes registrados'/>
                    </View>
                </View>
            }
        </View>
        );
    }
}

export default Score;