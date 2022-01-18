import React, {useState} from "react";
import { View, Text, StyleSheet, ImageBackground, Image, Button } from 'react-native'
import CustomInput from "../../../components/CustomInput";
import { Layout } from "react-native-rapi-ui";
import { Icon } from 'react-native-elements'
const imageAv = require('../../../../assets/images/Logo_1.png')
export default function ({ }) {
    const [username, setUsername] = useState('');
    const [address, setAddress] = useState('');
    const [numPhone, setNumPhone] = useState('');
    const [email, setEmail] = useState('');
    return (
        <Layout>
            <View style={{ marginLeft: 10 }}>
                <View style={{ flexDirection: 'row' }}>

                    <Icon name="chevron-back-outline"
                        type="ionicon"
                        size={30}
                        style={{ marginLeft: 5 }}></Icon>
                    <Icon name="save-outline"
                        type="ionicon"
                        size={30}
                        style={{ alignItems: 'flex-end', alignSelf: 'flex-end', marginLeft: 325 }}></Icon>
                </View>
                <Image source={imageAv} style={styles.styleImageAv} />
                <CustomInput
                    placeholder="Họ tên"
                    value={username}
                    setvalue={setUsername}
                />
                <CustomInput
                    placeholder="Địa chỉ"
                    value={address}
                    setvalue={setAddress}
                />
                <CustomInput
                    placeholder="Số điện thoại"
                    value={numPhone}
                    setvalue={setNumPhone}
                />
                <CustomInput
                    placeholder="Email"
                    value={email}
                    setvalue={setEmail}
                />
            </View>
        </Layout>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    styleImageAv: { alignSelf: 'stretch', alignItems: 'flex-start', height: 100, width: 100, marginTop: 10, borderRadius: 200 / 2 },

});