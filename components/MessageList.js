import React from 'react';
import Message from './Message';
import InfoMessage from './InfoMessage'

import { FlatList, StyleSheet } from 'react-native';

const MessageList = props => {
  const { messageList, currentUser } = props;

  const messageData = messageList.map((el, idx) => {
    return {
      id: `message-${idx}`,
      nickname: el.nickname,
      msg: el.msg,
      type: el.type
    };
  }).reverse();

  const result = (
    <FlatList
    inverted
      data={messageData}
      renderItem={({ item }) => renderMessage({ item })}
      keyExtractor={item => item.id}
    />
  );

  const renderMessage = ({ item }) => {
    console.log(item.type)
    if (item.type === 'info') {
      return <InfoMessage nickname={item.nickname} text={item.msg}/>;
    } else {
      switch (item.nickname) {
        case currentUser:
          return (
            <Message
              nickname={item.nickname}
              text={item.msg}
              additionalStyles={styles.receiver}
            />
          );
        default:
          return (
            <Message
              nickname={item.nickname}
              text={item.msg}
              additionalStyles={styles.sender}
            />
          );
      }
    }
  };
  return result;
};

export default MessageList;

const styles = StyleSheet.create({
  sender: {
      padding: 20,
      borderBottomWidth: 1,
      borderBottomColor: '#eee',
      backgroundColor: '#fafafa'
  },
  receiver: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    backgroundColor: '#ffffff'
  }
})