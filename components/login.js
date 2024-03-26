import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { Feather, MaterialIcons } from '@expo/vector-icons';
import firebase from './services/connectionFirebase';

export default function Login({changeStatus}) {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [type, setType] = useState('login');
  const [isLogin, setIsLogin] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const goToCadastro = () => {
    setIsLogin(false);
  };

  const goToLogin = () => {
    setIsLogin(true);
  };

  function handleLogin() {
    if (type != 'login') {
      // Aqui cadastramos o usuario 
      const user = firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((user) => {
          changeStatus(user.user.uid)
        })
        .catch((err) => {
          console.log(err);
          alert('Erro ao Cadastrar!');
          return;
        })
 
    } else {
      // Aqui fazemos o login
     
      const user = firebase.auth().signInWithEmailAndPassword(email, password)
        .then((user) => {
          changeStatus(user.user.uid)
        })
        .catch((err) => {
          console.log(err);
          alert('Email ou senha não cadastrados!');
          return;
        })
      
      
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>{isLogin ? 'Entrar' : 'Crie sua conta'}</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.subtitulo}>E-mail</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite aqui seu e-mail"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <Text style={styles.subtitulo}>Senha</Text>
        <View style={styles.passwordContainer}>
          <TextInput
            style={styles.input}
            placeholder="Informe sua senha"
            secureTextEntry={!showPassword}
            value={password}
            onChangeText={(text) =>setPassword(text)}
          />
          <TouchableOpacity onPress={toggleShowPassword} style={styles.eyeIconContainer}>
            <Feather name={showPassword ? 'eye-off' : 'eye'} size={24} color="black" />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.bottomSection}>
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>{isLogin ? 'Iniciar Sessão' : 'Cadastrar'}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={isLogin ? goToCadastro : goToLogin}>
          <Text style={styles.aviso}>
            {isLogin ? 'Ainda não tem conta? Clique aqui' : 'Já tem conta? Entre aqui'}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo: {
    color: 'black',
    fontSize: 26,
    fontFamily: 'Quicksand',
    marginTop: 100,
  },
  subtitulo: {
    color: 'black',
    fontSize: 16,
    fontFamily: 'Quicksand',
    marginTop: 10,
    textAlign: 'left',
    alignSelf: 'flex-start',
  },
  aviso: {
    color: '#6EC071',
    fontSize: 12,
    fontFamily: 'Quicksand',
    marginTop: 20,
    textAlign: 'left',
  },
  bottomSection: {
    position: 'absolute',
    bottom: 20,
    width: '100%',
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'black',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    width: 200,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontFamily: 'Quicksand',
  },
  input: {
    marginBottom: 20,
    marginTop: 20,
    backgroundColor: '#FFF',
    borderRadius: 6,
    height: 45,
    width: 320,
    padding: 10,
    borderWidth: 2,
    borderColor: '#6EC071',
    placeholderTextColor: '#A9A9A9',
    alignItems: 'center',
  },
  inputContainer: {
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 20,
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  eyeIconContainer: {
    position: 'absolute',
    right: 10,
  },
});