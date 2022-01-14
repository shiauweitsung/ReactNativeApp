import React from 'react'
import { useState, useEffect, useRef } from "react";
import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity } from 'react-native';
//get width
import { Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const Post = ({ navigation, route }) => {
    const [postText, setPostTxt] = useState('')
    const onChange = (evt) => {
        setPostTxt(evt.nativeEvent.text)
        console.log(evt.nativeEvent)
    }

    return (
        <View style={styles.wrapper}>
            <TextInput style={styles.input} placeholder="What's on your mind?" value={postText} onChange={(evt) => setPostTxt(evt.nativeEvent.text)} />
            <TouchableOpacity style={styles.Button}>
                <Text style={styles.ButtonTxt} onPress={() => {
                    // Pass and merge params back to home screen
                    navigation.navigate({
                        name: 'Home',
                        params: { post: postText },
                        merge: true,
                    });
                }}
                >Done</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    input: {
        marginTop: 20,
        borderColor: 'black',
        padding: 15,
        backgroundColor: 'white',
        height: 200,
        width: windowWidth * 0.8,
        textAlignVertical: 'top'
    },
    Button: {
        alignItems: "center",
        backgroundColor: "#DDDDDD",
        padding: 10,
        marginTop: 10,
    },
    ButtonTxt: {
        color: 'blue'
    }
})
export default Post