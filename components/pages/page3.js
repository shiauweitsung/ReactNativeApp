import React from 'react'
import { useState, useEffect, useRef } from "react";
import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity } from 'react-native';
//get width
const Page3 = ({ navigation, route }) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={styles.Button}>Home Screen</Text>
            <Button title="goPage" onPress={() => navigation.navigate('PageMain')} />
            <Button title="goPage2" onPress={() => navigation.navigate('Page2')} />
        </View>
    )
}

const styles = StyleSheet.create({
    sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
    },
    sectionDescription: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: '400',
    },
    highlight: {
        fontWeight: '700',
    },
});

export default Page3