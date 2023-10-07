import React,{ useState } from 'react'
import { StyleSheet, Text, View, ScrollView, TextInput, TouchableOpacity } from 'react-native'
import Header from './components/header/header'
import Message from './components/message/message'
import talk from './DATA/talk.json'

export default function App() {
  
  const userTel = talk[1] as { id: number; num: string; picture: string };
  const receiptInfos = talk[2] as { id: number; num: string; picture: string };

  const [messages, setMessages] = useState([])
  const [newMessage, setNewMessage] = useState("")

  const sendMessage = () => {
    if (newMessage) {
      setMessages((prevMessages) => [
        ...prevMessages,
        {
          content: newMessage,
          num: userTel.num,
        },
      ]);
      setNewMessage("");
      const answers = [
        "Salut !",
        "ça va ?",
        "Tu fais quoi ?",
        "Parfait !",
        "OK !",
      ];
      const randomIndex = Math.floor(Math.random() * answers.length);
      const randomAnswer = answers[randomIndex];
      setTimeout(() => {
        setMessages((prevMessages) => [
          ...prevMessages,
          {
            content: randomAnswer,
            num: receiptInfos.num,
          },
        ]);
      }, 2000);
    }
  };
  const deleteMessage = (index) => {
    const updatedMessages = [...messages]
    updatedMessages.splice(index, 1)
    setMessages(updatedMessages)
  }
  return (
    <View style={styles.container}>
      <Header profile_picture={receiptInfos.picture} num={receiptInfos.num} />
      <ScrollView>
        <View style={styles.messagesContainer}>
          {messages.map((message, index) => (
            <Message key={index} content={message.content} tel={message.num} userTel={userTel.num} delFunction={() => deleteMessage(index)} />
          ))}
        </View>
      </ScrollView>
      <View style={styles.form}>
        <View style={styles.subForm}>
          <TextInput
          style={styles.input}
          placeholder="Message"
          value={newMessage}
          multiline={true}
          onChangeText={(text) => setNewMessage(text)}
          />
          <TouchableOpacity style={styles.button} onPress={sendMessage}>
            <Text>↗️</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "#F8F8FC"
  },
  messagesContainer: {
    flex: 4,
    backgroundColor: "#F8F8FC",
    padding: 20,
    gap: 40
  },
  form: {
    backgroundColor: "#fff",
    width: "100%",
    height: 100,
    padding: 20,
    alignItems: "center",
    justifyContent: "center"
  },
  subForm: {
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row"
  },
  input: {
    width: "70%",
    height: 44,
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: 16,
    paddingRight: 16,
    alignItems: "center",
    borderRadius: 9999,
    borderWidth: 1,
    borderColor: "#626466",
    backgroundColor: "#fff"
  },
  button: {
    width: 52,
    height: 52,
    padding: 12,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 99999,
    backgroundColor: "#187AFA"
  }
});
