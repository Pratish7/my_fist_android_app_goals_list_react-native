import React, { useState } from 'react';
import { StyleSheet, TextInput, View, Button } from 'react-native'

export default function App() {
  return (
    <View style={{padding: 30}}>
      <View style={{flexDirection: 'row'}}>
        <TextInput placeholder="Course Goal" style={{borderColor: 'black', borderWidth: 1}} />
        <Button title='ADD' />
      </View>
      <View>

      </View>
    </View>
  );
}

