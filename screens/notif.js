import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Link, Picker, ScrollView } from 'react-native';
import React, { useState } from 'react';

import fruit from '../assets/Milk.png';

const notif = ({navigation}) => {
    return(
        <View>
        <View style={{marginTop:'1em'}}>
            <Text style={{fontWeight:'bold', fontSize:'1em', fontFamily:'Romain', marginLeft:'1em'}}>Deals</Text>
            </View>
            <View style={{marginTop:'-1em'}}>
                <Text style={{fontWeight:'bold', fontSize:'1em', fontFamily:'Romain', marginLeft:'19em', color:'#00ff99'}}>See all</Text>
            </View>
            <View style={{marginTop:'2em', marginLeft:'2em', backgroundColor:'#dff4eb', height:100, width:'20em', borderRadius:30}}>
                <Text style={{fontWeight:'bold', fontSize:20, marginTop:'1em'}}>50% OFF</Text>
                <Text style={{fontWeight:'bold', fontSize:20}}>on Grocery combo packs</Text>
                <View style={{backgroundColor:'#fff', width:50, borderRadius:30, marginLeft:20}}>
                <Text style={{fontWeight:'bold', fontSize:10, color:'#000000'}}>Shop now</Text>
                </View>
                {<Image source={fruit} style={{height:70, width:70, marginLeft:'15em', marginTop:'-4.9em'}}/>}
            </View>
            <View style={{marginTop:'1em'}}>
            <Text style={{fontWeight:'bold', fontSize:'1em', fontFamily:'Romain', marginLeft:'1em'}}>Popular Items</Text>
            </View>
            <View style={{marginTop:'-1em'}}>
                <Text style={{fontWeight:'bold', fontSize:'1em', fontFamily:'Romain', marginLeft:'19em', color:'#00ff99'}}>See all</Text>
            </View>
            <View style={{marginTop:20, marginLeft:15, backgroundColor:'#fff', width:120, height:140}}>
                {<Image source={fruit}style={{height:50, width:50, left:20}}/>}
                {<Image source={fruit}style={{height:15, width:15, marginLeft:'6em', marginTop:'-2.5em', borderRadius:30}}/>}
                <Text style={{top:52, fontWeight:'bold', left:10}}>Bitroot</Text>
                <Text style={{top:52, fontWeight:'bold', left:10}}>$ 12.5</Text>
                {<Image source={fruit}style={{height:20, width:20, marginLeft:'5em', marginTop:'1.8em'}}/>}
            </View>
            <View style={{marginTop:'-8.7em', marginLeft:'10em', backgroundColor:'#fff', width:120, height:140}}>
                {<Image source={fruit}style={{height:50, width:50, left:20}}/>}
                {<Image source={fruit}style={{height:15, width:15, marginLeft:'6em', marginTop:'-2.5em', borderRadius:30}}/>}
                <Text style={{top:52, fontWeight:'bold', left:10}}>Bitroot</Text>
                <Text style={{top:52, fontWeight:'bold', left:10}}>$ 12.5</Text>
                {<Image source={fruit}style={{height:20, width:20, marginLeft:'5em', marginTop:'1.8em'}}/>}
            </View>
            <View style={{marginTop:'-8.7em', marginLeft:'20em', backgroundColor:'#fff', width:120, height:140}}>
                {<Image source={fruit}style={{height:50, width:50, left:20}}/>}
                {<Image source={fruit}style={{height:15, width:15, marginLeft:'6em', marginTop:'-2.5em', borderRadius:30}}/>}
                <Text style={{top:52, fontWeight:'bold', left:10}}>Bitroot</Text>
                <Text style={{top:52, fontWeight:'bold', left:10}}>$ 12.5</Text>
                {<Image source={fruit}style={{height:20, width:20, marginLeft:'5em', marginTop:'1.8em'}}/>}
            </View>
        </View>
    )
};
export default notif;