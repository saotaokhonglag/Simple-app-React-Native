import React, { useState, useEffect } from 'react';
import {
  Dimensions,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Button,
  StatusBar
} from 'react-native';
import {
  FlatList,
  TextInput,

} from 'react-native-gesture-handler';

import COLORS from '../../consts/colors';
import { collection, query, where, getDocs, addDoc } from 'firebase/firestore'
import { database } from '../../../firebase-config';
import { Icon } from 'react-native-elements';
import CustomInput from '../../components/CustomInput';
import { CusCheckOut } from './CusCheckOut';
import { useNavigation } from '@react-navigation/native';
import { useAuth } from '../../../firebase'
const { width } = Dimensions.get('screen');
const cardWidth = width / 2 - 20;

const CheckOutScreen = ({ item }) => {
  const navigation = useNavigation();
  const [tour, settour] = useState([])
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [numP, setNumP] = useState('')
  const [currentDate, setCurrentDate] = useState('');
  const [total,setTotal]=useState('')

  useEffect(() => {
    var date = new Date().getDate(); //Current Date
    var month = new Date().getMonth() + 1; //Current Month
    var year = new Date().getFullYear(); //Current Year
    var hours = new Date().getHours(); //Current Hours
    var min = new Date().getMinutes(); //Current Minutes
    var sec = new Date().getSeconds(); //Current Seconds
    setCurrentDate(
      date + '/' + month + '/' + year
      + ' ' + hours + ':' + min + ':' + sec
    );
  }, []);

  const handleCheckOut = () => {
    try{
      const docRef = addDoc(collection(database, "donhang"), {
        ngaytao: currentDate,
        id_KhachHang: currentUser.id,
        tongtien: total
      });
      tour.forEach((item) => {
        
        const docRef1 = addDoc(collection(database, "CT_donhang"), {
          id_voucher: item.Name,
          gia: item.Price,
          soluong: item.Quantity,
          id_KhachHang: currentUser.uid,
          id_Voucher: item.id
        });
        
      });
    }
    catch (error) {
      alert(error);
    }

  }
  /* Lấy toàn bộ Voucher */
  async function getAllData() {
    const q = query(collection(database, "GioHang"),where("id_KhachHang","==",currentUser.uid));

    const querySnapshot = await getDocs(q);
    let vouchers = [];
    querySnapshot.forEach(doc => {
      vouchers.push(doc.data());
    })
    settour(vouchers)

  }

  useEffect(() => {
    getAllData();
  }, [])

  function header() {
    return (
      <View style={{ marginTop: 20, flexDirection: 'row', alignItems: 'center' }}>
        <Icon name="chevron-back-outline"
                type="ionicon"
                onPress={navigation.goBack}
                size={35}
                style={styles.lineLeft}></Icon>
        <Text style={styles.lineCenter}>Hoàn tất đơn hàng</Text>
      </View>
    )
  }
  function footer() {
    let totalPrice = 0;
    tour.forEach((item) => {
      totalPrice += item.Quantity * item.Price;
    });
    useEffect(()=>{
      setTotal(totalPrice)
    })
    return (

      <View
        style={{
          marginTop: 10,
          paddingHorizontal: 20,
        }}>
        <Text style={{fontSize:20,fontWeight:'bold',marginTop:10}}>Thông tin người dùng</Text>
        <CustomInput
          placeholder="Username"
          value={username}
          setvalue={setUsername}
        />
        <CustomInput
          placeholder="Email"
          value={email}
          setvalue={setEmail}
        />
        <CustomInput
          placeholder="NumberPhone"
          value={numP}
          setvalue={setNumP}
          secureTextEntry={true}
        />

        
        <View style={{marginTop: 20, flexDirection: 'row', alignItems: 'center'}}>
          <Text style={[styles.lineLeft, styles.lineTotal]}>Total</Text>
          <Text style={styles.lineRight}>$ {totalPrice}</Text>
          <Button
          title='Thanh Toan'
          onPress={handleCheckOut}
        />
        </View>
      </View>
    )
  }
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>

      <FlatList
        style={styles.productsList}
        contentContainerStyle={styles.productsListContainer}
        
        data={tour}
        renderItem={({ item: product }) => {
          return <CusCheckOut
            info={product} />
        }}
        ListHeaderComponent={header}
        ListFooterComponent={footer}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  productsList: {
    backgroundColor: '#eeeeee',
    marginTop: 20
  },
  productsListContainer: {
    backgroundColor: '#eeeeee',
    paddingVertical: 8,
    marginHorizontal: 8,
  },
  header: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  inputContainer: {
    flex: 1,
    height: 50,
    borderRadius: 10,
    flexDirection: 'row',
    backgroundColor: COLORS.light,
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  lineTotal: {
    fontWeight: 'bold',
    flexDirection: 'row'
  },
  lineLeft: {
    fontSize: 20,
    lineHeight: 40,
    color: '#333333',
    marginLeft: 5
  },
  lineCenter: {
    flex: 1,
    fontSize: 20,
    fontWeight: 'bold',
    lineHeight: 40,
    color: '#333333',
    textAlign: 'center',
    marginRight: 10
  },
  lineRight: {
    flex: 1,
    fontSize: 20,
    fontWeight: 'bold',
    lineHeight: 40,
    color: '#333333',
    textAlign: 'right',
    marginRight: 10
  },
});

export default CheckOutScreen;
