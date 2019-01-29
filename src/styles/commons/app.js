import { StyleSheet } from 'react-native';

export const appStyle = StyleSheet.create({
    title: {
        flex: 1,
        justifyContent: 'center',
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
    profileSection: {
        marginTop: 30,
        flex: .3,
        flexDirection: 'column',
        justifyContent: 'center'
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
    inputIcon: {
        flexDirection: 'column',
        flex: .2
    },
    inputTextBox: {
        flexDirection: 'column',
        flex: .8
    },
    button: {
        backgroundColor: '#26261b',
        color: '#FFFFFF',
        flex: .6,
        alignItems: 'center'
    },
    buttonContainer: {
        flex: .15,
        flexDirection: 'column'
    },
    loginButtonContainer: {
        flex: .25,
        flexDirection: 'column'
    },
    integrationContainer: {
        flex: .25,
        flexDirection: 'column'
    },
    integrateWith: {
        flex: .20,
        flexDirection: 'column',
        justifyContent: 'center',
        textAlign: 'center',
        fontWeight: 'bold'
    },
    existingAccount: {
        justifyContent: 'center',
        textAlign: 'center',
        fontSize: 20,
        textDecorationLine: 'underline',
        marginBottom: 40
    },
    socialContainer: {
        flex: .8,
        flexDirection: 'row',
        justifyContent: 'center',
        height: 100
    },
    socialButton: {
        flexDirection: 'column',
        justifyContent: 'center',
        flex: .2
    },
    map: {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        position: 'absolute'
    },
    hiperlink: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },

    menuButton: {
        paddingLeft: 10
    },
    welcomePage: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#E9CE26'
    },
    loadingMsg: {
        justifyContent: 'center',
        textAlign: 'center',
        color: '#26261b',
        fontFamily: 'Barlow-Medium',
        fontWeight: 'bold',
        fontSize: 20
    },
    tripInfo: {
        flex: 0.1,
        justifyContent: 'center',
        justifyContent: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        paddingTop:10,
        paddingBottom:10,
        margin: 20,
        borderColor: 'black',
        borderWidth: 1
    },
    tripInfoItem: {
        paddingLeft: 5
    },
    tripInfoItemValue: {
        fontWeight: 'bold'
    },
    tripDetailsInfo: {
        flex: 0.9,
        justifyContent: 'center',
        margin: 20
    },
    tripInfoDetailItem: {
        marginTop: 20,
        flex: 0.15,
        paddingLeft: 10,
        fontSize: 25
    },
    tripInfoTitleContainer: {
        marginTop: 20,
        marginBottom: 20,
        flex: 0.35,
        paddingLeft: 10
    },
    tripInfoTitleDescription: {
        fontSize: 20,
        fontFamily: 'Barlow-Bold',
        textAlign: 'center'
    },
    actionButon: {
        flex: 0.1,
        backgroundColor: '#E9CE26', 
        justifyContent: 'center', 
        margin: 50,
        borderColor: 'black',
        borderRadius:10,
        borderWidth: 1
    },
    cancelButton: {
        flex: 0.1,
        justifyContent: 'center',
        backgroundColor: 'black',
        margin:50,
        borderColor: 'black',
        borderRadius:10,
        borderWidth: 1
    },
    scoreScreen: {
        flex: 1,
        justifyContent: 'center',
        textAlign: 'center',
        margin: 30
    }

})