import * as React from 'react';
import { Text, View, StyleSheet, TextInput, Keyboard, TouchableOpacity } from 'react-native';

export default class SendMessageForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      message: '',
    }

    this.handleInput = this.handleInput.bind(this)
    this.submitMessage = this.submitMessage.bind(this)
  }

handleInput(value) {
    this.setState({
      message: value,
    })
  }

  submitMessage() {
    const { message } = this.state
    const { onSubmit } = this.props
    onSubmit(message)
    this.setState({ message: '' })
  }

  render() {
    return (
      <View >
        <TextInput
          style={styles.loginFormInput}
          placeholder="Введи свое сообщение"
          onBlur={Keyboard.dismiss}
          value={this.state.message}
          onChangeText={this.handleInput}
          style={styles.inputText}
        />
        <TouchableOpacity style={styles.saveButton}
        onPress={this.submitMessage}
        >
          <Text style={styles.saveButtonText}>Отправить</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
  },
  saveButton: {
    borderWidth: 1,
    borderColor: '#333',
    backgroundColor: '#333',
    padding: 15,
    margin: 5
  },
  saveButtonText: {
    color: '#FFFFFF',
    fontSize: 20,
    textAlign: 'center'
  },
  inputText: {
    color: 'black',
    borderColor: '#333',
    backgroundColor: '#fafafa'
  }
});
