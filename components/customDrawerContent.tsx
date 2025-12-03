import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'
import React from 'react'
import { StyleSheet, View } from 'react-native'

export default function CustomDrawerContent (props: any) {
    return(
        <View style={styles.body}>
            <DrawerContentScrollView {...props}>
                <DrawerItemList {...props} />
            </DrawerContentScrollView>
        </View>
    )
}

const styles=StyleSheet.create({
    body: {
        flex: 1
    }
})