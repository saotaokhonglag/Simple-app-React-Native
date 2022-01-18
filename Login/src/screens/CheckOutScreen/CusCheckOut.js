import React from 'react';
import { Text, Image, View, StyleSheet, TouchableOpacity, ScrollView,Button } from 'react-native';
import { useNavigation } from '@react-navigation/native'

export function CusCheckOut({ info }) {
  const navigation = useNavigation();
  const { Name, Price, IDuser, IdCart, Quantity } = info;
  
  return (
    <ScrollView>
      <View style={styles.cartLine}>
        <View style={{ marginLeft: 20 ,marginTop:10}}>
          <Text style={styles.lineLeft}>{info.Name}</Text>
          <Text style={styles.lineLeft}>Số lượng: {info.Quantity}</Text>
          <Text style={styles.lineLeft}>Thành tiền: {info.Quantity * info.Price}</Text>
          <Text style={styles.lineLeft}>Giá: {info.Price}</Text>
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