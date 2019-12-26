import * as React from 'react';
import { Text, View, StyleSheet, TextInput, Keyboard, TouchableOpacity } from 'react-native';

export default class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUsername: ''
    };
    this.handleInput = this.handleInput.bind(this);
    this.submitUsername = this.submitUsername.bind(this);
  }

  handleInput(name) {
    this.setState({
      currentUsername: name
    });
  }

  submitUsername() {
    const { currentUsername } = this.state;
    const { onSubmit } = this.props;
    onSubmit(currentUsername);
  }

  render() {
    return (
      <View>
        <TextInput
          style={styles.loginFormInput}
          placeholder="Введи свой ник"
          placeholderTextColor="#fafafa"
          maxLength={20}
          onBlur={Keyboard.dismiss}
          value={this.state.currentUsername}
          onChangeText={this.handleInput}
        />
        <TouchableOpacity style={styles.saveButton}
        onPress={this.submitUsername}
        >
          <Text style={styles.saveButtonText}>Войти в чат</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  loginFormInput: {
    color: 'white'
  },
  saveButton: {
    borderWidth: 1,
    borderColor: '#333',
    backgroundColor: '#fff',
    padding: 15,
    margin: 5
  },
  saveButtonText: {
    color: '#333',
    fontSize: 20,
    textAlign: 'center'
  }
});
