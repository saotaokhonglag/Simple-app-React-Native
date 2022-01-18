import React, { useEffect, useState, useContext } from 'react';
import {
  Text,
  Image,
  View,
  ScrollView,
  SafeAreaView,
  Button,
  StyleSheet
} from 'react-native';
import { AntDesign } from "@expo/vector-icons";


import { database } from '../../../firebase-config'
import { addDoc, collection } from 'firebase/firestore'
import { ref } from 'firebase/database';
import { useNavigation } from '@react-navigation/native';
import {Icon} from 'react-native-elements'
import {useAuth, auth} from '../../../firebase'
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider,
} from 'firebase/auth';

const DetailsScreen = ({ route }) => {

  const navigation = useNavigation();
  const item = route.params;
  const [PreviewUrl, setPreviewUrl] = useState();
  const [userId, setuserId] = useState('')
  async function id() {
    const user = await auth.currentUser();
    if (user) {
      alert(user.uid);
      setuserId(user.uid)
    } else {
      alert('no user signin')
    }
  }

  // const [product, setProduct] = useState({});
  // const [qty,setQty] = useState({});
  // // useEffect(()=>{
  // //   setQty(product.qty++);[]
  // // })

  const [curPrice, setCurPrice] = useState(0)

 
  const [change, setChange] = useState({});
  function AddQty(item) {
    setChange(item.qty++)
    setCurPrice(item.qty * item.price)
  }

  
  function DecQty(item) {
    setChange(item.qty--)
    setCurPrice(item.qty * item.price)
  }

  function onAddToCart() {
    if (item.qty <= 0) {
      alert('Vui lòng chọn số lượng nhiều hơn 1')
    }
    else {
      if (userId == null) {
        navigation.navigate('SignInScreen')
      }
      else {
        try {
              const addSsCart = addDoc(collection(database, 'GioHang'), {
                id_KhachHang: userId,
                TenVoucher: item.name,
                Gia: item.price,
                soluong: item.qty,
                thanhtien: curPrice
              });
              alert('Add to cart successfully!')
        } catch (error) {
          alert(error);
        }
      }

    }
  }
  return (
    <SafeAreaView>
      <ScrollView>

        <View style={styles.infoContainer}>
        <View style={styles.icon}>
            <Icon name="chevron-back-outline"
              type="ionicon"
              size={30}

              onPress={navigation.goBack}
            />
          </View>
          <Image
            style={styles.image}
            source={require('../../../assets/images/DaNang.jpg')}
          />
          
          {/* <View style={{backgroundColor:'#F4A460'}}> */}
          <View >
          <Text style={styles.name}>{item.name}</Text>
          
          <Text style={styles.description}>{item.description}</Text>
          <Text style={styles.location}>Địa điểm: {item.location}</Text>
          <Text style={styles.location}>Giá: {item.price}</Text>
          <View style={{ flexDirection: 'row', alignItems: 'center', alignSelf: 'flex-start',marginBottom:10 }}>
            <Text style={{fontSize:16,fontWeight:'300'}}>Số lượng: </Text>
            <AntDesign
              name="minuscircle"
              size={24}
              color="black"
              onPress={() => DecQty(item)}
            />
            <Text style={{marginLeft:10}}>{item.qty}</Text>
            <AntDesign
              style={{ marginLeft: 10 }}
              name="pluscircle"
              size={24}
              color="black"
              onPress={() => AddQty(item)}
            />

          </View>
          <Text style={styles.location}> Thành tiền: {curPrice}</Text>
          <Button
            onPress={onAddToCart}
            title="Add to cart"
            
          />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
 
 
  image: {
    height: 300,
    width: '100%'
  },
  infoContainer: {
    padding: 16,
    backgroundColor:'#FFEFD5'
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 16,
    fontWeight: '400',
    color: 'black',
    
  },
  location:{
    fontSize: 16,
    fontWeight: '400',
    color: '#787878',
    marginBottom: 10,
    color: 'black',
    
  },
  icon:{
    alignItems: 'flex-start',
    alignSelf: 'flex-start',
    marginTop: 10,
  }
});

export default DetailsScreen;
