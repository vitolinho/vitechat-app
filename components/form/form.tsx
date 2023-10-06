import React from "react"
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from "react-native"

const Form = () => {
  return (
    <View style={styles.form}>
      <View style={styles.subForm}>
        <TextInput
        style={styles.input}
        placeholder="Message"
        multiline={true}
        onChangeText={(text) => console.log(text)}
        />
        <TouchableOpacity style={styles.button}>
          <Text>↗️</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
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
    width: 48,
    height: 48,
    padding: 12,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 99999,
    borderWidth: 1,
    borderColor: "#fff",
    backgroundColor: "#187AFA"
  }
})

export default Form