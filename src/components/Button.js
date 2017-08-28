import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress} style={styles.buttonStyle}>
      <Text style={styles.textStyle}> {props.buttonText} </Text>
    </TouchableOpacity>
  );
};

const styles = {
  buttonStyle: {
    marginTop: 40,
    backgroundColor: '#ababab',
    marginRight: 20,
    marginLeft: 20,
    paddingTop: 20,
    paddingBottom: 20,
  },
  textStyle: {
    alignSelf: 'center',
  }
};

export default Button;
