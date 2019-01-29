import React, { Component } from 'react';
import { View, Text, Image, Button } from 'react-native';
import { Icon } from 'native-base';
import { appStyle } from '../styles/commons/app';
import MapView, { Marker } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import Geocoder from 'react-native-geocoding';
import { GOOGLE_MAPS_API_KEY } from '../utils/resources';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
export { DEFAULT_REGION_POSADAS } from '../utils/constants';
import { requestGeolocationPermission } from '../services/AuthServices'
import { regionFrom } from '../services/LocationService';
import { DEFAULT_REGION_POSADAS } from '../utils/constants';
import { getDistance } from '../services/LocationService';
import taxiMarker from '../assets/images/taxi-color.png';
import destinyMarker from '../assets/images/indicador-color-negro.png';
import crownMarker from '../assets/images/corona-color.png';
import {setTrip} from '../actions/tripActions'
import { connect } from 'react-redux';

Geocoder.init(GOOGLE_MAPS_API_KEY);

console.disableYellowBox = true;

class MapScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            trip: null,
            startLocation: null,
            endLocation: null,
            region: DEFAULT_REGION_POSADAS,
            from: '',
            to: '',
            showFromAutocompleteList: false,
            showToAutocompleteList: false
        }
    }

    static navigationOptions = () => ({
        headerLeft: <Icon ios='ios-menu' android="md-menu" style={appStyle.menuButton} onPress={() => this.props.navigation.openDrawer()} />
    })

    componentDidMount() {
        requestGeolocationPermission();
        this.getCurrentPosition();
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={appStyle.container}>
                    <MapView
                        style={appStyle.map}
                        initialRegion={this.state.region}
                        zoomEnabled={true}
                        showsUserLocation={true}
                        zoomControlEnabled={true}>
                        {this.state.trip && this.state.trip.startLocation &&
                            <Marker
                                coordinate={this.state.trip.startLocation}
                            >
                                <Image source={crownMarker}
                                    style={{ width: 30, height: 30 }} />
                            </Marker>
                        }
                        {
                            this.state.trip && this.state.trip.endLocation &&
                            <Marker
                                coordinate={this.state.trip.endLocation}
                            >
                                <Image source={destinyMarker}
                                    style={{ width: 30, height: 30 }} />
                            </Marker>
                        }
                        {
                            this.state.trip && this.state.trip.startLocation && this.state.trip.endLocation &&
                            <MapViewDirections
                                origin={{
                                    'latitude': this.state.trip.startLocation.latitude,
                                    'longitude': this.state.trip.startLocation.longitude
                                }}
                                destination={{
                                    'latitude': this.state.trip.endLocation.latitude,
                                    'longitude': this.state.trip.endLocation.longitude
                                }}
                                strokeWidth={3}
                                strokeColor={"#E9CE26"}
                                apikey={GOOGLE_MAPS_API_KEY}
                            />
                        }
                        <Marker
                            coordinate={{
                                'latitude': -27.369770,
                                'longitude': -55.908526
                            }}
                        >
                            <Image source={taxiMarker}
                                style={{ width: 30, height: 30 }} />
                        </Marker>
                        <Marker
                            coordinate={{
                                'latitude': -27.371144,
                                'longitude': -55.900118
                            }}
                        >
                            <Image source={taxiMarker}
                                style={{ width: 30, height: 30 }} />
                        </Marker>
                        <Marker
                            coordinate={{
                                'latitude': -27.373391,
                                'longitude': -55.906509
                            }}
                        >
                            <Image source={taxiMarker}
                                style={{ width: 30, height: 30 }} />
                        </Marker>
                    </MapView>
                    <View>
                        <GooglePlacesAutocomplete
                            ref="fromLocation"
                            placeholder='Inicio de viaje...'
                            minLength={3}
                            debounce={300}
                            returnKeyType={'search'}
                            listViewDisplayed={this.state.showFromAutocompleteList}
                            currentLocationLabel='Mi Ubicación'
                            currentLocation={true}
                            nearbyPlacesAPI="GoogleReverseGeocoding"
                            fetchDetails={true}
                            onPress={this.selectFromDestination}
                            renderRigthButton={() => <Text style={{ marginTop: 12, marginLeft: 16, fontSize: 18 }}> Location </Text>}
                            textInputProps={{
                                onChange: (text) => {
                                    const showList = text && text.nativeEvent.text.length > 2;
                                    this.setState({ showFromAutocompleteList: showList })
                                },
                                onBlur: () => this.setState({ showFromAutocompleteList: false }),
                            }}
                            query={{
                                key: GOOGLE_MAPS_API_KEY,
                                language: 'es',
                                components: 'country:arg'
                            }}

                            styles={{
                                textInputContainer: {
                                    width: '100%',
                                    backgroundColor: '#FFF'
                                },
                                listView: {
                                    backgroundColor: '#FFF',
                                    position: 'absolute',
                                    top: 40,
                                }
                            }}
                            enablePoweredByContainer={false}
                        />
                    </View>
                    {!this.state.showFromAutocompleteList && <View style={{ marginTop: 50 }}>
                        <GooglePlacesAutocomplete
                            ref="tolocation"
                            placeholder='Destino de viaje...'
                            minLength={3}
                            debounce={300}
                            returnKeyType={'search'}
                            listViewDisplayed={this.state.showToAutocompleteList}
                            fetchDetails={true}
                            onPress={this.selectToDestination}
                            textInputProps={{
                                onFocus: () => this.setState({ showToAutocompleteList: true }),
                                onBlur: () => this.setState({ showToAutocompleteList: false }),
                            }}
                            query={{
                                key: GOOGLE_MAPS_API_KEY,
                                language: 'es',
                                components: 'country:arg'
                            }}

                            styles={{
                                textInputContainer: {
                                    width: '100%',
                                    backgroundColor: '#FFF',
                                    zIndex: 0
                                },
                                listView: {
                                    backgroundColor: '#FFF',
                                    position: 'absolute',
                                    top: 40,
                                }
                            }}
                            enablePoweredByContainer={false}
                        />
                    </View>
                    }
                    {this.state.trip && this.state.trip.startLocation && this.state.trip.endLocation &&
                        <View style={{ flex: 1, justifyContent: 'flex-end', marginBottom: 50 }} >
                            {this.state.trip && this.state.trip.distance &&
                                <View style={appStyle.tripInfo}>
                                    <View style={appStyle.tripInfoItem}>
                                        <Text> Distancia : <Text style={appStyle.tripInfoItemValue}>{this.state.trip && this.state.trip.distance}</Text></Text>
                                    </View>
                                    <View style={appStyle.tripInfoItem}>
                                        <Text> Tiempo Estimado : <Text style={appStyle.tripInfoItemValue}>{this.state.trip && this.state.trip.duration}</Text></Text>
                                    </View>
                                    <View style={appStyle.tripInfoItem}>
                                        <Text> Costo : <Text style={appStyle.tripInfoItemValue}>{this.state.trip && this.state.trip.cost}</Text></Text>
                                    </View>
                                </View>
                            }
                            <View style={appStyle.actionButon}>
                                <Button
                                    title="SOLICITAR"
                                    color='black'
                                    onPress={() => { this.props.add(this.state.trip); this.props.navigation.navigate('TripConfirmation') }} />
                            </View>
                        </View>
                    }
                </View>
            </View>
        );
    }

    gobackToMap = () => {
        this.setState({ showTripModal: false });
    }

    selectFromDestination = (data, details = null) => {

        const latDelta = Number(details.geometry.viewport.northeast.lat) - Number(details.geometry.viewport.southwest.lat)
        const lngDelta = Number(details.geometry.viewport.northeast.lng) - Number(details.geometry.viewport.southwest.lng)

        let region = {
            latitude: details.geometry.location.lat,
            longitude: details.geometry.location.lng,
            latitudeDelta: latDelta,
            longitudeDelta: lngDelta
        };

        this.setState({
            trip: {
                ...this.state.trip,
                startLocation: {
                    latitude: details.geometry.location.lat,
                    longitude: details.geometry.location.lng,
                },
                to: this.refs.fromLocation.getAddressText() // get the full address of the user's destination
            },
            region: region
        });

    }

    getCurrentPosition = () => {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                // get the region (this return the latitude and longitude delta values to be used by React Native Maps)
                var region = regionFrom(
                    position.coords.latitude,
                    position.coords.longitude,
                    position.coords.accuracy
                );

                // convert the coordinates to the descriptive name of the place
                Geocoder.from({
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude
                })
                    .then((response) => {
                        // the response object is the same as what's returned in the HTTP API: https://developers.google.com/maps/documentation/geocoding/intro

                        this.from_region = region; // for storing the region in case the user presses the "reset" button

                        // update the state to indicate the user's origin on the map (using a marker)
                        this.setState({
                            trip: {
                                ...this.state.trip,
                                startLocation: {
                                    latitude: position.coords.latitude,
                                    longitude: position.coords.longitude
                                },
                                from: response.results[0].formatted_address
                            }, // the descriptive name of the place
                            region: region // the region displayed on the map                            
                        }, this.calculateDistance);

                    });

            }
        );
    }

    selectToDestination = (data, details = null) => {

        const latDelta = Number(details.geometry.viewport.northeast.lat) - Number(details.geometry.viewport.southwest.lat)
        const lngDelta = Number(details.geometry.viewport.northeast.lng) - Number(details.geometry.viewport.southwest.lng)

        let region = {
            latitude: details.geometry.location.lat,
            longitude: details.geometry.location.lng,
            latitudeDelta: latDelta,
            longitudeDelta: lngDelta
        };

        this.setState({
            trip: {
                ...this.state.trip,
                endLocation: {
                    latitude: details.geometry.location.lat,
                    longitude: details.geometry.location.lng,
                },
                to: this.refs.tolocation.getAddressText() // get the full address of the user's destination
            },
            region: region
        }, this.calculateDistance);

    }

    calculateDistance = () => {
        if (this.state.trip && this.state.trip.startLocation && this.state.trip.endLocation) {
            const startLocation = this.state.trip && this.state.trip.startLocation && `${this.state.trip.startLocation.latitude}, ${this.state.trip.startLocation.longitude}`
            const endLocation = this.state.trip && this.state.trip.endLocation && `${this.state.trip.endLocation.latitude}, ${this.state.trip.endLocation.longitude}`
            getDistance([startLocation], [endLocation]).then((resp) => {
                const result = resp.data;
                this.setState({ trip: { ...this.state.trip, distance: result.distance, duration: result.duration, cost: result.cost } });
            })
        }
    }
}

const mapStateToProps = state => {
    return {
        trip: state.trip.trip
    }
}

const mapDispatchToProps = dispatch => {
    return {
        add: (trip) => {
            dispatch(setTrip(trip))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MapScreen);