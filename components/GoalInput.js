import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Modal } from 'react-native';

const GoalInput = props => {

  const [enteredGoal, setEneterdGoal] = useState('');

  const goalInputHandeler = (enteredText) => {
    setEneterdGoal(enteredText);
  };

  const addGoalHandeler = () => {
    props.onAddGoal(enteredGoal);
    setEneterdGoal('');
  };

  return (
    <Modal visible={props.visible} animationType='slide'>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Course Goal"
          style={styles.input}
          onChangeText={goalInputHandeler}
          value={enteredGoal}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.btnView}>
            <Button title='CANCEL' color='red' onPress={props.onCancel} />
          </View>
          <View style={styles.btnView}>
            <Button title='ADD' onPress={addGoalHandeler} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  input: {
    borderColor: 'black',
    borderWidth: 1,
    width: '80%',
    padding: 10,
    marginBottom: 10
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%'
  },
  btnView: {
    width: '40%'
  }
});

export default GoalInput;
