import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Message = props => {
  const {nickname, text, additionalStyles} = props
  return (
    <View style={additionalStyles}>
      <Text style={styles.sender}>{nickname}:</Text>
      <Text style={styles.message}>{text}</Text>
    </View>
  )
}

export default Message

const styles = StyleSheet.create({
  message: {
    fontSize: 18,
  },
  sender: {
    fontWeight: 'bold',
    paddingRight: 10,
  },
})
