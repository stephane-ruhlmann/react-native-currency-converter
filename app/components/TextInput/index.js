import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableHighlight, TextInput } from 'react-native';
import color from 'color';

import styles from './styles';

const InputButton = ({
  onPress, editable = true, buttonText, defaultValue, onChangeText,
}) => {
  const containerStyles = editable
    ? styles.container
    : [styles.container, styles.containerDisabled];

  const underlayColor = color(styles.$buttonBackgroundColorBase).darken(0.1);
  return (
    <View style={containerStyles}>
      <TouchableHighlight
        style={styles.buttonContainer}
        underlayColor={underlayColor}
        onPress={onPress}
      >
        <Text style={styles.buttonText}>{buttonText}</Text>
      </TouchableHighlight>
      <View style={styles.border} />
      <TextInput
        editable={editable}
        style={styles.input}
        keyboardType="numeric"
        onChangeText={onChangeText}
        defaultValue={defaultValue}
      />
    </View>
  );
};

InputButton.propTypes = {
  onPress: PropTypes.func,
  buttonText: PropTypes.string,
  defaultValue: PropTypes.string,
  onChangeText: PropTypes.func,
  editable: PropTypes.bool,
};

export default InputButton;
