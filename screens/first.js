import React from "react";
import { ScrollView, Text, TextInput, Image, View, TouchableOpacity, StatusBar } from 'react-native';

import bag from '../assets/assets/sac.png'

const first = ({navigation}) => {
    return(
        <View style={{backgroundColor:'##d0fcf2'}}>

      <View style={{}}>
      
      <Image source={bag}
                    style={{
                      width: 400, height: 400,
                    }}
                  />
      </View>


      <View style={{display:'flex',justifyContent:'center',padding:35,alignItems:'center',width:360,height:350,backgroundColor:'#fff',borderRadius:40,}}>
      <View style={{display:'flex',justifyContent:'center',alignItems:'center',backgroundColor:'#fff',}}>
      <Text style={{ fontWeight: 'bold', fontSize: 30,marginBottom:40,paddingHorizontal:20 }}>Order Groceries and Get delivered in few minutes</Text>
      </View>
        <View style={{
          width: 180, height: 55, borderWidth: 1,
          borderColor: '#5dd4b9', justifyContent: 'center', alignItems: 'center', borderRadius: 20
        }}>
          <View>
          <TouchableOpacity onPress={() => navigation.navigate('second')}>
            <Text style={{
              fontWeight: 'bold', color: '#5dd4b9',
              
            }}>Get Started</Text></TouchableOpacity>

          </View>
        </View>

      </View>


      <StatusBar style="auto" />
    </View>
    )
};
{/* <TouchableOpacity onPress={() => navigation.navigate('second')}>Get Started</TouchableOpacity> */}
export default first;