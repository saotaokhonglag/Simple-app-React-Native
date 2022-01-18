import React from "react";
import { View, Text, StyleSheet, ImageBackground, Image, Button } from 'react-native'
import CustomButton from "../../../components/CustomButton";
import { Layout } from "react-native-rapi-ui";
import { Icon } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native'
const imageAv = require('../../../../assets/images/Logo_1.png')
export default function ({ }) {
    const navigation = useNavigation();
    return (
        <Layout>
            <View style={{marginLeft:10}}>
            <View style={{flexDirection: 'row'}}>

            <Icon name="chevron-back-outline"
                type="ionicon"
                size={30}
                style={{marginLeft:5}}></Icon>
            <Icon name="create-outline"
            onPress={() => {
                navigation.navigate("Edit");
              }}
                type="ionicon"
                size={30}
                style={{alignItems:'flex-end',alignSelf:'flex-end',marginLeft:325}}
                
                ></Icon>
            </View>
                <Image source={imageAv} style={styles.styleImageAv} />
                <Text style={styles.styleTextTitle}>Họ tên: <Text>Nguyễn Văn A</Text></Text>
                <Text style={styles.styleTextTitle}>Địa chỉ: <Text>Ninh Kiều, Cần Thơ</Text></Text>
                <Text style={styles.styleTextTitle}>Số điện thoại: <Text>0123456789</Text></Text>
                <Text style={styles.styleTextTitle}>Email: <Text>VanA123@gmail.com</Text></Text>
            </View>
        </Layout>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    styleImageAv: { alignSelf: 'stretch', alignItems: 'flex-start', height: 100, width: 100, marginTop: 10, borderRadius: 200 / 2 },
    styleTextTitle: {fontSize: 20, fontWeight: '300', color:'black',marginTop:5 },
    
});