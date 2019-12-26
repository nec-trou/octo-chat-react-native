import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const InfoMessage = props => {
  const {nickname, text} = props
  return (
    <View style={styles.row}>
      <Text style={styles.sender}>{nickname} {text}</Text>
    </View>
  )
}

export default InfoMessage

const styles = StyleSheet.create({
  row: {
    padding: 20,
    borderBottomColor: '#eee',
  },
  message: {
    fontSize: 18,
  },
  sender: {
    fontWeight: 'bold',
    paddingRight: 10,
  },
})
