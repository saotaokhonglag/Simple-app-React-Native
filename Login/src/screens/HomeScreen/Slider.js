import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { View, Image, StyleSheet,Text} from 'react-native'
import Swiper from 'react-native-swiper'

// const deviceWith = Math.round(Dimensions.get('window').width);

// const images = [
//     'https://kinhnghiemdulichdn.com/wp-content/uploads/2020/02/anh1-min.jpg',
//     'http://baohagiang.vn/dataimages/202102/original/images1480261_5_trai_nghiem_dang_nho_khi_check_in_Ha_Giang_4.jpg',
//     'https://static.mservice.io/blogscontents/momo-upload-api-200622162900-637284401409338837.jpg'
// ]
export default function ({ }) {
    return (

        <View style={styles.container}>

            <Text style={styles.styleText}>Khuyến mãi hiện có</Text>
            <Swiper
                loop
                autoplay
            >
                
                <Image source={require('./../../../assets/images/dis.png')}
                    resizeMode='cover'
                    style={styles.styleImage} />
                <Image source={require('./../../../assets/images/discount.png')}
                    resizeMode='cover'
                    style={styles.styleImage} />
            </Swiper>



        </View>

    )
}
const styles = StyleSheet.create({
    container: {

        backgroundColor: 'white',
        height: 210,
        borderBottomLeftRadius:10,
        borderBottomRightRadius:10,
        borderTopLeftRadius:10,
        borderTopRightRadius:10
    },
    styleImage: {

        alignItems:'baseline',
        alignSelf:'center',
        width: '100%',
        height: 180,
        borderBottomLeftRadius:10,
        borderBottomRightRadius:10,
        borderTopLeftRadius:10,
        borderTopRightRadius:10
    },
    styleText: {
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 10

    },

})

