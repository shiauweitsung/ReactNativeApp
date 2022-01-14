import React from 'react'
import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity, SafeAreaView, ScrollView, Image } from 'react-native';
import { useState, useEffect, useRef } from "react";

import { Dimensions } from 'react-native';

const windowWidth = parseInt(Dimensions.get('window').width);
const windowHeight = Dimensions.get('window').height;
console.log(windowHeight, windowWidth)

async function getData(setLolData) {
  const url = 'http://ddragon.leagueoflegends.com/cdn/11.24.1/data/en_US/champion.json'
  const res = await fetch(url).catch((e) => console.log(e))
  const { data } = await res.json()
  // console.log(arr, 'arr');
  arr = Object.values(data)
  setLolData(arr)
}

const LOL = () => {
  const [data, setLolData] = useState([])
  useEffect(() => {
    getData(setLolData)
  }, [])
  // arr = new Array(data)
  console.log(data)
  return (
    <SafeAreaView style={styles.wrapper}>
      <ScrollView>
        <Image style={styles.banner} resizeMode={'cover'} source={require('../../images/lol_bg.jpeg')} />
      </ScrollView>
      <ScrollView style={styles.container} removeClippedSubviews={true}>
        <View style={styles.view}>
          {data.map((item) => {

            // console.log(item, 'item');
            return (
              <View key={item.key} style={styles.lolItem}>
                <Image style={styles.itemImg} source={{
                  uri: `https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${item.id}_0.jpg`,
                }} resizeMode={'cover'} />
                <Text>{item.name}</Text>

              </View>
            )
          })}
        </View>
      </ScrollView>
      <Text style={{ textAlign: 'right' }}>vji</Text>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  wrapper: {
    // alignItems: 'center',
    // width: windowWidth ,
    flex: 1
  },
  container: {
    padding: 20,
    margin: 'auto',
    borderColor: 'black',
    borderWidth: 1,

  },
  view: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: "wrap",
    justifyContent: "center",
    borderColor: 'red',
    borderWidth: 1,
    paddingLeft: 10,
    paddingRight: 10,
  },
  banner: {
    width: windowWidth,
    height: 200
  },
  lolItem: {
    width: '50%',
    marginBottom: 20,
    padding: 10,
    // borderWidth: 1,
    borderColor: 'black'

  },
  itemImg: {
    width: '100%',
    minHeight: 100,
  },
  box: {
    width: 50,
    height: 50,
    backgroundColor: 'red'
  }
})
export default LOL