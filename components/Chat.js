import * as React from 'react';
import { View, StyleSheet} from 'react-native';
import io from 'socket.io-client';
import LoginForm from './LoginForm';
import MessageList from './MessageList';
import SendMessageForm from './SendMessageForm';

const socket = io.connect('https://octo-chat0710036033.herokuapp.com/', {
  pingTimeout: 6000000,
  pingInterval: 6000000
});

export default class Chat extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: '',
      messageList: []
    };
    this.onLoginFormSubmit = this.onLoginFormSubmit.bind(this);
    this.onMessageFormSubmit = this.onMessageFormSubmit.bind(this);
  }

  componentDidMount() {
    socket.on('message', ({ nickname, msg, type }) => {
      this.setState({
        messageList: this.state.messageList.concat([{ nickname, msg, type }])
      });
      console.log(this.state.messageList)
    });
  }

  onLoginFormSubmit(currentUser) {
    this.setState({
      currentUser
    });
    socket.emit('join', currentUser);
  }

  onMessageFormSubmit(msg) {
    const { currentUser } = this.state
    this.setState({
      currentUser,
    })
    socket.emit('message', { nickname: currentUser, msg, type: 'normal' })
  }

  render() {
    const { currentUser, messageList } = this.state;
    const isLoggedIn = currentUser !== '';
    return (
      <View style={styles.chatContainer}>
        {isLoggedIn ? (
          <>
            <View style={styles.messageListContainer}>
              <MessageList messageList={messageList} currentUser={currentUser}/>
            </View>
            <View style={styles.sendMessageFormContainer}>
              <SendMessageForm onSubmit={this.onMessageFormSubmit}/>
            </View>

          </>
        ) : (
          <LoginForm onSubmit={this.onLoginFormSubmit} />
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  chatContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: '#333'
  },
  messageListContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  sendMessageFormContainer: {
    backgroundColor: 'black',
  }
});