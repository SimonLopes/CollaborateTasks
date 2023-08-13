import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
      fontWeight: 'bold',
      fontSize: 40,
      marginVertical: 30
    },
    input: {
      width: "85%",
      height: 45,
      borderColor: "#A0A0A0",
      borderWidth: 1,
      borderRadius: 10,
      paddingHorizontal: 15,
      marginVertical: 10,
      backgroundColor: '#fff',
      fontSize: 17
    },
    buttonSubmit: {
      width: "85%",
      height: 45,
      backgroundColor: "#1E385B",
      borderRadius: 10,
      marginVertical: 15,
      alignItems: 'center',
      justifyContent: 'center'
    },
    textButton: {
      color: '#fff',
      fontSize: 17,
      fontWeight: 'bold',
  
    },
    divisor: {
      width: 150,
      height: 2,
      backgroundColor: '#A0A0A0',
      borderRadius: 10
    },
    buttonSignup: {
      width: "85%",
      height: 45,
      borderColor: "#1E385B",
      borderWidth: 3,
      borderRadius: 10,
      marginVertical: 15,
      alignItems: 'center',
      justifyContent: 'center'
    },
    textSignup: {
      color: '#1E385B',
      fontSize: 17,
      fontWeight: 'bold',
    }
});

export default styles