import React from "react";
import { View, ScrollView, Image, Text, StyleSheet } from "react-native";

import fruit from '../assets/fruit_apple.png';

const third = ({navigation}) => {
    return(
        <ScrollView>
        <View>
            <View style={{height:200,width:300, marginTop:'5em', marginLeft:'2em', backgroundColor:'#d1e4de'}}>
                <Image source={fruit} style={{height:100,width:100, marginTop:'4em', marginLeft:'5.5em'}}/>
            </View>
        </View>
        <View style={{backgroundColor:'none', borderRadius:8, borderColor:'green', marginTop:15, marginLeft:30, borderWidth:2, width:100}}>
          <Text style={{color:'green', fontFamily:'Romain',fontWeight:'bold', left:10}}>Vegetables</Text>
        </View>
        <View>
            <Text style={{fontSize:15, fontWeight:'bold',left:33}}>Broccoli</Text>
            <Text style={{fontWeight:'bold', left:33, fontSize:10, color:'#a3a3ac'}}>approx 100 gm</Text>
        </View>
        <View style={{left:'22em', top:'-2em', display:'flex',flexDirection:'row'}}>
          <Text style={{right:'1em', color:'green', fontWeight:'bold', borderColor:'green', borderWidth:2, borderRadius:10 , width:20,height:20,justifyContent:'center', alignContent:'center', display:'flex',}}>-</Text><Text style={{fontWeight:'bold',right:10}}>1</Text><Text style={{left:-5, color:'green', fontWeight:'bold', borderColor:'green', borderWidth:2, borderRadius:30, width:20,height:20,justifyContent:'center', alignContent:'center', display:'flex'}}>+</Text> 
        </View>
        <View style={{left:20}}>
        {<Image source={fruit} style={{height:30, width:30, backgroundColor:'#d1e4de'}}/>}
        <Text style={{left:'3em', top:'-2.5em', fontWeight:'bold'}}>Agrifarm Inc</Text>
        <Text style={{left:'4em', top:'-3em', fontWeight:'bold', color:'#a3a3ac', fontSize:10}}>F5RJ+FJF,Chairtakol</Text>
        </View>
        <View>
            <Text style={{left:10}}>Description</Text>
        </View>
        <View style={{left:10, top:10}}>
            <Text>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit
            . Explicabo debitis consectetur exercitationem unde, 
            fugiat animi! Quasi ipsum praesentium eveniet, alias nisi ut
             laboriosam ipsa non, deserunt quas beatae adipisci excepturi?<Text style={{ color:'green'}}>Read more</Text>
            </Text>
        </View>
  </ScrollView>
    )
};
export default third;