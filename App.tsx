import React,{ useState, useEffect } from 'react'
import { StyleSheet, Text, View, ScrollView, TextInput, TouchableOpacity } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Header from './components/header/header'
import Message from './components/message/message'
import talk from './DATA/talk.json'

export default function App() {
  
  const userTel = talk[1] as { id: number; num: string; picture: string };
  const receiptInfos = talk[2] as { id: number; num: string; picture: string };

  const [messages, setMessages] = useState([])
  const [newMessage, setNewMessage] = useState("")

  const sendMessage = async () => {
    if (newMessage) {
      const newMessageObj = {
        content: newMessage,
        num: userTel.num,
      };
      try {
        const existingMessages = await AsyncStorage.getItem('messages');
        const parsedMessages = existingMessages ? JSON.parse(existingMessages) : [];
        parsedMessages.push(newMessageObj);
        await AsyncStorage.setItem('messages', JSON.stringify(parsedMessages));
        setMessages((prevMessages) => [...prevMessages, newMessageObj]);
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
          const randomAnswerObj = {
            content: randomAnswer,
            num: receiptInfos.num,
          };
          parsedMessages.push(randomAnswerObj);
          AsyncStorage.setItem('messages', JSON.stringify(parsedMessages));
          setMessages((prevMessages) => [...prevMessages, randomAnswerObj]);
        }, 2000);
      } catch (error) {
        console.error('Erreur lors de la sauvegarde des messages : ', error);
      }
    }
  };
  const deleteMessage = async (index: number) => {
    try {
      const existingMessages = await AsyncStorage.getItem('messages');
      if (existingMessages) {
        const parsedMessages = JSON.parse(existingMessages);
        if (index >= 0 && index < parsedMessages.length) {
          parsedMessages.splice(index, 1);
          await AsyncStorage.setItem('messages', JSON.stringify(parsedMessages));
          setMessages(parsedMessages);
        }
      }
    } catch (error) {
      console.error('Erreur lors de la suppression du message : ', error);
    }
  };

  const getSavedData = async () => {
    const existingMessages = await AsyncStorage.getItem('messages');
    const parsedMessages = existingMessages ? JSON.parse(existingMessages) : [];
    setMessages(parsedMessages)
  }

  useEffect(() => {
    getSavedData()
  }, []);
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
