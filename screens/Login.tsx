import { useMutation } from '@apollo/client';
import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Pressable } from 'react-native';
import { LOGIN } from '../graphql/mutations';

import { Ionicons } from '@expo/vector-icons';

const Login = (props) => {
  const [email, setEmail] = useState('test@gmail.com');
  const [password, setPassword] = useState('test1234');
  const [error, setError] = useState('');

  const [showPassword, setShowPassword] = useState(false);
  const [doSignInMutation, { loading }] = useMutation(LOGIN);

  const doSignIn = async () => {
    try {
      const { data } = await doSignInMutation({
        variables: {
          data:{
            email,
            password,
          }
        },
      });
      
console.log('Data  :  ',data)
      if (data && data.login) {
        props.onTokenChange(data.login);
        props.navigation.navigate('Accueil'); // Remplacez 'Home' par le nom de votre écran d'accueil
      } else {
        setError('Veuillez vérifier votre adresse e-mail et votre mot de passe');
      }
    } catch (error) {
      // Gérer les erreurs ici
      console.log(error);
    }
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={text => setEmail(text)}
      />
      <View style={styles.passwordInputContainer}>
        <TextInput
          style={styles.passwordInput}
          placeholder="Mot de passe"
          secureTextEntry={!showPassword}
          value={password}
          onChangeText={text => setPassword(text)}
        />
        <Pressable onPress={toggleShowPassword} >
        <Ionicons
          name={showPassword ? 'eye-off-outline' : 'eye-outline'}
          size={24}
          color="gray"
          onPress={toggleShowPassword}
        />
        </Pressable>
      </View>
      <Button title="Se connecter" onPress={doSignIn} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  passwordInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'gray',
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  passwordInput: {
    flex: 1,
    height: 40,
  },
});

export default Login;