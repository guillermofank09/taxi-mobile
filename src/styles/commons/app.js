import { StyleSheet } from 'react-native';

export const appStyle = StyleSheet.create({
    title: {
        textAlign: 'center',
        color: '#26261b',
        fontFamily: 'Barlow-Medium',
        fontSize: 20
    },
    container: {
        flex: 1,
        flexDirection: 'column'
    },    
    signUpSection: {
        flex: .6,
        flexDirection: 'column'
    },
    loginSection: {
        flex: .5,
        flexDirection: 'column'
    },
    input: {
        padding: 10,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        height: 20
    },
    inputIcon:{
        flexDirection: 'column',
        flex: .2
    },
    inputTextBox:{
        flexDirection: 'column',
        flex: .8
    },
    button:{
        backgroundColor: '#26261b',
        color: '#FFFFFF',
        flex: .6,
        alignItems: 'center'
    },
    buttonContainer:{
        flex: .2,
        flexDirection: 'column'
    },
    socialContainer:{
        flex: .8,
        flexDirection: 'row',
        paddingTop: 25,
        justifyContent: 'center',
        height: 100
    },
    socialButton:{
        flexDirection: 'column',
        alignItems: 'center',
        flex: .2
    },
    map:{
        left:0,
        right:0,
        top:0,
        bottom:0,
        position: 'absolute'
    },
    hiperlink:{
        fontSize: 18, 
        fontWeight: 'bold',
        textAlign: 'center',
    }

})