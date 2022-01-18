import React from "react";
import { View, Text, StyleSheet, ImageBackground, Image,Button } from 'react-native'
import CustomButton from "../../../components/CustomButton";
import { Layout } from "react-native-rapi-ui";

import { useNavigation } from '@react-navigation/native'
import {logout} from '../../../../firebase'

const imagebk = require('../../../../assets/images/bkimage.jpg');
const imageAv = require('../../../../assets/images/Logo_1.png')
export default function ({ }) {
    const navigation = useNavigation();
    async function handleLogout() {
        try {
            await logout();
            navigation.navigate('SignInScreen')
        } catch(e) {
            alert(e);
        }

    }
    return (
        <Layout>
            <View>
                <ImageBackground source={imagebk} resizeMode="cover" style={styles.styleImageBk}>
                    <Image source={imageAv} style={styles.styleImageAv} />
                    <Text style={styles.styleName}>Nguyễn Văn A</Text>
                </ImageBackground>
                <CustomButton
                    text="Thông tin chi tiết" 
                    onPress={() => {
                        navigation.navigate("DetailAccount");
                      }}
                />
                <CustomButton
                    onPress={handleLogout}
                    text="Đăng xuất"
                />
                
            </View>
        </Layout>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    styleImageBk: { height: 160, width: '100%' },
    styleImageAv: { alignSelf: 'center', alignItems: 'flex-end', height: 100, width: 100, marginTop: 10, borderRadius: 200 / 2 },
    styleName: { alignItems: 'flex-start', alignSelf: 'center', color: 'white', fontSize: 20, fontWeight: 'bold' },

});