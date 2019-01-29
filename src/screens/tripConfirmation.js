import React, { Component } from 'react';
import { View, Image, Text, Button } from 'react-native';
import { appStyle } from '../styles/commons/app';
import { errorStyle } from '../styles/commons/error';
import { getUserScore } from '../services/UserService';
import { getArrivalHour } from '../helpers/systemHelper';
import { AsyncStorage } from 'react-native';
import Calification from './calification';
import taxiReyLogo from '../assets/images/driver-default.png';
import { connect } from 'react-redux';

class TripConfirmation extends Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            user: null
        }
    }

    componentDidMount() {
        AsyncStorage.getItem('userEmail').then((user) => {
            this.setState({ user: user });
        });

    }

    render() {
        return (<View style={{ flex: 1, flexDirection: 'column', backgroundColor: 'white' }} >
            <View style={appStyle.tripDetailsInfo}>
                <Image source={taxiReyLogo} style={{ width: 'auto', height: 200 }} />
                <View style={appStyle.tripInfoTitleContainer}>
                    <Text style={appStyle.tripInfoTitleDescription}> Su chofer ya esta en camino!</Text>
                </View>
                <View style={appStyle.tripInfoDetailItem}>
                    <Text> Conductor : <Text style={appStyle.tripInfoItemValue}>{'Jose Luis Maldonado'}</Text></Text>
                </View>
                <View style={appStyle.tripInfoDetailItem}>
                    <Text> Vehículo: <Text style={appStyle.tripInfoItemValue}>{'Chevrolet Corsa'}</Text></Text>
                </View>
                <View style={appStyle.tripInfoDetailItem}>
                    <Text> Patente: <Text style={appStyle.tripInfoItemValue}>{'PFW457'}</Text></Text>
                </View>
                <View style={appStyle.tripInfoDetailItem}>
                    <Text> Distancia : <Text style={appStyle.tripInfoItemValue}>{this.props.trip.distance}</Text></Text>
                </View>
                <View style={appStyle.tripInfoDetailItem}>
                    <Text> Tiempo Estimado de Viaje: <Text style={appStyle.tripInfoItemValue}>{this.props.trip.duration}</Text></Text>
                </View>
                <View style={appStyle.tripInfoDetailItem}>
                    <Text> Hora Estimada de Llegada : <Text style={appStyle.tripInfoItemValue}>{this.props.trip.duration && getArrivalHour(this.props.trip.duration)}</Text></Text>
                </View>
                <View style={appStyle.tripInfoDetailItem}>
                    <Text> Costo : <Text style={appStyle.tripInfoItemValue}>{this.props.trip.cost}</Text></Text>
                </View>
            </View>
            <View style={appStyle.cancelButton}>
                <Button
                    title="CANCELAR VIAJE"
                    color='white'
                    onPress={() => this.updateUserScore(this.props.trip.distance, this.state.user)} />
                {this.state.error &&
                    <View style={appStyle.buttonContainer}>
                        <Text style={errorStyle.errorMessage}>{this.state.error}</Text>
                    </View>}
            </View>
        </View >
        );
    }

    updateUserScore = (distance, user) => {
        if (distance && user)
            getUserScore(distance, user).then((result) => {
                AsyncStorage.setItem('score', result.data.score.toString()).then(() => {
                    this.props.goBackFunction();
                });
            }).catch((error) => {
                console.error(error);
                this.setState({ error: 'Ops, no se pudo encargar su pedido' })
            })
    }
    
}

const mapStateToProps = state => {
    return {
        trip: state.trip.trip
    }
}

export default connect(mapStateToProps) (TripConfirmation);