import React from 'react';
import { Text, Image, View, StyleSheet, TouchableOpacity, ScrollView} from 'react-native';
import { useNavigation } from '@react-navigation/native'
import { Button } from 'react-native-elements';
import { getDoc,deleteDoc,doc } from 'firebase/firestore';
import { database } from '../../../firebase-config';

export function CusCart({ info }) {
  const navigation = useNavigation();
  const { TenVoucher, Gia, id_KhachHang, SoLuong ,id} = info;

 async function handleDelete (){
    await deleteDoc(doc(database, "GioHang",info.id));
    alert('Xoa thanh cong')
  }
  return (
    <ScrollView>
      <View style={styles.cartLine}>
        <Image style={styles.imageStyle} source={require('../../../assets/images/DaNang.jpg')} />
        <View style={{ marginLeft: 20 ,marginTop:10}}>
         
          <Text style={styles.lineLeft}>{info.TenVoucher}</Text>
          <Text style={styles.lineLeft}>Số lượng: {info.SoLuong}</Text>
          <Text style={styles.lineLeft}>Thành tiền: {info.SoLuong * info.Gia}</Text>
          <Text style={styles.lineLeft}>Giá: {info.Gia}</Text>
          <View style={{ flexDirection: 'row', alignItems: 'center', alignSelf: 'flex-start' }}>
            {/* <Text onPress={navigation.navigate('EditCart',{
              info:info
              // IDuser:info.IDuser,
              // IdCart:info.IdCart,
              // Price:info.Price,
              // Quantity:info.Quantity
            })}>Chỉnh sửa</Text> */}
            <Button title='Chỉnh sửa'
            onPress={()=>{
              navigation.navigate('EditCart',{
              IDuser:info.id_KhachHang,
              Name:info.TenVoucher,

              Price:info.Gia,
              Quantity:info.SoLuong,
              ID:info.id
              })
            }}
            />
            <Button
            title='Xóa'
            onPress={handleDelete}
            />
          </View>
        </View>
      </View>
    </ScrollView>
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
    color: '#333333',
    marginLeft: 5,
    fontWeight:'800'
  },
  lineRight: {
    flex: 1,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333333',
    textAlign: 'right',
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