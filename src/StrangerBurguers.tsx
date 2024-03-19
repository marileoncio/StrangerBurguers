import React from "react";
import { FlatList, Image, StatusBar, StyleSheet, Text, Touchable, TouchableOpacity, View } from "react-native";

interface Lanches{
    id: string,
    nome: string,
    preco:string,
    ingredientes: string;
    image: any;
}

const dados: Lanches[] = [
{id: "1", nome: "Will Byers", preco: "31,00", ingredientes:"Pão gergelim + Duas carnes 75g + Fatias de Picles" +
"Molho de Picles Americano + Alface + Cebola", image: require('../src/assents/images/1.jpeg')},

{id: "2", nome: "Onze", preco: "34,00", ingredientes:"Pão Brioche + Hambuger 150g + Fatias de Cheddar" + 
"Cebola Caramelizada + Fatias de Bacon + Tomate + Rúcula + Maionese", image: require('../src/assents/images/2.jpeg')},

{id: "3", nome: "Mike Wheeler", preco: "28,00", ingredientes:"Pão com Gergelim + Hamburguer de carne Bovina (150g) "+ 
"Fatias de Bacon + Queijo Mussarela + Orégano + Molho especial (Alface, tomate e cebola)", image: require('../src/assents/images/3.jpeg')},

{id: "4", nome: "Lucas Sinclair", preco: "26,00", ingredientes:"Pão com Gergelim + Filé de Frango + Fatias de Bacon" + 
"Queijo Mussarela + Orégano + Molho Especial (Alface, Tomate e Cebola)", image: require('../src/assents/images/4.jpeg')},

{id: "5", nome: "Erica Sinclair", preco: "25,00", ingredientes:"Pão com Gergelim + Hamburguer de carne bovina (150g) + Queijo Mussarela "+ 
"Orégano + Alface + Tomate + cebola + Molho especial", image: require('../src/assents/images/5.jpeg')},

{id: "6", nome: "Dustin Henderson", preco: "27,00", ingredientes:"Pão com Gergelim + Hamburguer de carne bovina (150g)" + 
"Queijo Crispy + Queijo Mussarela + Orégano + Molho especial (Alface, tomate e cebola)", image: require('../src/assents/images/6.jpeg')},

{id: "7", nome: "Max", preco: "38,00", ingredientes:"Pão brioche + 02 carnes de75g + Tomate seco" +
" Rucula + Fatias de cheddar + Cebola + Maionese", image: require('../src/assents/images/7.jpeg')},

{id: "8", nome: "Steve Harrington ", preco: "37,00", ingredientes:"Pão Brioche + Duas carnes 150g + Fatias de Cheddar" + 
"Cebola + Fatias de Picles + Maionese + Ketchup + Mostarda", image: require('../src/assents/images/8.jpeg')},

{id: "9", nome: "Nancy Wheeler", preco: "26,00", ingredientes:"Pão Brioche + Hamburguer de Carne Bovina (150g)" +
 "Cebola Caramelizada + Fatias de Cheddar + Maionese", image: require('../src/assents/images/9.jpeg')},

{id: "10", nome: "Vecna", preco: "35,00", ingredientes:"Pão Brioche + Duas carnes 75g" + 
"Fatias de Bacon + Fatias de Cheddar + Maionese", image: require('../src/assents/images/10.jpeg')},

{id: "11", nome: "Jin Hopper", preco: "22,00", ingredientes:"Pão com Gergelim + Hamburguer 75g + Queijo Mussarela" + 
"Orégano + Alface + Tomate + cebola + Molho especial", image: require('../src/assents/images/11.jpeg')},

{id: "12", nome: "Joyce Byers", preco: "30,00", ingredientes:"Pão com Gergelim + Filé de Frango + Creme de Cheddar + Fatias de Bacon" + 
"Queijo Mussarela + Orégano + Molho Especial (Alface, Tomate e Cebola)", image: require('../src/assents/images/12.jpeg')},

{id: "13", nome: "Robin", preco: "31,00", ingredientes:"Pão Gergelim + Hamburguer Vegetariano + Mussarela" + 
"Oregano + Tomate + Alface + Pimenta Biquinho + Maionese Defumada", image: require('../src/assents/images/13.jpeg')},

{id: "14", nome: "Mundo Invertido", preco: "29,00", ingredientes:"Pão Brioche + Hambuger 75g + Fatias de Cheddar + Cebola Caramelizada" + 
"Fatias de Bacon + Tomate + Rúcula + Maionese", image: require('../src/assents/images/14.jpeg')},

{id: "15", nome: "Hawkings", preco: "28,00", ingredientes:"Pão com Gergelim + Hamburguer de carne Bovina ( 75g) + Creme de Cheddar "+ 
"Fatias de Bacon + Queijo Mussarela + Orégano + Molho especial (Alface, tomate e cebola)", image: require('../src/assents/images/15.jpeg')},

];

function StrangerBurguers(): React.JSX.Element{
    return(
        <View>
            
        </View>
    );
}