import { StyleSheet, Dimensions } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
      },
    linearGradient: {
        flex: 1,
        paddingLeft: 15,
        paddingRight: 15,
    
      },
    buttonText: {
        fontSize: 18,
        fontFamily: 'Gill Sans',
        textAlign: 'center',
        margin: 10,
        color: '#fff',
        backgroundColor: 'transparent',
      },
    button: {
        fontSize: 35,
        color: '#fff',
        height: 70,
        width: 70,
        padding: Dimensions.get('window').width / 36,
        margin: 10, 
        backgroundColor: 'transparent',
        textAlign: 'center',
        borderWidth: 1,
        borderColor: '#fff',
        borderRadius: 100,
      },
    icon: {
        fontSize: 28,
        color: '#fff',
        height: 70,
        width: 70,
        paddingTop: Dimensions.get('window').width / 18,
        margin: 10, 
        backgroundColor: 'transparent',
        textAlign: 'center',
        borderWidth: 1,
        borderColor: '#fff',
        borderRadius: 100,
      },
    buttons: {
        flex: Dimensions.get('window').height / 50,
        flexDirection: 'row-reverse',
        flexWrap: 'wrap',
        right: Dimensions.get("window").width / 12,
        alignContent: "center",
        marginTop: Dimensions.get('window').width / 20,
      },
    bottomTab: {
        backgroundColor: '#fff',
        width: Dimensions.get('window').width / 1.09,
        height: 135,
        flexDirection: 'row',
        borderTopStartRadius: 10,
        borderTopEndRadius: 10,
        shadowOffset: {width: 30, height: 30}
      },
    invoice: {
      backgroundColor: 'transparent',
      width: Dimensions.get('window').width / 1.09,
      height: Dimensions.get('window').width / 1.09,
    },
    wrapper: {

    },
    slide: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#FFF'
    },
    text: {
      color: '#fff',
      fontSize: 30,
      fontWeight: 'bold'
    }
})