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

const NewPasswordScreen = () =>{
    const [code, setCode] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const navigation = useNavigation();
  
    const onSubmitPressed = () =>{
        navigation.navigate('Home')
    }
    const onSignInPressed = () =>{
        navigation.navigate('SignIn')
    }
    return(
        <ScrollView showsHorizontalScrollIndicator={false}>
        <View style={styles.root}>
            
            <Text style={styles.title}>Reset your password</Text>

             <CustomInput 
             placeholder="Code" 
             value={code} 
             setvalue={setCode}
             />

            <CustomInput 
             placeholder="Emter your new password" 
             value={newPassword} 
             setvalue={setNewPassword}
             />
        
        
             <CustomButton text="Submit" onPress={onSubmitPressed}/>
            
             <CustomButton 
             text="Back to Sign In" 
             onPress={onSignInPressed}
             type="TERTIARY"
             />
        </View>
        </ScrollView>

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

export default NewPasswordScreen