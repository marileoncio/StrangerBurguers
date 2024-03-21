import React from "react";
import { FlatList, Image, ImageBackground, StatusBar, StyleSheet, Text, Touchable, TouchableOpacity, View } from "react-native";

interface Lanches{
    id: string,
    nome: string,
    preco:string,
    ingredientes: string;
    image: any;
}

const dados: Lanches[] = [
{id: "1", nome: "Will Byers", preco: " R$31,00", ingredientes:"Pão gergelim + Duas carnes 75g + Fatias de Picles" +
"Molho de Picles Americano + Alface + Cebola", image: require('../src/assents/images/1.jpeg')},

{id: "2", nome: "Onze", preco: "R$34,00", ingredientes:"Pão Brioche + Hambuger 150g + Fatias de Cheddar" + 
"Cebola Caramelizada + Fatias de Bacon + Tomate + Rúcula + Maionese", image: require('../src/assents/images/2.jpeg')},

{id: "3", nome: "Mike Wheeler", preco: "R$28,00", ingredientes:"Pão com Gergelim + Hamburguer de carne Bovina (150g) "+ 
"Fatias de Bacon + Queijo Mussarela + Orégano + Molho especial (Alface, tomate e cebola)", image: require('../src/assents/images/3.jpeg')},

{id: "4", nome: "Lucas Sinclair", preco: "R$26,00", ingredientes:"Pão com Gergelim + Filé de Frango + Fatias de Bacon" + 
"Queijo Mussarela + Orégano + Molho Especial (Alface, Tomate e Cebola)", image: require('../src/assents/images/4.jpeg')},

{id: "5", nome: "Erica Sinclair", preco: "R$25,00", ingredientes:"Pão com Gergelim + Hamburguer de carne bovina (150g) + Queijo Mussarela "+ 
"Orégano + Alface + Tomate + cebola + Molho especial", image: require('../src/assents/images/5.jpeg')},

{id: "6", nome: "Dustin Henderson", preco: "R$27,00", ingredientes:"Pão com Gergelim + Hamburguer de carne bovina (150g)" + 
"Queijo Crispy + Queijo Mussarela + Orégano + Molho especial (Alface, tomate e cebola)", image: require('../src/assents/images/6.jpeg')},

{id: "7", nome: "Max", preco: "R$38,00", ingredientes:"Pão brioche + 02 carnes de75g + Tomate seco" +
" Rucula + Fatias de cheddar + Cebola + Maionese", image: require('../src/assents/images/7.jpeg')},

{id: "8", nome: "Steve Harrington ", preco: "R$37,00", ingredientes:"Pão Brioche + Duas carnes 150g + Fatias de Cheddar" + 
"Cebola + Fatias de Picles + Maionese + Ketchup + Mostarda", image: require('../src/assents/images/8.jpeg')},

{id: "9", nome: "Nancy Wheeler", preco: "R$26,00", ingredientes:"Pão Brioche + Hamburguer de Carne Bovina (150g)" +
 "Cebola Caramelizada + Fatias de Cheddar + Maionese", image: require('../src/assents/images/9.jpeg')},

{id: "10", nome: "Vecna", preco: "R$35,00", ingredientes:"Pão Brioche + Duas carnes 75g" + 
"Fatias de Bacon + Fatias de Cheddar + Maionese", image: require('../src/assents/images/10.jpeg')},

{id: "11", nome: "Jin Hopper", preco: "R$22,00", ingredientes:"Pão com Gergelim + Hamburguer 75g + Queijo Mussarela" + 
"Orégano + Alface + Tomate + cebola + Molho especial", image: require('../src/assents/images/11.jpeg')},

{id: "12", nome: "Joyce Byers", preco: "R$30,00", ingredientes:"Pão com Gergelim + Filé de Frango + Creme de Cheddar + Fatias de Bacon" + 
"Queijo Mussarela + Orégano + Molho Especial (Alface, Tomate e Cebola)", image: require('../src/assents/images/12.jpeg')},

{id: "13", nome: "Robin", preco: "R$31,00", ingredientes:"Pão Gergelim + Hamburguer Vegetariano + Mussarela" + 
"Oregano + Tomate + Alface + Pimenta Biquinho + Maionese Defumada", image: require('../src/assents/images/13.jpeg')},

{id: "14", nome: "Mundo Invertido", preco: "R$29,00", ingredientes:"Pão Brioche + Hambuger 75g + Fatias de Cheddar + Cebola Caramelizada" + 
"Fatias de Bacon + Tomate + Rúcula + Maionese", image: require('../src/assents/images/14.jpeg')},

{id: "15", nome: "Hawkings", preco: "R$28,00", ingredientes:"Pão com Gergelim + Hamburguer de carne Bovina ( 75g) + Creme de Cheddar "+ 
"Fatias de Bacon + Queijo Mussarela + Orégano + Molho especial (Alface, tomate e cebola)", image: require('../src/assents/images/15.jpeg')},

];

const renderLanches = ({item}: {item: Lanches}) => (
    <TouchableOpacity style={styles.lanches}>
        <Text style={styles.nomeText}>{item.nome}</Text>
        <Text>――――――――――――――</Text>                   
        <Text style={styles.precoText}>{item.preco}</Text>
        <Text>―――――――――――――</Text>
        <Text style={styles.descricaoText}> {item.ingredientes}</Text>
        <Text>――――――――――――――――――――――――――――</Text>
        <Image source={item.image} style={styles.image}/>
        

    </TouchableOpacity>
);


function StrangerBurguers(): React.JSX.Element{
    return(
        <View style={styles.container}>
            <ImageBackground source={require('../src/assents/images/fundo.jpg')} resizeMode="cover" style={styles.container}> 
     
            <StatusBar backgroundColor= "#D92121" barStyle= "light-content" />
            <View style={styles.header}>

            <Image source={require('../src/assents/images/fonte2.png')}
            style={styles.logo}/>


 </View> 
             <FlatList
                    showsVerticalScrollIndicator={false}
                    data={dados}
                    renderItem={renderLanches}
                    keyExtractor={(item) => item.id}
            />
            </ImageBackground>
            

        <View style={styles.footer}>
            <TouchableOpacity>
                <Image 
                source={require('../src/assents/images/home2.png')}
                style={styles.footerIcon}/>
            </TouchableOpacity>

            <TouchableOpacity>
                <Image 
                source={require('../src/assents/images/menu3.png')}
                style={styles.footerIcon}/>
            </TouchableOpacity>

            <TouchableOpacity>
                <Image 
                source={require('../src/assents/images/avatar2.png')}
                style={styles.footerIcon}/>
            </TouchableOpacity>

            <TouchableOpacity>
                <Image 
                source={require('../src/assents/images/sacola.png')}
                style={styles.footerIcon}/>
            </TouchableOpacity>


        </View>
             
                
         </View>
        
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,

    
    },
    logo:{
        width: 190,
        height:100
    },
    nomeText:{
        fontSize:25,
        fontWeight:'bold',
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
        backgroundColor:'black',
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
        width:32,
        height: 30
    },
    image:{
        width: 320,
        height: 320,
        borderTopEndRadius: 30,
        borderColor: 'red',
        marginTop: 10,
        borderWidth:5,
        borderRadius: 20

    },
    image2:{
    flex: 52,
    justifyContent: 'center',
    }
})

export default StrangerBurguers;