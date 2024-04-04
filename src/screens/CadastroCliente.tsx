import React, { useState } from "react";
import { Image, ImageBackground, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { launchCamera, launchImageLibrary } from "react-native-image-picker";
import axios from 'axios';

const CadastroCliente: React.FC = () => {
    const [telefone, setTelefone] = useState<string>('');
    const [nome, setNome] = useState<string>('');
    const [endereco, setEndereco] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [senha, setSenha] = useState<string>('');
    const [imagem, setImagem] = useState<any>('');

    const cadastrarCliente = async() => {
        try{
        const formData = new FormData();
        formData.append('nome', nome);
        formData.append('telefone', telefone);
        formData.append('endereco', endereco);
        formData.append('email', email);
        formData.append('senha', senha);
        formData.append('imagem', {
            uri: imagem,
            type: 'image/jpeg',
            name: new Date() + '.jpg'
        });

        const response = await axios.post('http://10.137.11.223:8000/api/Clientes', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
        } catch(error){
            console.log(error);
        }  

    }

    const abrirCamera = () => {
        const options = {
            mediaType: 'photo',
            includeBase64: false,
            maxHeight: 2000,
            maxWidth: 2000
        };

        launchCamera(options, response => {
            if (response.didCancel){
                console.log('cancelado pelo usuario');
            }else if (response.error){
                console.log('erro ao abrir camera');
            }else{
                let imageUri = response.uri || response.assets?.[0]?.uri;
                setImagem(imageUri);
                console.log(imageUri);
            }
        });
    }

    const selecionarImagem =() => {
        const options = {
            mediaType: 'photo',
            includeBase64: false,
            maxHeight: 2000,
            maxWidth: 2000
        };
        launchImageLibrary(options, response => {
            if (response.didCancel){
                console.log('cancelado pelo usuario');
            }else if (response.error){
                console.log('erro ao abrir galeria');
            }else{
                let imageUri = response.uri || response.assets?.[0]?.uri;
                setImagem(imageUri);
                console.log(imageUri);
            }
        });
    }

     return(
        <View style={styles.container}>

            <StatusBar backgroundColor="red" barStyle="light-content" />
            <ImageBackground source={require('../src/assents/images/fundo.jpg')} resizeMode="cover" style={styles.container}>

            <View style={styles.header}>
            <Image source={require('../src/assents/images/fonte2.png')}
                        style={styles.logo} />
            </View>

            <View style={styles.form}>
                <TextInput 
                style={styles.input}
                placeholder="Nome"
                value={nome}
                onChangeText={setNome} />

                <TextInput 
                style={styles.input}
                placeholder="Endereço"
                value={endereco}
                onChangeText={setEndereco} />

                <TextInput 
                style={styles.input}
                placeholder="Telefone"
                value={telefone}
                onChangeText={setTelefone} />

                <TextInput 
                style={styles.input}
                placeholder="E-mail"
                value={email}
                onChangeText={setEmail} 
                multiline/>

            <TouchableOpacity style={styles.imageButton} onPress={selecionarImagem}>
                <Text style={styles.imageButtonText}>Selecionar Imagem</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.imageButton} onPress={abrirCamera}>
                <Text style={styles.imageButtonText}>Tirar Foto</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={cadastrarCliente}>
                <Text style={styles.buttonText}>Cadastrar Cliente</Text>
            </TouchableOpacity>

            <View style={styles.alinhamentoImagemSelecionada}>
                {imagem ? <Image source={{uri: imagem}} style={styles.imagemSelecionada}/> : null}
            </View>

            </View>
            </ImageBackground>
        </View>
     );
     }
     const styles = StyleSheet.create({
        container: {
            flex: 1
        },
        header: {
            backgroundColor: 'red',
            paddingVertical: 10,
            alignItems: 'center'
        },
        headerText: {
            fontSize: 20,
            fontWeight: 'bold',
            color: 'white'
        },
        form:{
            padding: 10,
            backgroundColor: '#f0f0f0',
            marginBottom: 10
        },
        input:{
            height: 40,
            borderColor: 'gray',
            borderWidth: 1,
            marginBottom: 10,
            paddingHorizontal: 10,
            borderRadius: 10
        },
        imageButton: {
            backgroundColor: 'red',
            padding: 10,
            borderRadius: 5,
            alignItems: 'center',
            marginBottom: 10
        },
        imageButtonText: {
            color: 'white',
            fontWeight: 'bold'
        },
        imagemSelecionada: {
            width: 200,
            height: 200,
            resizeMode: 'cover',
            borderRadius: 5,
            marginBottom: 10
        },
        alinhamentoImagemSelecionada: {
            alignItems: 'center'
        },
        button:{
            backgroundColor: 'red',
            padding: 10,
            borderRadius: 5,
            alignItems: 'center'
        },
        buttonText: {
            color: 'white',
            fontWeight: 'bold'
        },
        logo: {
            width: 310,
            height: 150
        }
});

 export default CadastroCliente;