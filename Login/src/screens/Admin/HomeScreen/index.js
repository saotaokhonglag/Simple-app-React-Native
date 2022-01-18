import React, { useRef, useState } from 'react'
import { View, Text, StyleSheet, StatusBar, Dimensions, Image, SafeAreaView, Animated, TouchableOpacity, Button} from 'react-native'
import { useNavigation } from '@react-navigation/native'


import profile from '../../../../assets/Logo_1.png'
import tour from '../../../../assets/images/Tour.jpg'
import DH from '../../../../assets/images/DonHang.jpg'
import Cus from '../../../../assets/images/Cus.jpg'
import Voucher from '../../../../assets/images/VC.jpg'
import home from '../../../../assets/images/Home.jpg'
import { useAuth } from '../../../../firebase'
import { logout } from '../../../../firebase'
const Mana = [
    {
        id: 1,
        image: require('../../../../assets/images/Tour.jpg'),
        title: 'Quản lý Tour'
    },
    {
        id: 2,
        image: require('../../../../assets/images/VC.jpg'),
        title: 'Quản lý Voucher'
    },
    {
        id: 3,
        image: require('../../../../assets/images/DonHang.jpg'),
        title: 'Quản lý đơn hàng'
    },
    {
        id: 4,
        image: require('../../../../assets/images/Cus.jpg'),
        title: 'Quản lý Khách hàng'
    }

]
const Home = () => {


    const [currentTab, setCurrentTab] = useState("Home");
    // To get the curretn Status of menu ...
    const [showMenu, setShowMenu] = useState(false);

    // Animated Properties...
    const navigation = useNavigation();
    const offsetValue = useRef(new Animated.Value(0)).current;
    // Scale Intially must be One...
    const scaleValue = useRef(new Animated.Value(1)).current;
    const closeButtonOffset = useRef(new Animated.Value(0)).current;
    async function handleLogout() {
        try {
            await logout();
            navigation.navigate('SignInScreen')
        } catch (e){
            alert(e);
        }

    }
    return (

        <SafeAreaView style={styles.containerSafe}>
           <View style={{ justifyContent: 'flex-start', padding: 20 }}>
                <StatusBar />
                <Image source={profile}
                    style={{ width: 60, height: 60, borderRadius: 10, marginTop: 8 }}
                />
                <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'black', marginTop: 20 }}>Admin</Text>


                <View style={{ flexGrow: 1, marginTop: 50 }}>
                    {
                        //Tab Button
                    }
                    {TabButton(currentTab, setCurrentTab, 'Home', home)}
                    {TabButton(currentTab, setCurrentTab, 'Acc', tour)}
                    {TabButton(currentTab, setCurrentTab, 'Order', DH)}
                    {TabButton(currentTab, setCurrentTab, 'AddVoucher', Voucher)}
                    {TabButton(currentTab, setCurrentTab, 'Customer', Cus)}
                </View>

                <View>
                    <Button
                    title = 'Logout'
                    onPress={handleLogout}/>
                </View>
            </View>

        </SafeAreaView>

    )
}

const TabButton = (currentTab, setCurrentTab, title, image) => {
    const navigation = useNavigation();
    return (
        <TouchableOpacity
            onPress={() => {
                navigation.navigate(title)
            }}
        >
            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 10,
                paddingVertical: 8,
                paddingLeft: 5,
                padding: 30,
                borderRadius: 8,
                backgroundColor: 'white'

            }}>
                <Image source={image}
                    style={{ height: 25, width: 25 }}
                />

                <Text
                    style={{ fontWeight: 'bold', fontSize: 15, color: 'black', paddingLeft: 10 }}
                >{title}</Text>
            </View>
        </TouchableOpacity>
    )
}


const deviceWith = Math.round(Dimensions.get('window').width);
const styles = StyleSheet.create({
    container: {
        flex: 1,
        fontSize: 24,
        alignSelf: 'center',
        alignItems: 'center',
        backgroundColor: `#ffffff`,
        width: deviceWith - 25
    },
    textTitle: {
        alignItems: 'center',
        alignSelf: 'center',
        fontSize: 20,
        fontWeight: 'bold'

    },
    containerSafe: {
        flex: 1,
        backgroundColor: '#FFE4B5',
        alignItems: 'flex-start',
        justifyContent: 'flex-start'
    }

})

export default Home
