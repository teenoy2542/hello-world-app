import React,{useState} from 'react';
import { StyleSheet, Text, View ,Image, TextInput, Button} from 'react-native';
import Mybutton from "./componensts/Mybutton"
export default function App() {
  const[input,setInput] = useState("")
  const[color,setColor] = useState('red')
  return (
    <View style={styles.container}>
      <Image source={{uri:"https://scontent.fbkk8-2.fna.fbcdn.net/v/t1.0-9/28660618_396856104059867_8851833168206670109_n.jpg?_nc_cat=107&_nc_sid=0debeb&_nc_eui2=AeHtiNIe0pIHTP7Vyy1nz7MeG1BC98Lyy7YbUEL3wvLLtkWiVilZf-AT8NZkf_gygDc0Yt_CUFU2HM-mUEwYUL5L&_nc_ohc=UxbqiPSevcYAX8r0amW&_nc_ht=scontent.fbkk8-2.fna&oh=99ec074265c454d3ff782b5b2e4ba117&oe=5F89A79B"}} style={styles.logo}></Image>
      <Text style={styles.title}>Hello world</Text>     
      <TextInput value={input} onChangeText={(text)=> {setInput(text)}} placeholder="I was an imposter" style={styles.input}></TextInput>
      <Text style={{fontSize:18, marginTop:20, color:color}}>{input}</Text>
      <View style={styles.buttonLayout}>
        <Mybutton title="red" color="red" onChangeColor={(color) => {setColor(color)}} />
        <Mybutton title="blue" color="blue" onChangeColor={(color) => {setColor(color)}} />
        <Mybutton title="green" color="green" onChangeColor={(color) => {setColor(color)}} />
      </View> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding:30,
  },
  logo:{
    width: 500,
    height:500,
  },
  title:{
    fontSize:24,
    fontWeight:"bold",
    marginTop:20,
  },
  input:{
    width:40,
    borderColor:"gray",
    borderStyle:"solid",
    borderWidth:1,
    width:"100%",
    marginTop:20,
    borderRadius:5,
    textAlign:"center"
  },
  buttonLayout:{
    flexDirection:"row",
    margin:20,
    width:"20%",
    justifyContent:"space-between"
  }
});
