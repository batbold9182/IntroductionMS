
import { Text, View, StyleSheet, TouchableOpacity, TextInput, Button, Keyboard, } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";

  export default function firstprogramm() {
  const [name , setname] = useState('')
  const [output, setOutput] = useState('');
  const handlePress = () => {
      Keyboard.dismiss(); 
    if (name.trim() === '') {
      setOutput('Introduce yourself');
    } else {
      setOutput(`Hello ${name}`);
    }
  };
 return (
    <LinearGradient colors={["#6a11cb", "#2575fc"]} style={styles.container}>
    <Text style={styles.title}>HELLO WORLD</Text>
      <Text style={styles.subtitle}>Introduction to mobile system</Text>

      <TextInput
      style={styles.input}
      placeholder="Enter name"
      value={name}
      onChangeText={setname}/>

      <TouchableOpacity style={styles.button} onPress={handlePress}>
      <Text style={styles.buttonText}>Introduce yourself please</Text>
      </TouchableOpacity>


      <Text style={styles.output}>{output}</Text>
      </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#fff",
    marginTop: 20,
  },
  subtitle: {
    fontSize: 18,
    color: "#ddd",
    marginTop: 10,
  },
  button: {
    marginTop: 20,
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
  },
  buttonText: {
    fontSize: 18,
    color: "white",
    fontWeight: "bold",
  },
  input: {
    borderWidth: 1,
    borderColor: '#aaa',
    borderRadius: 6,
    padding: 12,
    marginBottom: 12,
    fontSize: 16,
  },
  output: {
    fontSize: 20,
    marginTop: 24,
    textAlign: 'center',
  },
});
