import React, { Component } from 'react'
import { Text, Platform, StatusBar, View, TouchableOpacity, Image, StyleSheet } from 'react-native'
import { withNavigation } from 'react-navigation'
import { normalize, height, width } from './functions/normalize';
import { color, icon } from '../../asset'
import styled from './styles/styled'
import font from '../../asset/font';

export const HeaderBack = withNavigation(({ navigation }) => {
    return <TouchableOpacity onPress={() => navigation.goBack(null)} style={{ flexDirection: 'row' }}>
        <Image source={icon.back} style={styles.headerBack} resizeMode={'contain'} />
    </TouchableOpacity>
})

// ----------------------------------------------------------------------------------------------------------------------------------------------------

export const HeaderTitle = ({ title }) => {
    return (
        <View style={styles.headerWrapper}>
            <Text adjustsFontSizeToFit style={styles.headerText} numberOfLines={2} >{title}</Text>
        </View>
    )
}

// ----------------------------------------------------------------------------------------------------------------------------------------------------

export const HeaderSubTitle = ({ title }) => {
    return (
        <View style={styles.headerSubWrapper}>
            <Text adjustsFontSizeToFit style={styles.headerSubText} numberOfLines={2} >{title}</Text>
        </View>
    )
}

// ----------------------------------------------------------------------------------------------------------------------------------------------------

export function paddingStatus() {
    return Platform.OS === 'ios' ? { height: (height > 812 || width > 812) ? normalize(60) : normalize(50) } :
        Platform.Version >= 20 ?
            { height: StatusBar.currentHeight + normalize(55), borderTopColor: color.tab, borderTopWidth: normalize(20) } : null
}

// ======================================================================================================================================================
// ======================================================================================================================================================

const styles = StyleSheet.create({
    headerWrapper: {
        flex: 1,
        backgroundColor: color.tab,
        shadowColor: 'transparent',
        shadowRadius: 0,
        shadowOffset: {
            height: 0,
        },
        borderColor: 'transparent',
        borderWidth: 0,
        elevation: 0,
        paddingVertical: normalize(8),
        ...paddingStatus()
    },
    headerSubWrapper: {
        flex: 1,
    },
    headerText: {
        textAlign: 'center',
        alignSelf: 'center',
        fontSize: normalize(26),
        color: color.textW,
        width: '100%',
        fontFamily: font.regular
    },
    headerSubText: {
        textAlign: 'center',
        alignSelf: 'center',
        fontSize: normalize(26),
        color: color.text,
        width: '100%',
        fontFamily: font.regular
    },
    headerBack: {
        textAlign: 'left',
        alignSelf: 'center',
        fontSize: normalize(24),
        tintColor: color.text,
        color: color.text,
        fontFamily: font.regular,
        marginLeft: 10,
    }
})