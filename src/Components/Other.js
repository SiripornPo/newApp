import React from 'react';
import { Text, TextInput, View, Image, StyleSheet, StatusBar, TouchableOpacity, Platform } from 'react-native'
import { normalize, height, width } from './functions/normalize';
import { color, icon, font } from '../../asset'

export const Search = ({ onChangeText = (text) => { } }) => {
    return <View style={[styles.containerSearch]}>
        {/* <Image source={icon.search} style={{ width: normalize(20), height: normalize(20), tintColor: 'white' }} resizeMode={'contain'} /> */}
        <TextInput
            placeholder={'ค้นหา'}
            onChangeText={onChangeText}
            style={styles.input}
        />
    </View>
}

// ======================================================================================================================================================
// ======================================================================================================================================================

const styles = StyleSheet.create({
    containerSearch:{
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: normalize(6),
        paddingHorizontal: normalize(16),
        backgroundColor: '#f6b436',
        width: width * 0.95,
        alignSelf: 'center',
        borderRadius: normalize(20),
        marginVertical: normalize(10)
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    input:{
        padding: 0,
        margin: 0,
        fontFamily: font.regular,
        fontSize: normalize(16),
        width: '100%',
        marginLeft: normalize(10),
        color: 'white'
    }
})