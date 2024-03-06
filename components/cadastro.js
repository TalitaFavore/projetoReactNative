import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, TextInput } from 'react-native';


export default function Login() {
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Crie sua conta</Text>
            <SafeAreaView style={styles.container}>
                <View style={styles.inputContainer}>
                    <Text style={styles.subtitulo}>E-mail</Text>
                    <TextInput
                        placeholder="Digite aqui seu e-mail"
                        style={styles.input}
                    />
                    <Text style={styles.subtitulo}>Senha</Text>
                    <TextInput
                        placeholder="Crie uma conta de no mínimo 6 caracteres"
                        style={styles.input}
                        secureTextEntry
                    />
                    <Text style={styles.termo}>Li e concordo com os Termos de Uso e Política de Privacidade</Text>
                </View>
            </SafeAreaView>
            <View style={styles.bottomSection}>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Cadastrar</Text>
                </TouchableOpacity>
                <Text style={styles.aviso}>Já tem conta? Entre aqui</Text>
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

    texto: {
        color: 'black',
        fontSize: 50,
        fontWeight: 'bold',
        fontFamily: 'Quicksand',
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

    termo: {
        color: 'black',
        fontSize: 12,
        fontFamily: 'Quicksand',
        marginTop: 20,
        textAlign: 'left',
    },

});
