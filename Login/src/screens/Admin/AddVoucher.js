import React, { useState, useRef, useEffect } from 'react'
import { View, Text, KeyboardAvoidingView, ScrollView, Image, TouchableOpacity, Button, StyleSheet } from 'react-native'
import { COLORS } from '../../constants/theme'
import CustomInput from '../../components/CustomInput'
import { database } from '../../../firebase'
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import CustomButton from '../../components/CustomButton';
import * as ImagePicker from 'expo-image-picker';
import { Icon } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native'
const AddVoucher = ({ route }) => {
    const navigation = useNavigation()
    const [curentVoucherTitle, setcurentVoucherTitle] = useState('')

    const [price, setprice] = useState('')
    const [status, setstatus] = useState('')
    const [description, setdescription] = useState('')
    const db = getFirestore();
    const storage = getStorage();

    const [progress, setProgress] = useState(0);

    const [textadd, settextadd] = useState('+add image')

    let [selectedImage, setSelectedImage] = useState(null);

    /* Pick image */
    const pickImage = async () => {

        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: false
        })
        if (!result.cancelled) {
            setSelectedImage(result.uri)
            settextadd('');
        }
    }

    const handleAddVoucher = async () => {
        /* Upload Image */
        let imgUrl = '';
        const metadata = {
            contentType: 'image/png',
        };
        try {
            const docRef = addDoc(collection(db, "vouchers"), {
                Ten: curentVoucherTitle,
                Gia: price,
                Soluong: status,
                mota: description,
                imgUrl: imgUrl
            });
            alert("Đã thêm Voucher");
            setcurentVoucherTitle('')
            setprice('')
            setstatus('')
            setdescription('')
        } catch (e) {
            alert('Lỗi: ' + e)
        }
    }
    return (
        <KeyboardAvoidingView style={{
            flex: 1,

        }}>
            <ScrollView style={{
                flex: 1,
                backgroundColor: COLORS.white,
                width: '100%',
                marginTop: 30
            }}>

                <View style={{ padding: 20 }}>
                    <View style={styles.icon}>
                        <Icon name="chevron-back-outline"
                            type="ionicon"
                            size={30}

                            onPress={navigation.goBack}
                        />
                    </View>
                    <Text style={{ fontSize: 20, textAlign: 'center', color: COLORS.black }}>
                        Add Voucher
                    </Text>
                    <CustomInput
                        placeholder="Tên Voucher"
                        value={curentVoucherTitle}
                        setvalue={setcurentVoucherTitle} />

                    <TouchableOpacity
                        style={{
                            alignItems: 'center',
                            justifyContent: 'center',
                            padding: 28,
                            backgroundColor: COLORS.primary + '20',
                        }}
                        onPress={pickImage}>
                        <Text style={{ textAlign: 'center', opacity: 0.5, color: COLORS.primary }}>
                            {textadd}
                        </Text>
                        <Image
                            resizeMode={'contain'}
                            style={{
                                width: '100%',
                                height: 150,
                                borderRadius: 5,
                                flex: 1,
                                justifyContent: 'center',
                            }}
                            source={{ uri: selectedImage }}>

                        </Image>
                    </TouchableOpacity>

                    <CustomInput
                        placeholder="Giá"
                        value={price}
                        keyboardType='numeric'
                        setvalue={setprice}
                        maxLength={9}
                    />

                    <CustomInput
                        placeholder="Số lượng"
                        value={status}
                        setvalue={setstatus}
                        keyboardType='numeric'
                        maxLength={3} />

                    <CustomInput
                        placeholder="Mô tả"
                        value={description}
                        setvalue={setdescription}
                        multiline={true} />


                    <CustomButton
                        text="Add Voucher"
                        onPress={handleAddVoucher}
                        type="PRIMARY"
                    />

                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}
const styles = StyleSheet.create({
    icon: {
        alignItems: 'flex-start',
        alignSelf: 'flex-start',
        marginTop: 10,
    }
})
export default AddVoucher