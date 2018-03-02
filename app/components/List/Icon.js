import React from 'react';
import { View, Image } from 'react-native';

import styles from './styles';

const Icon = () => (
  <View style={styles.icon}>
    <Image style={styles.checkIcon} resizeMode="contain" source={require('./images/check.png')} />
  </View>
);

export default Icon;
