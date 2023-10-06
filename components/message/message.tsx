import React from "react"
import { StyleSheet, Text, View, TouchableOpacity } from "react-native"

interface MessageProperties {
  content: string,
  tel: string,
  userTel: string,
  delFunction: Function
}

const Message: React.FC<MessageProperties> = ({ content, tel, userTel, delFunction }:any) => {
  return (
    <View style={tel == userTel ? styles.message : styles.received}>
      <Text style={tel == userTel ? styles.text : styles.receivedText}>{content}</Text>
      <TouchableOpacity onPress={delFunction}>
        <Text>❌</Text>
      </TouchableOpacity>
  </View>
  )
}

const styles = StyleSheet.create({
  message: {
    width: "60%",
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 8,
    paddingTop: 8,
    justifyContent: "space-between",
    alignItems: "flex-start",
    borderTopLeftRadius: 12,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
    backgroundColor: "#187AFA",
    flexDirection: "row",
    alignSelf: "flex-end"
  },
  received: {
    width: "60%",
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 8,
    paddingTop: 8,
    justifyContent: "space-between",
    alignItems: "flex-start",
    borderTopRightRadius: 12,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
    backgroundColor: "#fff",
    flexDirection: "row"
  },
  text: {
    fontSize: 16,
    color: "#fff",
    lineHeight: 24
  },
  receivedText: {
    fontSize: 16,
    color: "#1A1A1D",
    lineHeight: 24
  }
}) 

export default Message