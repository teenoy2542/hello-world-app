import React,{useState} from 'react';
import { StyleSheet, Text, View ,Image, TextInput, Button} from 'react-native';
import Mybutton from "./componensts/Mybutton"
export default function App() {
  const[input,setInput] = useState("")
  const[color,setColor] = useState('red')
  return (
    <View style={styles.container}>
      <Image source={{uri:"https://scontent.fbkk12-2.fna.fbcdn.net/v/t1.0-9/13312795_591402087690172_4916392724253520910_n.jpg?_nc_cat=104&_nc_sid=8bfeb9&_nc_eui2=AeGqCptfdQDYnqqKSeJSkNmLPiv9QdbujIc-K_1B1u6Mh0uu-gpSjCdpqgIkBMqlMpwbmabOi-qvvG3Ck5a92Lbh&_nc_ohc=yk9YVcW3W0gAX-TxqSL&_nc_ht=scontent.fbkk12-2.fna&oh=a4d1e1e7b09a287d8ef64ee19c42ea4a&oe=5F89776B"}} style={styles.logo}></Image>
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
