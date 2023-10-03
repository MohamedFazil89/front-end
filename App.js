import React from 'react';
import { StyleSheet, Text, View, ImageBackground, TextInput, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useState } from 'react';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';




export default function Login() {
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [conform, setConform] = useState();
  const [color, setColor] = useState('white');


  const colors = "#ECD5B6";
  const colors2 = "#F8A5FF";
  const color3 = "#FF6AA8";

  const handleColor = () => {
    setColor(colors);    
  }

  const handleColor1 = () =>{
    setColor(colors2);
  }

  const handleColor2 = () =>{
    setColor(color3);
  }
  

  const handelname = (text) => {
    setUsername(text);
  }

  const handelEmailChange = (text) => {
    setEmail(text)
  }

  const handelpasswordChange = (text) => {
    setPassword(text)
  }

  const handelConformChange = (text) => {
    setConform(text)
  }


  return (
    <ImageBackground
      source={require('./assets/background image.png')}
      resizeMode="cover"
      style={{ flex: 1 }}
    >
      <View style={{flexDirection:"row", marginLeft:1100}}>
        <Text  onPress={handleColor} style={{borderWidth:20, borderColor:colors, borderRadius:100,marginLeft:5}}></Text>
        <Text  onPress={handleColor1} style={{borderWidth:20, borderColor:colors2, borderRadius:100,marginLeft:5}}></Text>
        <Text  onPress={handleColor2} style={{borderWidth:20, borderColor:color3, borderRadius:100,marginLeft:5}}></Text>


      </View>
      <View style={styles.box}>
        <Text style={{ fontSize: 35, color: color, marginLeft: 50 }}>Create a New Account</Text>
        <View style={{ flexDirection: "row" }}>
          <Icon name='user' size={20} color={blur} style={{ marginTop: 30, marginLeft: 30, color: color, marginRight: 20 }} />
          <TextInput
            style={styles.input}
            placeholder='Username'
            placeholderTextColor={"#737373"}
            value={username}
            onChangeText={handelname}
          />
        </View>

        <View style={{ flexDirection: "row" }}>
          <Icon name='envelope' size={20} color={blur} style={{ marginTop: 30, marginLeft: 30, color: color, marginRight: 20 }} />
          <TextInput
            style={styles.input}
            placeholder='Email ID'
            placeholderTextColor={"#737373"}
            value={email}
            onChangeText={handelEmailChange}
          />
        </View>

        <View style={{ flexDirection: "row" }}>
          <Icon name='lock' size={20} color={blur} style={{ marginTop: 30, marginLeft: 30, color: color, marginRight: 20 }} />
          <TextInput
            style={styles.input}
            placeholder='Password'
            placeholderTextColor={"#737373"}
            value={password}
            onChangeText={handelpasswordChange}
          />
        </View>

        <View style={{ flexDirection: "row" }}>
          <MaterialIcon name="lock" size={20} color={blur} style={{ marginTop: 30, marginLeft: 30, color: color, marginRight: 20 }} />
          <TextInput
            style={styles.input}
            placeholder='conform password'
            placeholderTextColor={"#737373"}
            value={conform}
            onChangeText={handelConformChange}
          />
        </View>
        <View>
       <Pressable style={styles.click}>
          <Text style={{ color: "white", padding: 10, marginLeft: 90 }}>Sign up</Text>
        </Pressable>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  box: {
    width: 290,
    height: 400,
    borderWidth: 1,
    borderColor: 'pink',
    marginLeft: 450,
    backgroundColor: "black"
    // Additional styling for your login box goes here
  },

  input: {
    height: 20,
    borderBottomWidth: 1, // Add an underline
    borderColor: 'white', // Underline color
    fontSize: 16,
    paddingVertical: 10,
    marginTop: 25,
    padding: 10,
    color: "white"
  },


  click: {
    width: 250,
    height: 40,
    borderWidth: 1,
    backgroundColor: "black",
    borderColor: "white",
    marginLeft: 20,
    color: "white",
    marginTop: 30
  }
});
