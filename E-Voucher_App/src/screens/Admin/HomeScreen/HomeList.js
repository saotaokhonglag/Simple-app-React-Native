import React from "react";
import { Image,
Text,
View,
StyleSheet,
} from 'react-native';
import { Button } from "react-native-web";
import {useAuth} from '../../../../firebase'


const HomeList = ({ srcMana }) => {

    
    const {image, title}=srcMana;
    return(
        <View style={styles.container}>
            
            <Image 
            style={styles.Ima}
            source={image}/>
            <Text style={{marginLeft:5}}>{title}</Text>
            <Button
            title = 'get user'/>
        </View>
    )
};

const styles = StyleSheet.create({
    container:{
        width: 180,
        backgroundColor: `#f5f5f5`,
        height: 160,
        borderRadius: 10,
        shadowColor: `#000000`,
        shadowOffset: {
            width: 5,
            height: 5
        },
        shadowRadius: 5,
        shadowOpacity: 0.75,
        elevation: 9,
        marginTop: 10,
        marginEnd:10
    },
    Ima: {
        height: 100,
        width: 180,
        borderTopLeftRadius: 10,
        borderTopRightRadius:10,
        opacity: 0.9 
    },
    title: {
        textTransform: 'uppercase',
        marginTop:8
    }
})

export default HomeList