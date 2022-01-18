import React, { useState } from 'react'
import { Text, View, Image, StyleSheet, useWindowDimensions, ScrollView, Platform } from 'react-native'
import Logo from '../../../assets/images/Logo_1.png'
import CustomInput from '../../components/CustomInput'
import CustomButton from '../../components/CustomButton'
import SocialSignInButton from '../../components/SocialSignInButton/SocialSignInButton'
import { useNavigation } from '@react-navigation/native'
import { login, useAuth, logout } from '../../../firebase'


export default function ({ }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const { height } = useWindowDimensions();
    const navigation = useNavigation();

    const currentUser = useAuth();
    const resetValue = () => {
        setUsername('')
        setPassword('')
    }

    async function onSignInPressed() {
        if (currentUser != null) {
            try {
                await logout().then(() => {
                    login(username, password).then(() => {
                        if (currentUser.email === 'admin@gmail.com') {
                            setUsername('')
                            setPassword('')
                            navigation.navigate('HomeAD')
                        } else {
                            setUsername('')
                            setPassword('')
                            navigation.navigate('MainTabs')
                        }
                    })
                })

            } catch (e) {
                alert(e)
            }
        } else {
            if (username != '' && password != '') {
                try {

                    await login(username, password).then(() => {
                        if (currentUser.email === 'admin@gmail.com') {
                            navigation.navigate('HomeAD')
                        } else {
                            navigation.navigate('MainTabs')
                        }
                    })
                } catch (error) {
                    alert(error);
                }
            } else {
                alert('Vui lòng nhập đầy đủ thông tin')
            }
        }


    }
    const onForgotPasswordPressed = () => {

        navigation.navigate('ForgotPassword')
    }
    const onSignupPressed = () => {
        navigation.navigate('SignUpScreen')
    }

    return (

        <ScrollView showsHorizontalScrollIndicator={false}>
            <View style={styles.root}>

                <Image source={Logo} style={[styles.logo, { height: height * 0.3 }]} resizeMode="contain" />

                <CustomInput
                    placeholder="Email"
                    value={username}
                    setvalue={setUsername}
                />

                <CustomInput
                    placeholder="Password"
                    value={password}
                    setvalue={setPassword}
                    secureTextEntry={true}
                />

                <CustomButton text="Sign In"
                    onPress={onSignInPressed} />

                <SocialSignInButton />

                <CustomButton
                    text="Don't have an account? Create one"
                    onPress={onSignupPressed}
                    type="TERTIARY"
                />
            </View>
        </ScrollView>


    );
};

const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        padding: 20,
    },
    logo: {
        ...Platform.select({
            ios: {
                width: '70%',
                maxWidth: 300,
                maxHeight: 200,
            },
            android: {
                width: '50%',
                maxWidth: 300,
                maxHeight: 200,
            },
            default: {
                // other platforms, web for example
                width: '100%',

            }
        })
    },

});

