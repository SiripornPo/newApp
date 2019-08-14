import React, { Component } from 'react'
import { Text, View, StyleSheet, FlatList } from 'react-native'
import { menu, listMenu } from '../Components/resource/constant';
import { RenderListMenu } from '../Components/FlatList'
import { normalize } from '../Components/functions/normalize';
import { HeaderSubTitle, HeaderBack } from '../Components/Header'
import { Search } from '../Components/Other'

export default class PageListMenuAll extends Component {
    static navigationOptions = ({ navigation }) => {
        let { params } = navigation.state;
        return {
            headerTitle: <HeaderSubTitle title={`เมนู ${menu[params.id].name || ''}`} />,
            headerRight: <View />
        }
    }

    constructor(props) {
        super(props);
        let { params } = this.props.navigation.state;
        this.state = {
            listMenu: listMenu[params.id].listType
        }
    }

    onChangeText = (text) => {
        let { params } = this.props.navigation.state;
        let listfilterMenu = [];
        if (text) {
            listfilterMenu = this.state.listMenu.filter(el => el.menu_name.includes(text));
        } else {
            listfilterMenu = listMenu[params.id].listType
        }
        this.setState({ listMenu: listfilterMenu })
    }

    render() {
        let { listMenu } = this.state
        let { params } = this.props.navigation.state;
        return (

            <View style={{ flex: 1, backgroundColor: 'white' }}>
                <Search onChangeText={this.onChangeText} />
                <FlatList
                    data={listMenu}
                    keyExtractor={item => item.menu_id + ''}
                    style={{ marginBottom: normalize(10) }}
                    renderItem={({ item, index }) => <RenderListMenu
                        item={item}
                        index={index}
                        type={listMenu[params.id].menu}
                        navigation={this.props.navigation} />}
                />
            </View>
        )
    }
}

// ======================================================================================================================================================
// ======================================================================================================================================================

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
})