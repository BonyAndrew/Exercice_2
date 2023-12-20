import React from 'react';
import { ScrollView, Text, TextInput, Image, View, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import apple from '../assets/fruit_apple.png';
import meat from '../assets/meat.png';
import veget from '../assets/vegetables.png';
import milk from '../assets/Milk.png';
import fish from '../assets/Fish.png';

const Second = ({navigation}) => {
    return(
        <ScrollView style = {{margin:20}}>
            <View style={styles.searchContainer}>
                <Icon name="search" size={20} style={styles.searchIcon} />
                <TextInput
                placeholder="Search foods, groceries"
                style={styles.searchInput}
                />
                <TouchableOpacity onPress={() => console.log('Microphone Pressed')}>
                <Icon name="mic" size={20} style={styles.micIcon} />
                </TouchableOpacity>
            </View>
            <View>
                <View style={{display: 'flex', flexDirection: 'row' ,justifyContent: 'space-between', marginBottom:15, marginTop:15}}>
                    <Text>Categories</Text>
                    <TouchableOpacity style={{color:'rgb(58, 146, 55)', fontFamily: 'Trebuchet MS'}}>See all</TouchableOpacity>
                </View>
                <ScrollView horizontal>
                    <View style={{display: 'flex', flexDirection:'row', gap:20}}>
                        <View style={{ alignItems: 'center', justifyContent:'center'}}>
                            <Image source={veget} style={{height:30, width:30}} />
                            <Text style={{fontFamily: 'Trebuchet MS'}}>Vegetables</Text>
                        </View>
                        <View style={{ alignItems: 'center', justifyContent:'center'}}>
                            <Image source={milk} style={{height:30, width:30}} />
                            <Text style={{fontFamily: 'Trebuchet MS'}}>Dairies</Text>
                        </View>
                        <View style={{ alignItems: 'center', justifyContent:'center'}}>
                            <Image source={meat} style={{height:30, width:30}} />
                            <Text style={{fontFamily: 'Trebuchet MS'}}>Meats</Text>
                        </View>
                        <View style={{ alignItems: 'center', justifyContent:'center'}}>
                            <Image source={fish} style={{height:30, width:30}} />
                            <Text style={{fontFamily: 'Trebuchet MS'}}>Fish</Text>
                        </View>
                        <View style={{ alignItems: 'center', justifyContent:'center'}}>
                            <Image source={apple} style={{height:30, width:30}} />
                            <Text style={{fontFamily: 'Trebuchet MS'}}>Fruits</Text>
                        </View>
                        <View style={{ alignItems: 'center', justifyContent:'center'}}>
                            <Image source={veget} style={{height:30, width:30}} />
                            <Text style={{fontFamily: 'Trebuchet MS'}}>Vegetables</Text>
                        </View>
                    </View>
                </ScrollView>
                <View style={{display: 'flex', flexDirection: 'row' ,justifyContent: 'space-between', marginBottom:15, marginTop:15}}>
                    <Text style={{fontFamily: 'Trebuchet MS'}}>Deals</Text>
                    <TouchableOpacity style={{color:'rgb(58, 146, 55)', fontFamily: 'Lucida Sans'}}>See all</TouchableOpacity>
                </View>
                <View style={{marginTop:'2em', marginLeft:'2em', backgroundColor:'#dff4eb', height:100, width:'20em', borderRadius:30}}>
                    <Text style={{fontWeight:'bold', fontSize:20, marginTop:'1em'}}>50% OFF</Text>
                    <Text style={{fontWeight:'bold', fontSize:20}}>on Grocery combo packs</Text>
                    <View style={{backgroundColor:'#fff', width:50, borderRadius:30, marginLeft:20}}>
                        <Text style={{fontWeight:'bold', fontSize:10, color:'#000000'}}>Shop now</Text>
                    </View>
                    <Image source={fish} style={{height:70, width:70, marginLeft:'15em', marginTop:'-4.9em'}}/>
                </View>
                <View style={{display: 'flex', flexDirection: 'row' ,justifyContent: 'space-between', marginBottom:15, marginTop:15}}>
                    <Text>Popular items</Text>
                    <TouchableOpacity style={{color:'rgb(58, 146, 55)', fontFamily: 'Trebuchet MS'}}>See all</TouchableOpacity>
                </View>
                
                <ScrollView horizontal>
                    <View style={{marginTop:20, marginLeft:15, backgroundColor:'#fff', width:120, height:140}}>
                        {<Image source={milk}style={{height:50, width:50, left:20}}/>}
                        {<Image source={meat}style={{height:15, width:15, marginLeft:'6em', marginTop:'-2.5em', borderRadius:30}}/>}
                        <Text style={{top:52, fontWeight:'bold', left:10}}>Bitroot</Text>
                        <Text style={{top:52, fontWeight:'bold', left:10}}>$ 12.5</Text>
                        {<Image source={milk}style={{height:20, width:20, marginLeft:'5em', marginTop:'1.8em'}}/>}
                    </View>
                </ScrollView>
            </View>
        </ScrollView>
    )
};

const styles = StyleSheet.create({
    container: {
      padding: 10,
    },
    searchContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      borderWidth: 'none',
      borderColor: '#ccc',
      backgroundColor: '#fff',
      borderRadius: 20,
      width: 320,
      margin: 5,
    },
    searchIcon: {
      paddingLeft: 10,
      paddingRight: 10,
      color: 'grey'
    },
    micIcon: {
       paddingLeft: 10,
       paddingRight: 10,
       color: 'grey'
    },
    searchInput: {
      flex: 1,
      paddingTop: 10,
      paddingRight: 0,
      paddingBottom: 10,
      paddingLeft: 0,
      backgroundColor: '#fff',
      color: 'grey',
      fontSize: 20,
    },
});

export default Second;