/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
// import 'react-native-gesture-handler';
import React from 'react';
import { useState, useEffect, useRef } from "react";
import type { Node } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
  TouchableOpacity
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Post from './components/Post'
//more stack
import PageMain from './components/pages/pageMain';
import PageTwo from './components/pages/page2';
import Page3 from './components/pages/page3';
import LolScreen from './components/pages/Lol';
//linear gradient
import LinearGradient from 'react-native-linear-gradient';
//icon
import Icon from 'react-native-vector-icons/FontAwesome';

//draw

// import { createDrawerNavigator } from '@react-navigation/drawer';
// navigator 
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();

// const Drawer = createDrawerNavigator();

// function Feed() {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Feed Screen</Text>
//     </View>
//   );
// }

// function Article() {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Article Screen</Text>
//     </View>
//   );
// }

// function MyDrawer() {
//   return (
//     <Drawer.Navigator>
//       <Drawer.Screen name="Feed" component={Feed} />
//       <Drawer.Screen name="Article" component={Article} />
//     </Drawer.Navigator>
//   );
// }

function HomeScreen({ navigation, route }) {
  useEffect(() => {
    if (route.params?.post) {
      // Post updated, do something with `route.params.post`
      // For example, send the post to the server
      console.log(route.params?.post, 'post');
    }
  }, [route.params?.post]);
  function screen(navigation) {
    console.log('123');

    navigation.navigate('Details', {
      itemID: 80,
      otherParam: 'anything',
      txt: 'testtxt'
    })
  }
  function abc(test) {
    // console.log('abc');
    console.log(test);
  }
  function goLolScreen(navigation) {
    navigation.navigate({ name: 'LolPage' })
  }
  return (
    <ScrollView>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={styles.Button}>Home Screen</Text>
        <Icon name={'facebook'} size={24} color={'#999'} />
        <Button
          title="Go to Details"
          onPress={() => navigation.navigate('Details', {
            itemID: Math.floor(Math.random() * 100),
            otherParam: 'anything',
            txt: 'testtxt'
          })}
        />
        <Button title="screen" onPress={() => screen(navigation)}>
        </Button>
        <Button title="abc" onPress={() => abc('123')}>
        </Button>
        <View style={{ margin: 20 }}>
          <Button color="#f194ff" title="go post" onPress={() => navigation.navigate({
            name: 'Post'
          })} />
          <Text style={{ margin: 10 }}>post : {route.params?.post}</Text>
          <Text onPress={() => abc('txt')}>文字function</Text>
        </View>
        <View>
          <Button title="more stack" onPress={() => {
            navigation.navigate('MorePages')
          }} />
        </View>
        <View style={{ margin: 20 }}>
          <TouchableOpacity style={styles.lolBtn} onPress={() => goLolScreen(navigation)}>
            <Text style={styles.lol_txt}>
              Go LOL
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{ marginBottom: 10 }}>
          <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']} style={styles.linearGradient}>
            <Text style={styles.buttonText}>
              Sign in with Facebook
            </Text>
          </LinearGradient>
        </View>
        <LinearGradient
          colors={['#451DFF', '#FF1D7C']}
          start={{ x: 0.0, y: 1.0 }} end={{ x: 1.0, y: 1.0 }}
          style={{ height: 48, width: 200, alignItems: 'center', justifyContent: 'center', width: 200 }}
        >
          <TouchableOpacity style={styles.linearBtn}>
            <Text style={styles.linearTxt}>
              LOGIN
            </Text>
          </TouchableOpacity>
        </LinearGradient>
        <View style={{ marginTop: 30 }}>
          <LinearGradient colors={['#19113E', '#041D75']}
            start={{ x: 0.6, y: 0.4 }} end={{ x: 1.0, y: 1.0 }}
            style={{
              height: 600, width: 200, borderBottomRightRadius: 40, alignItems: 'center',
              justifyContent: 'center'
            }}>
            <TouchableOpacity style={{ width: 100, height: 50, alignItems: 'center' }}>
              <Text style={{ borderColor: 'white', borderWidth: 1, color: 'white', padding: 15, }}>login</Text>
            </TouchableOpacity>
          </LinearGradient>
        </View>
      </View>
    </ScrollView>

  );
}
function DetailsScreen({ route, navigation }) {
  const { itemID, otherParam } = route.params;
  const routeArr = route.params
  console.log({ itemID, otherParam, routeArr });
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <Text>ItemID : {JSON.stringify(routeArr.itemID)}</Text>
      <Text>otherParam : {JSON.stringify(routeArr.otherParam)} </Text>
      <Text>test txt : {routeArr.txt}</Text>
      <Button
        title="Go to Details... again"
        onPress={() => navigation.navigate('Details', {
          itemID: Math.floor(Math.random() * 100),
        })}
      />
      <Button title="回到home" onPress={() => navigation.navigate({
        name: 'Home',

      })} />
    </View>
  );
}

const Section = ({ children, title }): Node => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};
const MoreStackScreen = () => (
  <Stack.Navigator>
    <Stack.Screen options={{
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
      title: '主頁'
    }} name="PageMain" component={PageMain} />
    <Stack.Screen name="Page2" component={PageTwo} />
    <Stack.Screen name="Page3" component={Page3} />
  </Stack.Navigator>
)
const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <NavigationContainer initialRouteName={'Home'}  >
      <Stack.Navigator>
        {/* <Stack.Screen name="Draw" component={MyDrawer} /> */}
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="Post" component={Post} />
        <Stack.Screen name="MorePages" component={MoreStackScreen} options={{ title: '主頁', headerShown: false, }} />
        <Stack.Screen name="LolPage" component={LolScreen} />
      </Stack.Navigator>

    </NavigationContainer>
  );
};

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
  Button: {
    margin: 10,
    padding: 15,
    color: 'red'
  },
  lolBtn: {
    alignItems: "center",
    backgroundColor: "#f08080",
    padding: 10,

  },
  lol_txt: {
    color: 'white'
  },
  linearGradient: {
    // flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
  linearBtn: {
    width: 200,
    alignItems: 'center',
    flex: 1,
  },
  linearTxt: {
    textAlign: 'center',
    color: 'red',
    padding: 15,
    marginLeft: 1,
    marginRight: 1,
    margin: 1,
    width: 198,
    backgroundColor: 'transparent'
  },
});

export default App;
