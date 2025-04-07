import React, { useState } from 'react';
import { Text,  StyleSheet, TextInput , Button, View } from 'react-native';
import { KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { LinearGradient } from "expo-linear-gradient";
export default function Major() {
  const [minValue, setMinValue] = useState('');
  const [maxValue, setMaxValue] = useState('');
  const [proposedValue, setProposedValue] = useState('');
  const [gameOver, setGameOver] = useState(false);
  const [attempts, setAttempts] = useState(0);
  const [targetValue, setTargetValue] = useState<number |null>(null);
  const startGame = () => {
    const min = parseInt(minValue);
    const max = parseInt(maxValue); 
    if (isNaN(min) || isNaN(max) || min >= max) {
      alert('Please enter valid numbers');
      return;
    }
    const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
    setTargetValue(randomNum);
    setAttempts(0);
    setGameOver(false);
    setProposedValue('');
  }
  const checkProposedValue = () => {
    const proposedNum = parseInt(proposedValue);
    if (isNaN(proposedNum)) {
      alert('Please enter a valid number');
      return;
    }
    const newAttempts = attempts + 1;
    setAttempts(newAttempts);
    
    if (targetValue === null) return;
    if (proposedNum === targetValue) {
      alert(`Congratulations! You guessed the number in ${attempts + 1} attempts.`);
      setGameOver(true);
    } else if (newAttempts >= 5) {
      alert(`Game over! You've used all 5 attempts. The number was ${targetValue}.`);
      setGameOver(true);
    } 
    else if (proposedNum < targetValue) {
      alert('Higher!');
    } else {
      alert('Lower!');
    }
    setProposedValue('');
  }
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{ flex: 1 }}
    >
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <LinearGradient colors={["#6a11cb", "#2575fc"]} style={styles.container}>
          <Text style={styles.title}>Enter range of random</Text>
  
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            placeholder="Min"
            value={minValue}
            onChangeText={setMinValue}
          />
  
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            placeholder="Max"
            value={maxValue}
            onChangeText={setMaxValue}
          />
  
          <Button title="Start Game" onPress={startGame} disabled={targetValue !== null && !gameOver} />
  
          {targetValue !== null && !gameOver && (
            <>
              <Text style={styles.title}>Proposed Value</Text>
              <TextInput
                style={styles.input}
                keyboardType="numeric"
                value={proposedValue}
                onChangeText={setProposedValue}
                placeholder="Your guess"
              />
              <Button title="Check" onPress={checkProposedValue} />
            </>
          )}
  
          {gameOver && (
            <Text style={styles.output}>🎉 You guessed it in {attempts} attempts!</Text>
          )}
        </LinearGradient>
      </ScrollView>
    </KeyboardAvoidingView>
  )}

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
