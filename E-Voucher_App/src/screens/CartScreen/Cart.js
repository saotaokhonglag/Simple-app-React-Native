import { collection, query, where, getDocs } from 'firebase/firestore'
import React, { useEffect, useState, useContext } from 'react';
import { View, Text, Button, FlatList, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native'

import { database } from '../../../firebase-config';
import { CusCart } from './customCart';
import { useAuth } from '../../../firebase'
import {
  getAuth,
  onAuthStateChanged,
} from 'firebase/auth';
export function Cart({ item }) {
  const [userid, setuserid] = useState("")
  const navigation = useNavigation();
  const [tour, setTour] = useState([])
  async function getAllData() {
    try {
      const auth = getAuth();
      onAuthStateChanged(auth, (user) => {
        if (user) {
          const id = user.uid;
          setuserid(id) 
          alert(userid);
        }
      });
      // where của câu truy vấn:  , where("IDuser", "==", userid)
    const q = query(collection(database, "GioHang"), where("id_KhachHang", "==",userid));
     const querySnapshot = await getDocs(q);
    let vouchers = [];
    querySnapshot.forEach(doc => {
      vouchers.push({...doc.data(), id: doc.id});
    })
    setTour(vouchers)
    } catch (error) {
      alert(error)
    } 
  }
  useEffect(() => {
    getAllData();
  }, [])
  
  function Totals() {
   
    let totalPrice = 0;
    tour.forEach((item) => {
      totalPrice += item.SoLuong * item.Gia;
    });
    return (
      <View style={styles.cartLineTotal}>
        <Text style={[styles.lineLeft, styles.lineTotal]}>Total</Text>
        <Text style={styles.lineRight}>$ {totalPrice}</Text>
        <Button title='Thanh toán' onPress={()=>navigation.navigate('CheckOut')}/>
      </View>
    );
  }

  return (
    <FlatList
      style={styles.itemsList}
      contentContainerStyle={styles.itemsListContainer}
      // keyExtractor={(item) => item.IDuser.toString()}
      data={tour}
      renderItem={({ item: product }) => {
        return <CusCart
          info={product} />
      }}

      ListFooterComponent={Totals}
    />
  );
}

const styles = StyleSheet.create({
  cartLine: {
    flexDirection: 'row',
  },
  cartLineTotal: {
    flexDirection: 'row',
    borderTopColor: '#dddddd',
    borderTopWidth: 1
  },
  lineTotal: {
    fontWeight: 'bold',
  },
  lineLeft: {
    fontSize: 20,
    lineHeight: 40,
    color: '#333333',
    marginLeft: 5
  },
  lineRight: {
    flex: 1,
    fontSize: 20,
    fontWeight: 'bold',
    lineHeight: 40,
    color: '#333333',
    textAlign: 'right',
    marginRight:10
  },
  itemsList: {
    backgroundColor: '#eeeeee',
  },
  itemsListContainer: {
    backgroundColor: '#eeeeee',
    paddingVertical: 8,
    marginHorizontal: 8,
  },
  imageStyle: {
    height: 100,
    width: 100,
    alignItems: 'flex-start',
    alignSelf: 'center',
    padding: 10
  }
});
