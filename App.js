import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { useState, useRef } from 'react';

export default function App() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  const passwordRef = useRef(null)
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login_</Text>
      <TextInput
        onChange={setUser}
        value={user}
        placeholder='Usuario'
        style={styles.input}
        onSubmitEditing={() => passwordRef.current.focus()}
      />
      <TextInput
        ref={passwordRef}
        onChange={setPassword}
        value={password}
        placeholder='Senha'
        secureTextEntry={true}
        style={styles.input}
      />
      <TouchableOpacity 
        onPress={""}
        style={styles.buttonSubmit}
      >
        <Text style={styles.textButton}>Entrar</Text>
      </TouchableOpacity>
      <View style={styles.divisor} />
      <TouchableOpacity 
        onPress={""}
        style={styles.buttonSignup}
      >
        <Text style={styles.textSignup}>Cadastre-se</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

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
