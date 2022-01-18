import React, { useState } from 'react'
import { View, Text, Button } from 'react-native'
import { getTour, database } from '../../../firebase'
import {collection, getDocs} from 'firebase/firestore'

const GetAllVoucher =  () => {
const [tour, settour] = useState([])

async function getAllData() {
    const query = await getDocs(collection(database, "SessionCart"));
    let vouchers = [];
    query.forEach(doc=>{
        vouchers.push(doc.data());
        
    })
    settour(vouchers)
    console.log(vouchers);
}
    
    return (
        <View>
            <Text>Get all voucher screen!</Text>
            <Button
            title='Get Voucher'
            onPress={getAllData}
            />
        </View>
    )
}

export default GetAllVoucher
