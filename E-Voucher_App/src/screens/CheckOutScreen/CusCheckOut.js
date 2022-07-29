import React from 'react';
import { Text, Image, View, StyleSheet, TouchableOpacity, ScrollView,Button } from 'react-native';
import { useNavigation } from '@react-navigation/native'

export function CusCheckOut({ info }) {
  const navigation = useNavigation();
  const {TenVoucher, Gia, id_KhachHang, SoLuong ,id } = info;
  
  return (
    <ScrollView>
      <View style={styles.cartLine}>
        <View style={{ marginLeft: 20 ,marginTop:10}}>
          <Text style={styles.lineLeft}>{info.TenVoucher}</Text>
          <Text style={styles.lineLeft}>Số lượng: {info.SoLuong}</Text>
          <Text style={styles.lineLeft}>Thành tiền: {info.SoLuong * info.Gia}</Text>
          <Text style={styles.lineLeft}>Giá: {info.Gia}</Text>
          <View style={{flex: 1, height: 1, backgroundColor: 'black',width:'100%'}} />
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
    marginLeft: 5
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
});