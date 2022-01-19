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
import { database } from '../../../firebase-config';
import { getDoc,updateDoc,query,collection, where,doc,setDoc,addDoc} from 'firebase/firestore';
import { Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
const EditCartScreen = ({ route }) => {
  const navigation=useNavigation()
  const item = route.params;
  const [curPrice, setCurPrice] = useState(0)
  const [change, setChange] = useState({});
  useEffect(() => {
    setCurPrice(item.Quantity * item.Price)
  });
  function AddQty(item) {
    setChange(item.Quantity++)
    setCurPrice(item.Quantity * item.Price)
  }

  
  function DecQty(item) {
    setChange(item.Quantity--)
    setCurPrice(item.Quantity * item.Price)
  }
  async function onEditCart() {
    if(item.Quantity<=0){
      alert('Vui lòng chọn số lượng nhiều hơn 1')
    }
    else{
      try {
        const q = doc(database, "GioHang",item.ID);
        await updateDoc(q,{
        SoLuong: item.Quantity  
        });
        alert('Update to cart successfully!')
      } catch (error) {
        alert(error);
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
          
          <Text style={styles.name}>{item.Name}</Text>      
          
          <Text style={styles.location}>$ {item.Price}</Text>
          
          <View style={{ flexDirection: 'row', alignItems: 'center', alignSelf: 'flex-start',marginBottom:10 }}>
            <Text style={{fontSize:16,fontWeight:'300'}}>Số lượng: </Text>
            <AntDesign
              name="minuscircle"
              size={24}
              color="black"
              onPress={() => DecQty(item)}
            />
            {/* <Text style={{marginLeft:10}}>{item.qty}</Text> */}
            <Text style={{marginLeft:10}}>{item.Quantity}</Text>
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
            onPress={onEditCart}
            title="Cập nhật"
            
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
    marginBottom:5
  }
});

export default EditCartScreen;
