import React, { useState } from "react";
import { Image, ImageBackground, ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { launchCamera, launchImageLibrary } from "react-native-image-picker";
import axios from 'axios';

const CadastroProduto: React.FC = () => {
    const [produtos, setProdutos] = useState<Produto[]>([]);
    const [nome, setNome] = useState<string>('');
    const [preco, setPreco] = useState<string>('');
    const [ingredientes, setIngredientes] = useState<string>('');
    const [imagem, setImagem] = useState<any>('');

    const cadastrarProduto = async () => {
        try {
            const formData = new FormData();
            formData.append('nome', nome);
            formData.append('preco', preco);
            formData.append('ingredientes', ingredientes);
            formData.append('imagem', {
                uri: imagem,
                type: 'image/jpeg',
                name: new Date() + '.jpg'
            });

            const response = await axios.post('http://10.137.11.223:8000/api/produtos', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
        } catch (error) {
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
            if (response.didCancel) {
                console.log('cancelado pelo usuario');
            } else if (response.error) {
                console.log('erro ao abrir camera');
            } else {
                let imageUri = response.uri || response.assets?.[0]?.uri;
                setImagem(imageUri);
                console.log(imageUri);
            }
        });
    }

    const selecionarImagem = () => {
        const options = {
            mediaType: 'photo',
            includeBase64: false,
            maxHeight: 2000,
            maxWidth: 2000
        };
        launchImageLibrary(options, response => {
            if (response.didCancel) {
                console.log('cancelado pelo usuario');
            } else if (response.error) {
                console.log('erro ao abrir galeria');
            } else {
                let imageUri = response.uri || response.assets?.[0]?.uri;
                setImagem(imageUri);
                console.log(imageUri);
            }
        });
    }

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="black" barStyle="light-content" />

            <View style={styles.header}>
                <Image source={require('../assents/images/fonte2.png')}
                    style={styles.logo} />
            </View>

            <ImageBackground source={require('../assents/images/fundo.jpg')} resizeMode="cover" style={styles.container}>

                <View>
                    <Text style={styles.store}>Cadastro Produtos</Text>
                </View>

                <View style={styles.form}>
                    <TextInput
                        style={styles.input}
                        placeholder="Nome do Produto"
                        value={nome}
                        onChangeText={setNome} />

                    <TextInput
                        style={styles.input}
                        placeholder="Preço"
                        value={preco}
                        onChangeText={setPreco} />

                    <TextInput
                        style={styles.input}
                        placeholder="Ingredientes"
                        value={ingredientes}
                        onChangeText={setIngredientes}
                        multiline />

                    <TouchableOpacity style={styles.imageButton} onPress={selecionarImagem}>
                        <Text style={styles.imageButtonText}>Selecionar Imagem</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.imageButton} onPress={abrirCamera}>
                        <Text style={styles.imageButtonText}>Tirar Foto</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button} onPress={cadastrarProduto}>
                        <Text style={styles.buttonText}>Cadastrar Produto</Text>
                    </TouchableOpacity>

                    <View style={styles.alinhamentoImagemSelecionada}>
                        {imagem ? <Image source={{ uri: imagem }} style={styles.imagemSelecionada} /> : null}
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
        backgroundColor: 'black',
        paddingVertical: 10,
        alignItems: 'center'
    },
    headerText: {
        backgroundColor: 'white',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 15,
        borderWidth: 2,
        fontWeight: 'bold'
    },
    form: {
        marginTop: 12,
        padding: 30,
        backgroundColor: '#f4f3ee',
        marginBottom: 20,
        borderRadius: 25

    },
    input: {
        height: 40,
        borderColor: 'black',
        borderWidth: 2,
        marginBottom: 6,
        paddingHorizontal: 20,
        borderRadius: 20
    },
    imageButton: {
        backgroundColor: 'red',
        padding: 10,
        borderRadius: 20,
        alignItems: 'center',
        marginBottom: 10,

    },
    imageButtonText: {
        color: 'white',
        fontWeight: 'bold',
        borderRadius: 20
    },
    imagemSelecionada: {
        width: 200,
        height: 200,
        resizeMode: 'cover',
        borderRadius: 1000,
        marginBottom: 10,
        borderWidth: 2,
        borderColor: 'black'
    },
    alinhamentoImagemSelecionada: {
        alignItems: 'center',
        marginTop: 10
    },
    button: {
        backgroundColor: 'red',
        padding: 10,
        borderRadius: 20,
        alignItems: 'center'
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold'
    },
    logo: {
        width: 210,
        height: 100
    },
    store: {
        width: 274,
        height: 45,
        borderRadius: 10,
        marginBottom: 10,
        backgroundColor: 'white',
        color: '#d90429',
        marginTop: 15,
        fontWeight: 'bold',
        paddingHorizontal: 20,
        marginRight: 'auto',
        marginLeft: 'auto',
        fontSize: 28,
        marginVertical: 5

    }
});

export default CadastroProduto;