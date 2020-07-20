import { BorderlessButton } from "react-native-gesture-handler";

const bookingStyles = {
    serviceContainer: {
        flex: 8,

    },
    bookingScreenButton: {
        height: 40,
        width: 300,
        marginRight: 15,
        marginLeft: 15,
        marginTop: 0,
        paddingTop: 10,
        paddingBottom: 10,
        backgroundColor:'#1E6738',
        borderRadius: 20,
        borderWidth: 0,
    },
    bookingButtonText: {
        color:'#fff',
        fontSize: 18,
        textAlign:'center',
        paddingLeft : 10,
        paddingRight : 10
    },
    bookingText: {
        fontSize: 32,
        color: '#fff',
        marginTop: 30,
        marginBottom: 10,
    },
    calendarStyle: {
        height: 300,
        width: 400,
        marginTop: 100,
        marginBottom: 150,
    },
    inputRow: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 14,
    },
    timeText: {
        marginTop: 25,
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold',
    },
}

export default bookingStyles;