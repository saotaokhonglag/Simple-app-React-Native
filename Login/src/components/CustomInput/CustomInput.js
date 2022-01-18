import React from 'react'
import { View, Text, TextInput, StyleSheet, Platform } from 'react-native'

const CustomInput = ({value, setvalue, placeholder, secureTextEntry, multiline, keyboardType, maxLength}) => {
    return (
        <View style={styles.container}>
            <TextInput
            value={value}
            onChangeText={setvalue} 
            placeholder = {placeholder}
            style={styles.input}
            secureTextEntry={secureTextEntry}
            multiline = {multiline}
            keyboardType={keyboardType}
            maxLength={maxLength}
            />
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        ...Platform.select({
            native:{
                backgroundColor: 'white',
                width: '100%',
                borderColor: '#e8e8e8',
                borderWidth: 1,
                borderRadius: 5,
                paddingHorizontal: 10,
                marginVertical: 5,
            },
            default: {
                backgroundColor: 'white',
                width: '70%',
                borderColor: '#e8e8e8',
                borderWidth: 1,
                borderRadius: 5,
                paddingHorizontal: 10,
                marginVertical: 5,
            }
          })
       
    },
    input: {},
})

export default CustomInput
