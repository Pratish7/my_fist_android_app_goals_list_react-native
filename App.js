import React, { useState } from 'react';
import { StyleSheet, TextInput, View, Button } from 'react-native'

export default function App() {
  
  const [enteredGoal, setEneterdGoal] = useState('');
  
  const goalInputHandeler = (enteredText) => {
    setEneterdGoal(enteredText);
  }

  const addGoalHandeler = () => {
    console.log(enteredGoal);
  }

  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput 
          placeholder="Course Goal" 
          style={styles.input} 
          onChangeText={goalInputHandeler}
          value={enteredGoal}
        />
        <Button title='ADD' onPress={addGoalHandeler} />
      </View>
      <View>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  input: {
    borderColor: 'black',
    borderWidth: 1,
    width: '80%'
  }
});

