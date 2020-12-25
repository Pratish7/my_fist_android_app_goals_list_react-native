import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button, ScrollView, FlatList } from 'react-native'
import GoalItem from './components/GoalItem';

export default function App() {

  const [enteredGoal, setEneterdGoal] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);

  const goalInputHandeler = (enteredText) => {
    setEneterdGoal(enteredText);
  }

  const addGoalHandeler = () => {
    setCourseGoals(currentGoals => [...currentGoals, {key: Math.random().toString(), value: enteredGoal}]);
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
      <FlatList
        data={courseGoals}
        renderItem={ itemData => <GoalItem title={itemData.item.value} />}
      />
        
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
  },
});

