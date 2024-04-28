import {View, Text} from 'react-native';
import React from 'react';
import encrypt from './crypto/encrypt';
import crypto from 'crypto';

console.log('typeof crypto', crypto);
console.log('process', process);
console.log('Buffer', Buffer);
console.log('first', Buffer.from('ehgheghe').toString('base64'));

const Cryptcomp = () => {
  console.log('yesssss');
  const encr = encrypt({love: 'is good'});
  console.log('encr', encr);
  console.log('noooo');

  return (
    <View>
      <Text>Cryptcomp</Text>
    </View>
  );
};

export default Cryptcomp;
