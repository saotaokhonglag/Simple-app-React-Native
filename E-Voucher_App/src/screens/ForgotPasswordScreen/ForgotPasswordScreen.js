import React, {useState} from 'react'
import { 
    Text, 
    View, 
    StyleSheet, 
    ScrollView } from 'react-native'
import CustomInput from '../../components/CustomInput'
import CustomButton from '../../components/CustomButton'
import SocialSignInButton from '../../components/SocialSignInButton/SocialSignInButton'
import { useNavigation } from '@react-navigation/native'
import { Layout } from 'react-native-rapi-ui'

const ForgotPasswordScreen = () =>{
    const [username, setUsername] = useState('');
    const navigation = useNavigation();
  
    const onSendPressed = () =>{
        navigation.navigate('NewPassword')
    }
    const onSignInPressed = () =>{
        navigation.navigate('SignIn')
    }
    return(
        <Layout>
            <ScrollView showsHorizontalScrollIndicator={false}>
        <View style={styles.root}>
            
            <Text style={styles.title}>Reset your password</Text>

             <CustomInput 
             placeholder="User name" 
             value={username} 
             setvalue={setUsername}
             />
        
             <CustomButton text="Send" onPress={onSendPressed}/>
            
             <CustomButton 
             text="Back to Sign In" 
             onPress={onSignInPressed}
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
        padding:20,
    },
 
    title:{
        fontSize: 24,
        fontWeight:'bold',
        color: '#051C60',
        margin: 10,
    },
    text:{
        color: 'gray',
        marginVertical: 10,
    },
    link:{
        color:'#FDB875',
    },
});

export default ForgotPasswordScreen