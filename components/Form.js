import { StyleSheet, TextInput, View, Button } from 'react-native';
import React from 'react';
import { gStyle } from '../styles/style';
import { Formik } from 'formik';


export default function Form({ addArticle }) {
    return (
        <View style={gStyle.main}>
            <Formik initialValues={{name: '', anons: '', full: '', img: ''}} onSubmit={(values, action) => {
                addArticle(values);
                action.resetForm();
            }}>
                {(props) => (
                    <View>
                        <TextInput 
                            style={styles.input}
                            value={props.values.name} 
                            placeholder='Введите название' 
                            onChangeText={props.handleChange('name')}
                        />
                        <TextInput 
                            style={styles.input}
                            value={props.values.anons} 
                            multiline
                            placeholder='Введите анонс' 
                            onChangeText={props.handleChange('anons')}
                        />
                        <TextInput 
                            style={styles.input}
                            value={props.values.full} 
                            multiline
                            placeholder='Введите статью' 
                            onChangeText={props.handleChange('full')}
                        />
                        <TextInput 
                            style={styles.input}
                            value={props.values.img} 
                            placeholder='Укажите фото' 
                            onChangeText={props.handleChange('img')}
                        />
                        <Button 
                            title='Добавить' 
                            onPress={props.handleSubmit} 
                        />
                    </View>
                )}
            </Formik>
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        marginTop: 15,
        padding: 15,
        borderColor: 'silver',
        borderRadius: 5
    }
});
