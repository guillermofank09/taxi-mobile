import React, { Component } from 'react';
import { View, TextInput, Text, Button } from 'react-native';
import { appStyle } from '../styles/commons/app';
import { errorStyle } from '../styles/commons/error';
import StarRating from 'react-native-star-rating';
import { AsyncStorage } from 'react-native';

class Calification extends Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            user: null,
            starCount: 3.5,
            comment: null
        }
    }

    componentDidMount() {
        AsyncStorage.getItem('userEmail').then((user) => {
            this.setState({ user: user });
        });

    }

    render() {
        return (<View style={{ flex: 1, flexDirection: 'column', backgroundColor: 'white' }} >
            <StarRating
                disabled={false}
                maxStars={5}
                rating={this.state.starCount}
                selectedStar={(rating) => this.onStarRatingPress(rating)}
                emptyStar={'ios-star-outline'}
                fullStar={'ios-star'}
                halfStar={'ios-star-half'}
                iconSet={'Ionicons'}
            />
            <TextInput
                multiline={true}
                numberOfLines={4}
                onChangeText={(text) => this.setState({ comment })}
                value={this.state.comment} />
        </View>
        );
    }

    onStarRatingPress(rating) {
        this.setState({
            starCount: rating
        });
    }
}

export default Calification;