import React from "react"
import { StyleSheet, View, Text, Image  } from "react-native"

interface HeaderProperties {
  profile_picture: string
  num: string
}

const Header: React.FC<HeaderProperties> = ({ profile_picture, num }) => {
  return (
    <View style={styles.header}>
      <View style={styles.infos}>
        <Image
          source={{ uri: profile_picture }}
          style={styles.image}
        />
        <Text style={styles.text}>{num}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    marginTop: 60,
    width: "100%",
    justifyContent: "center",
    height: 100,
    backgroundColor: "#fff",
  },
  infos: {
    paddingLeft: 20,
    paddingRight: 20,
    alignItems: "center",
    gap: 20,
    flexDirection: "row"
  },
  image: {
    width: 56,
    height: 56,
    borderRadius: 56
  },
  text: {
    color: "#1A1A1D",
    fontSize: 14,
    fontWeight: "bold"
  }
})

export default Header