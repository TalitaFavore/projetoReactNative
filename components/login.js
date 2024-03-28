import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import firebase from './services/connectionFirebase';
import { useNavigation } from '@react-navigation/native';


export default function Login({ route }) {
  const {changeStatus, setUser} = route.params;
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isCadastro, setIsCadastro] = useState(true);
  const navigation = useNavigation();

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const goToCadastro = () => {
    setIsCadastro(true);
  };

  const goToLogin = () => {
    setIsCadastro(false);
  };

  function handleLogin() {
    if (isCadastro) {
      // Cadastrar usuário
      firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          handleStatusChange(user.uid);
        })
        .catch((error) => {
          console.log(error);
          alert('Erro ao cadastrar usuário!');
        });
    } else {
      // Login do usuário
      firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          handleStatusChange(user.uid);
        })
        .catch((error) => {
          console.log(error);
          alert('Email ou senha incorretos!');
        });
    }
  }

  function handleStatusChange(userId) {
    // Armazenar o ID do usuário em um estado local
    console.log(userId);
    changeStatus(userId);
    console.log('Teste2');
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>{isCadastro ? 'Crie sua conta' : 'Entre com sua conta'}</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.subtitulo}>E-mail</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite seu e-mail"
          value={email}
          onChangeText={setEmail}
        />
        <Text style={styles.subtitulo}>Senha</Text>
        <View style={styles.passwordContainer}>
          <TextInput
            style={styles.input}
            placeholder="Digite sua senha"
            secureTextEntry={!showPassword}
            value={password}
            onChangeText={setPassword}
          />
          <TouchableOpacity onPress={toggleShowPassword} style={styles.eyeIconContainer}>
            <Feather name={showPassword ? 'eye-off' : 'eye'} size={24} color="black" />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.bottomSection}>
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>{isCadastro ? 'Cadastrar' : 'Entrar'}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={isCadastro ? goToLogin : goToCadastro}>
          <Text style={styles.aviso}>
            {isCadastro ? 'Já tem uma conta? Faça login' : 'Ainda não tem uma conta? Cadastre-se'}
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
