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
        marginTop: 30,
        flex: .6,
        flexDirection: 'column'
    },
    profileSection: {
        marginTop: 30,
        flex: .70,
        flexDirection: 'column',
        justifyContent: 'center'
    },
    loginSection: {
        flex: .5,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    input: {
        padding: 10,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        height: 20
    },
    formInput: {
        width: '90%',
        alignSelf: 'center',
        flex: 0.25,
        marginTop: 40
    },
    inputIcon: {
        marginRight: 10
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
        flex: .20,
        flexDirection: 'column'
    },
    loginContainer: {
        flex: .35,
        flexDirection: 'column'
    },
    loginButtonContainer: {
        flex: .50,
        flexDirection: 'column'
    },
    errorContainer: {
        flex: .20,
        flexDirection: 'column'
    },
    registerButtonContainer: {
        flex: .15,
        flexDirection: 'column'
    },
    socialButtonsContainer: {
        marginTop: 30,
        flex: .50,
        flexDirection: 'column',
        alignContent: 'flex-end',
        justifyContent: 'flex-end'
    },
    integrationContainer: {
        marginTop: 30,
        flex: .25,
        flexDirection: 'column'
    },
    integrateWith: {
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
        flexDirection: 'row',
        justifyContent: 'center',
        height: 100
    },
    socialButton: {
        height: 40,
        margin: 20,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
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
        backgroundColor: 'white',
        paddingTop: 10,
        paddingBottom: 10,
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
        alignItems: 'center',
        marginTop: 40,
        backgroundColor: '#E9CE26',
        marginLeft: 50,
        marginRight: 50,
        borderColor: 'black',
        paddingBottom: 15,
        paddingTop: 15,
        color: 'black',
        borderRadius: 10,
        borderWidth: 1,
    },
    tripConfirmationCancel: {
        height: 50,
        backgroundColor: 'black',
        justifyContent: 'center',
        marginLeft: 50,
        marginTop: 20,
        marginRight: 50,
        borderColor: 'black',
        borderRadius: 10,
        borderWidth: 1
    },
    tripConfirmationContinue: {
        height: 50,
        backgroundColor: '#E9CE26',
        justifyContent: 'center',
        marginLeft: 50,
        marginTop: 20,
        marginRight: 50,
        borderColor: 'black',
        borderRadius: 10,
        borderWidth: 1
    },
    cancelButton: {
        height: 50,
        marginTop: 20,
        justifyContent: 'center',
        backgroundColor: 'black',
        margin: 50,
        borderColor: 'black',
        borderRadius: 10,
        borderWidth: 1
    },
    scoreScreen: {
        flex: 1,
        justifyContent: 'center',
        textAlign: 'center',
        margin: 30
    },
    perfilPicture: {
        justifyContent: 'center',
        alignItems: 'center'
    }

})