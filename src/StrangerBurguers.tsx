import axios from "axios";
import React, { useEffect, useState } from "react";
import { FlatList, Image, ImageBackground, StatusBar, StyleSheet, Text, Touchable, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

interface Produto {
    id: string;
    nome: string;
    preco: string;
    ingredientes: string,
    imagem: any;
}

function StrangerBurguers(): React.JSX.Element {

    const [produtos, setProduto] = useState<Produto[]>([]);
    const [erro, setErro] = useState<string>("");
    const [carrinho, setCarrinho] = useState<{ [key: string]: number }>({});
    const [mensagemSucesso, setMensagemSucesso] = useState('');

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

    const adicionarAoCarrinho = (item: Produto) => {
        if (carrinho[item.id]) {
          setCarrinho({ ...carrinho, [item.id]: carrinho[item.id] + 1 });
        } else {
          setCarrinho({ ...carrinho, [item.id]: 1 });
        }
        setMensagemSucesso('Produto adicionado com sucesso');
        return carrinho;
      };

      const removerCarrinho = (item: Produto ) => {
        if(carrinho[item.id]) {
            setCarrinho({... carrinho, [item.id]: carrinho[item.id] - 1});
        } else {
            setCarrinho({...carrinho, [item.id]: 1});
            return carrinho;
        }
      };
    
      const totalCarrinho = Object.values(carrinho).reduce((total, quantidade) => total + quantidade, 0);


const renderLanches = ({ item }: { item: Produto }) => (
    <TouchableOpacity style={styles.lanches}>
        <Text style={styles.nomeText}>{item.nome}</Text>
        <Text>――――――――――――――</Text>
        <Text style={styles.precoText}>{item.preco}</Text>
        <Text>――――――――――――――――――――</Text>
        <Text style={styles.descricaoText}> {item.ingredientes}</Text>
        <Text>―――――――――――――――――――――</Text>
        <Image source={item.imagem} style={styles.image} />

        <TouchableOpacity onPress={() => adicionarAoCarrinho(item)} style={styles.buttom}>
            <Image source={require('../src/assents/images/adicionar-ao-carrinho.png')} style={styles.carrinho}></Image>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => removerCarrinho(item)}>
        <Image source={require('../src/assents/images/remover-do-carrinho.png')} style={styles.carrinho2}></Image>
        </TouchableOpacity>


    </TouchableOpacity>
);

    const navigation = useNavigation();   
        
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
                    <TouchableOpacity onPress={()=>navigation.navigate('CadastroProduto')}>
                        <Image
                            source={require('../src/assents/images/home2.png')}
                            style={styles.footerIcon} />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={()=> navigation.navigate('StrangerBurguers')}>
                        <Image
                            source={require('../src/assents/images/menu3.png')}
                            style={styles.footerIcon} />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={()=>navigation.navigate('CadastroCliente')}>
                        <Image
                            source={require('../src/assents/images/avatar2.png')}
                            style={styles.footerIcon} />
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <Image
                            source={require('../src/assents/images/sacola.png')}
                            style={styles.footerIcon} />
                        {totalCarrinho > 0 && (
                <View style={styles.carrinhoBadge}>
               <Text style={styles.carrinhoBadgeText}>{totalCarrinho}</Text>
                 </View>
                 )}
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
    mensagemSucessoText: {
        color: '#155724',
        fontSize: 16,
        textAlign: 'center',
    },
    buttom: {
        flexDirection: "row",
    },
    carrinho: {
        opacity: 10,
        width: 30,
        height: 30,
        marginLeft: 10,
        marginTop: 4
    },
    carrinho2:{
        opacity: 10,
        width: 30,
        height: 30,
        marginLeft: 60,
        marginTop: -30
    },
    carrinhoBadge: {
        position: "absolute",
        right: -6,
        top: -3,
        backgroundColor: "#2E8B57",
        borderRadius: 10,
        width: 20,
        height: 20,
        justifyContent: 'center',
        alignItems: 'center',
      },
      carrinhoBadgeText: {
        color: "white",
        fontWeight: "bold",
      },

});

export default StrangerBurguers;