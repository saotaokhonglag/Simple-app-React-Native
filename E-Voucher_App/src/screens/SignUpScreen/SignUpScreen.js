import React, { useState } from 'react'
import {
    Text,
    View,
    StyleSheet,
    ScrollView
} from 'react-native'
import CustomInput from '../../components/CustomInput'
import CustomButton from '../../components/CustomButton'
import SocialSignInButton from '../../components/SocialSignInButton/SocialSignInButton'
import { useNavigation } from '@react-navigation/native'
import { signupUser, useAuth, logout } from '../../../firebase'
import {Layout} from "react-native-rapi-ui"

export default function ({  }) {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordRepeat, setPasswordRepeat] = useState('');
    const navigation = useNavigation();
    const currentUser = useAuth();
    const handleSignUp = () => {
        if(email !=='' && password !=='' && passwordRepeat !==''){
            if(password.length >=6){
                if(password === passwordRepeat){
                    try {
                        signupUser(email, password);
                        alert('Đăng ký thành công!')
                        setEmail('')
                        setPassword('')
                        setPasswordRepeat('')
                        navigation.navigate('SignInScreen')
                    } catch (error) {
                        alert(error);
                    }
                }else{
                    alert('Mật khẩu không khớp!')
                }
            }else{
                alert('Mật khẩu chứa ít nhất 6 ký tự')
            }
            
        }else{
            alert('Vui lòng nhập đầy đủ thông tin')
        }
    }

    async function handleLogout() {
        try {
            await logout();
            navigation.navigate('SignInScreen')
        } catch(e) {
            alert(e);
        }

    }

    


    const onRegisterPressed = () => {
        navigation.navigate('ConfirmEmail')
    }
    const onSignInPressed = () => {
        navigation.navigate('SignInScreen')
    }
    const onTermsOfUsePressed = () => {

    }
    const onPrivacyPressed = () => {

    }
    return (
        <Layout>
            <ScrollView showsHorizontalScrollIndicator={false}>
            <View style={styles.root}>
                <Text style={styles.title}>Create an account</Text>

                <CustomInput
                    placeholder="Email"
                    value={email}
                    setvalue={setEmail}
                />
                <CustomInput
                    placeholder="Password"
                    value={password}
                    setvalue={setPassword}
                    secureTextEntry={true}
                />
                <CustomInput
                    placeholder="Repeat Password"
                    value={passwordRepeat}
                    setvalue={setPasswordRepeat}
                    secureTextEntry={true}
                />

                <CustomButton text="Register" onPress={handleSignUp} />
                <Text style={styles.text}>By registering, you confirm that you accept our
                    <Text style={styles.link} onPress={onTermsOfUsePressed}> Terms of Use</Text> and
                    <Text style={styles.link} onPress={onPrivacyPressed}> Privacy Policy</Text>
                </Text>

                <SocialSignInButton />

                <CustomButton
                    text="Have an account? Sign In"
                    onPress={onSignInPressed}
                    type="TERTIARY"
                />
                <CustomButton
                    text="Logout"
                    onPress={handleLogout}
                    type="TERTIARY"
                />
            </View>
        </ScrollView>
        </Layout>

    );
};

const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        padding: 20,
    },

    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#051C60',
        margin: 10,
    },
    text: {
        color: 'gray',
        marginVertical: 10,
    },
    link: {
        color: '#FDB875',
    },
});

