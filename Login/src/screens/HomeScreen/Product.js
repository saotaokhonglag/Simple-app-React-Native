import React from 'react';
import { Text, Image, View, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native'
export function Product(info) {
  const navigation = useNavigation();
  const { Ten, image, location, Gia, mota } = info;
  return (
    <TouchableOpacity onPress={() => {
      navigation.navigate("DetailsScreen",
        {
            name: info.Ten,
            price:info.Gia,
            qty:0,
            location:info.location,
            description:info.mota
        });
    }}>
      <ScrollView>
        <View style={styles.card}>
          <Image style={styles.thumb} source={require('../../../assets/images/DaNang.jpg')} />
          <Text style={{ marginLeft: 10,fontWeight:'bold',fontSize:16 }}>{info.Ten}</Text>
          <Text style={styles.price}>Giá: {info.Gia} VND</Text>

        </View>
      </ScrollView>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 16,
    shadowOpacity: 0.2,
    shadowRadius: 4,
    shadowColor: 'black',
    shadowOffset: {
      height: 0,
      width: 0,
    },
    elevation: 1,
    marginVertical: 20,

  },
  thumb: {
    height: 100,
    width:'100%',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,

  },
  infoContainer: {
    padding: 16,
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
    marginLeft:8
  },
});
