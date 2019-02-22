import React, {Component} from 'react';
import { Image, StyleSheet} from 'react-native';
import {appStyle} from '../../styles/commons/app';
import {taxiReyHeader} from '../../assets/images/header.png'

export const  HeaderTitle = () =>{
        return <Image source={taxiReyHeader} style={StyleSheet.absoluteFill} />

}

export default HeaderTitle;