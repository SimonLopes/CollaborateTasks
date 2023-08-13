import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { useState, useRef } from 'react';

import { styles } from './styles';

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
    </View>
  );
}