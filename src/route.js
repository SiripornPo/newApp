import React from 'react'
import { Text, View } from 'react-native'
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation'
import { HeaderTitle, HeaderBack } from './Components/Header'
import PageHome from './Page/Page-Home';
import PageDetail from './Page/Page-Detail';
import ListMenuAllScene from './Page/Page-ListMenuAll'
import ListMenuDetail from './Page/Page-ListMenuDetail'

const HomeStack = createStackNavigator({
    Main: {
        screen: PageHome,
        navigationOptions: {
            headerTitle: <HeaderTitle title='หน้าหลัก' />
        }
    },
    ListMenuAll: {
        screen: ListMenuAllScene,
        navigationOptions: {
            headerLeft: <HeaderBack />,
            headerRight: <View />,
        }
    },
    ListMenuDetail: {
        screen: ListMenuDetail,
        navigationOptions: {
            headerLeft: <HeaderBack />,
            headerRight: <View />,
        }
    },
})

// ============================================================================

const DetailStack = createStackNavigator({
    Second: {
        screen: PageDetail
    }
})

// ============================================================================

export const MainTab = createBottomTabNavigator({
    Main: {
        screen: HomeStack,
    },
    Second: {
        screen: DetailStack
    }
})