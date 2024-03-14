import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { Feather, MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function AuthScreen() {
  const navigation = useNavigation();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isLogin, setIsLogin] = useState(true);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const goToCadastro = () => {
    setIsLogin(false);
  };

  const goToLogin = () => {
    setIsLogin(true);
  };

  const handleSubmit = () => {
    // Lógica para enviar os dados do formulário
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>{isLogin ? 'Entrar' : 'Crie sua conta'}</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.subtitulo}>E-mail</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite aqui seu e-mail"
          value={email}
          onChangeText={setEmail}
        />
        <Text style={styles.subtitulo}>Senha</Text>
        <View style={styles.passwordContainer}>
          <TextInput
            style={styles.input}
            placeholder="Informe sua senha"
            secureTextEntry={!showPassword}
            value={password}
            onChangeText={setPassword}
          />
          <TouchableOpacity onPress={toggleShowPassword} style={styles.eyeIconContainer}>
            <Feather name={showPassword ? 'eye-off' : 'eye'} size={24} color="black" />
          </TouchableOpacity>
        </View>
        {!isLogin && (
          <>
            <Text style={styles.subtitulo}>Confirmar Senha</Text>
            <View style={styles.passwordContainer}>
              <TextInput
                style={styles.input}
                placeholder="Confirme sua senha"
                secureTextEntry={!showPassword}
                value={confirmPassword}
                onChangeText={setConfirmPassword}
              />
              <TouchableOpacity onPress={toggleShowPassword} style={styles.eyeIconContainer}>
                <Feather name={showPassword ? 'eye-off' : 'eye'} size={24} color="black" />
              </TouchableOpacity>
            </View>
            <Text style={styles.subtitulo}>Li e concordo com os termos de uso e política de privacidade</Text>
          </>
        )}
        {isLogin && (
          <TouchableOpacity onPress={() => navigation.navigate('EsqueceuSenha')}>
            <Text style={styles.aviso}>Esqueceu sua senha? Clique aqui</Text>
          </TouchableOpacity>
        )}
      </View>
      <View style={styles.bottomSection}>
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
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
  },
  inputContainer: {
    alignItems: 'flex-start',
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