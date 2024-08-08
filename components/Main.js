import { StyleSheet, Text, View, TouchableOpacity, FlatList, Image, Modal } from 'react-native';
import React, { useState } from 'react';
import { gStyle } from '../styles/style';
import { Ionicons } from '@expo/vector-icons';
import Form from './Form';


export default function Main({ navigation }) {
    const [news, setNews] = useState([
        { name: 'Google', anons: "Google's News", full: 'Google is a popular interner search engine', key: '1', img: 'https://overclockers.ru/st/legacy/blog/432560/511110_O.jpg' },
        { name: 'Apple', anons: "Apple's News", full: 'Apple is famous company for creating iPhone', key: '2', img: 'https://iziretail.ru/image/catalog/fotop/pristavka_resiv/3cede682c7730cd65383.png' },
        { name: 'FaceBook', anons: "FaceBook's News", full: 'FaceBook is a social networking site', key: '3', img: 'https://www.mcmunns.com/wp-content/uploads/2017/04/logo-facebook.png' }
    ]);

    const [modalWindow, setModalWindow] = useState(false);

    const addArticle = (article) => {
        setNews((list) => {
            article.key = Math.random().toString();
            return [
                article,
                ...list
            ]
        });
        setModalWindow(false);
    }

    return (
        <View style={[gStyle.main, styles.header]}>
            <Modal visible={modalWindow}>
                <View style={gStyle.main}>
                    <Ionicons name="close-circle" size={34} color="red" style={styles.iconClose} onPress={() => setModalWindow(false)} />
                    <Text style={styles.title}>Форма добавления статей</Text>
                    <Form addArticle={addArticle} />
                </View>
            </Modal>
            <Ionicons name="add-circle" size={34} color="black" style={styles.iconAdd} onPress={() => setModalWindow(true)} />
            <Text style={gStyle.title}>Главная страница</Text>
            <FlatList data={news} renderItem={({item}) => (
                <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('FullInfo', item)} >
                    <Image style={styles.image} source={{uri: item.img}} />
                    <Text style={styles.title}>{item.name}</Text>
                    <Text style={styles.anons}>{item.anons}</Text>
                </TouchableOpacity>
            )} />
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        marginBottom: 30
    },
    iconClose: {
        textAlign: 'center'
    },
    iconAdd: {
        textAlign: 'center',
        marginBottom: 15
    },
    item: {
        width: '100%',
        marginBottom: 30
    },
    image: {
        width: '100%',
        height: 200
    },
    title: {
        fontFamily: 'mt-bold',
        fontSize: 22,
        textAlign: 'center',
        marginTop: 20,
        color: '#474747'
    },
    anons: {
        fontFamily: 'mt-light',
        fontSize: 16,
        textAlign: 'center',
        marginTop: 5,
        color: '#474747'
    }
});
