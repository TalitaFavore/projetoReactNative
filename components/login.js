import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, SafeAreaView, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Login() {
    const navigation = useNavigation();

    const goToCadastro = () => {
        navigation.navigate('Cadastro');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Entrar</Text>
            <SafeAreaView style={styles.container}>
                <View style={styles.inputContainer}>
                    <Text style={styles.subtitulo}>E-mail</Text>
                    <TextInput
                        placeholder="Digite aqui seu e-mail"
                        style={styles.input}
                    />
                    <Text style={styles.subtitulo}>Senha</Text>
                    <TextInput
                        placeholder="Informe sua senha"
                        style={styles.input}
                        secureTextEntry
                    />
                    <Text style={styles.aviso}>Esqueceu a senha? Clique aqui</Text>
                </View>
            </SafeAreaView>
            <View style={styles.bottomSection}>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Iniciar Sessão</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity onPress={goToCadastro}>
                <Text style={styles.aviso}>Ainda não tem conta? Clique aqui</Text>
            </TouchableOpacity>
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

});
