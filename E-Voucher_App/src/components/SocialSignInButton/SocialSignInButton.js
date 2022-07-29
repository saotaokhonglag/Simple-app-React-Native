import React from 'react'
import CustomButton from '../CustomButton'
import * as Facebook from 'expo-facebook';
import * as Google from 'expo-google-app-auth';
import { useNavigation } from '@react-navigation/native'
import { useAuth, loginFacebook} from '../../../firebase'


const SocialSignInButton = () => {

  const navigation = useNavigation();
  const currentUser = useAuth();
  
  const handelGoogleSignin = () => {
    const config = {
      iosClientId: `758046595510-kid1ctdmslbab5bb467tvvaqa7no36mv.apps.googleusercontent.com`,
      androidClientId: `758046595510-p58qk589m4a9k4jtfl6fruf4tfeufcib.apps.googleusercontent.com`,
      scopes: ['profile', 'email']
    };
    Google.logInAsync(config)
      .then((result) => {
        const { type, user } = result;
        if (type == 'success') {
          const { email, name, photoUrl } = user;
          alert('Google signin successful', 'SUCCESS');
          setTimeout(() => navigation.navigate('Home', {email, name, photoUrl}),1000);
        } else {
          alert('Google signin was canceled!');
        }
      })
      .catch((error) => {
        console.log(error);
        alert(error);
      })
  };

  return (
    <>
      <CustomButton
        text="Sign In with Google"
        onPress={handelGoogleSignin}
        bgColor="#FAE9EA"
        fgColor="#DD4D44"
      />
    </>
  )
}

export default SocialSignInButton
