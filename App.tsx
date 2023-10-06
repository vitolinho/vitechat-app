import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Header from './components/header/header'
import Form from './components/form/form'
import talk from './DATA/talk.json'

export default function App() {
  const receiptInfos = talk[2] as { id: number; num: string; picture: string };
  return (
    <View style={styles.container}>
      <Header profile_picture={receiptInfos.picture} num={receiptInfos.num}/>
      <Form/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "#F8F8FC"
  },
});
