import axios from "axios";
import React, { useEffect, useState } from "react";
import { FlatList, Image, ImageBackground, StatusBar, StyleSheet, Text, Touchable, TouchableOpacity, View } from "react-native";


const renderLanches = ({ item }: { item: Produto }) => (
    <TouchableOpacity style={styles.lanches}>
        <Text style={styles.nomeText}>{item.nome}</Text>
        <Text>――――――――――――――</Text>
        <Text style={styles.precoText}>{item.preco}</Text>
        <Text>――――――――――――――――――――</Text>
        <Text style={styles.descricaoText}> {item.ingredientes}</Text>
        <Text>―――――――――――――――――――――</Text>
        <Image source={item.imagem} style={styles.image} />

        <View style={styles.botoes}>
            <TouchableOpacity style={styles.carrinho}>
                <Text style={styles.car}>+🛒</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.carrinho}>
                <Text style={styles.car}>-🛒</Text>
            </TouchableOpacity ></View>


    </TouchableOpacity>
);

function StrangerBurguers(): React.JSX.Element {

    const [produtos, setProduto] = useState<Produto[]>([]);
    const [erro, setErro] = useState<string>("");

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get('http://10.137.11.223:8000/api/produto');
                setProduto(response.data);
                console.log(response.data);
                
            } catch (error) {
                setErro("Ocorreu um erro");
                console.log(error)
            }
        }
        fetchData();
    }, []);



    return (
        <View style={styles.container}>
            <ImageBackground source={require('../src/assents/images/fundo.jpg')} resizeMode="cover" style={styles.container}>

                <StatusBar backgroundColor="#D92121" barStyle="light-content" />
                <View style={styles.header}>

                    <Image source={require('../src/assents/images/fonte2.png')}
                        style={styles.logo} />


                </View>
                <FlatList
                    showsHorizontalScrollIndicator={true}
                    data={produtos}
                    keyExtractor={(item) => item.id}
                    renderItem={renderLanches}
                   
                />



                <View style={styles.footer}>
                    <TouchableOpacity>
                        <Image
                            source={require('../src/assents/images/home2.png')}
                            style={styles.footerIcon} />
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <Image
                            source={require('../src/assents/images/menu3.png')}
                            style={styles.footerIcon} />
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <Image
                            source={require('../src/assents/images/avatar2.png')}
                            style={styles.footerIcon} />
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <Image
                            source={require('../src/assents/images/sacola.png')}
                            style={styles.footerIcon} />
                    </TouchableOpacity>


                </View>

            </ImageBackground>
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    car: {
        color: 'white',
        textAlign: 'center',
        justifyContent: 'center',
        fontSize: 20
    },

    botoes: { flexDirection: "row" },

    logo: {
        width: 310,
        height: 150
    },
    nomeText: {
        fontSize: 25,
        fontWeight: 'bold',
        color: 'black'

    },
    precoText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black'
    },
    descricaoText: {
        fontSize: 15,
        fontWeight: 'bold',
        color: 'black'
    },

    lanches: {
        backgroundColor: 'white',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 15,
        borderWidth: 2
    },
    header: {
        backgroundColor: 'black',
        alignItems: 'center',
        paddingVertical: 10
    },

    footer: {
        borderTopWidth: 0.2,
        backgroundColor: 'black',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingVertical: 10
    },
    footerIcon: {
        width: 32,
        height: 30
    },
    image: {
        width: 262,
        height: 262,
        borderTopEndRadius: 30,
        borderColor: 'red',
        marginTop: 25,
        borderWidth: 5,
        borderRadius: 20

    },
    image2: {
        flex: 52,
        justifyContent: 'center'
    },
    carrinho: {
        backgroundColor: 'red',
        opacity: 10,
        width: 70,
        height: 30,
        marginTop: 10,
        borderRadius: 10,
        marginLeft: 10

    }
})

export default StrangerBurguers;