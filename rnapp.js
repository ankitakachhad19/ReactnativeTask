import React, {useState} from 'react';

import { StyleSheet, View,TextInput,Text,TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

function LoginScreen({navigation}) {
  return (
    <View style={styles.container}>
      
    

      <Text style={{ fontWeight: 'bold', marginTop: 10,marginBottom:20, color: 'black', fontSize: 40, }}>Sign In</Text>
      <Text style={styles.text3}>Login</Text>
    

      <TextInput placeholder="Email" style={styles.input} />
      <TextInput placeholder="Password" secureTextEntry style={styles.input} />

      <Text style={{ fontSize: 15, marginLeft: 150, fontStyle: 'normal', }}>Forgot Password?</Text>
      <TouchableOpacity
   
        
      
      style={styles.button}>
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>
      <TouchableOpacity
       onPress={() =>
        navigation.navigate('Registretion')
      }
      
      style={styles.button}>
        <Text style={styles.buttonText}> Sign up</Text>
      </TouchableOpacity>

     
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  input: {
    width: '80%',
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    marginBottom: 10,
    paddingHorizontal: 10,
    marginTop:10,
  },
  button: {
    marginTop:20,
    backgroundColor: 'black',
    width: '80%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  text3:{
    fontSize:40,
    fontWeight:'bold',
    

  },
 
});

function  Registretion ({navigation}){
  return(
    <View style ={xyz.regis}>


      <Text style={{fontSize:40,fontWeight:"bold",}}>Sign Up!</Text>
      <TextInput placeholder='Enter First Name' style={xyz.txt}/>
      <TextInput placeholder='Enter Last Name' style={xyz.txt}/>
      <TextInput placeholder='Enter Email' style={xyz.txt}/>
      <TextInput placeholder='Enter password' style={xyz.txt}/>
      <TextInput placeholder='Enter Mobile No' style={xyz.txt}/>
      <TouchableOpacity 
      onPress={() =>
        navigation.navigate('Login')
      }
      style={styles.button}
       
      
      
      >
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
      
      

      <Text style={{marginTop:15}}>Already have an account?Sign In</Text>
    </View>
  )
}
const  xyz = StyleSheet.create({
  regis:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    
    
  },
  txt:{
    width: '80%',
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    marginBottom: 10,
    paddingHorizontal: 10,
    marginTop:10,
  }
});




const stakdata=createStackNavigator();
function Navdata(){
 
  return(
    <stakdata.Navigator>
      <stakdata.Screen
      name="Login"
      component={LoginScreen}
      options={{
        headerShown:false
      }}/>
          <stakdata.Screen
      name="Registretion"
      component={Registretion}
      options={{
        headerShown:false
      }}></stakdata.Screen>



    </stakdata.Navigator>
    
  )
}
const stacknavigationdata=()=>{
  return(
    <NavigationContainer>
      <Navdata/>
    </NavigationContainer>
  )
}
const DemoApi=()=>{

  const [data,setdata]=useState([]);
  const getdata= async()=>{
   const url="https://reqres.in/api/users?page=2";
 let result=await fetch(url);
 result=await result.json();
 setdata(result);
 
  }
 
  useEffect(()=>{
 
      getdata();
  },[]);
 
 
 return(
   <ScrollView>
 
     {data.length?
     data.map((item)=>
     <View>
       <Text>id:{item.id}</Text>
       <Text>id:{item.email}</Text>
   <Image source={{uri: `${item.avatar}`}}  style={{width:100,height:100}}></Image>
 
     </View>
     
     
     
     
     
     )
     :null
   
   }
  
   </ScrollView>
 )
 }
  









export default DemoApi;