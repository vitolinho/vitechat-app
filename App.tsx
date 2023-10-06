import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Header from './components/header/header'
import Form from './components/form/form'
import Message from './components/message/message'
import talk from './DATA/talk.json'

export default function App() {
  const receiptInfos = talk[2] as { id: number; num: string; picture: string };
  const test = () => console.log('oui')
  return (
    <View style={styles.container}>
      <Header profile_picture={receiptInfos.picture} num={receiptInfos.num} />
      <Message content={'aazdazdazd'} tel={''} userTel={''} delFunction={test} />
      <Message content={'aazdazdazd'} tel={''} userTel={'a'} delFunction={test} />
      <Form />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "#F8F8FC"
  },
});
