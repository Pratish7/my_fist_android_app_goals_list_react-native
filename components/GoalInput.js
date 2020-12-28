import React, {useState} from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const GoalInput = props => {
    const [enteredGoal, setEneterdGoal] = useState('');
    const goalInputHandeler = (enteredText) => {
        setEneterdGoal(enteredText);
      };

    return(
        <View style={styles.inputContainer}>
        <TextInput
          placeholder="Course Goal"
          style={styles.input}
          onChangeText={goalInputHandeler}
          value={enteredGoal}
        />
        <Button title='ADD' onPress={props.onAddGoal.bind(this, enteredGoal)} />
      </View>
    );
};

const styles = StyleSheet.create({
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

export default GoalInput;
