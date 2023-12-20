import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Link, Picker, ScrollView } from 'react-native';
import React, { useState } from 'react';

import fruit from '../assets/Milk.png';


const IconExample1 = () => (
  <View style={{ width: 40, height: 40, justifyContent: 'center', alignItems: 'center', }}>
    <Icon name="heart" size={25} color="#fb5555" />
  </View>
);
const IconExample2 = () => (
  <View style={{ backgroundColor: '#e2e2e2', width: 40, height: 40, justifyContent: 'center', alignItems: 'center', borderColor: '#cacaca', borderWidth: 2, borderRadius: 10, }}>
    <Icon name="file" size={20} color="#6f6b6a" />
  </View>
);
const IconExample3 = () => (
  <View style={{ backgroundColor: '#e2e2e2', width: 40, height: 40, justifyContent: 'center', alignItems: 'center', borderColor: '#cacaca', borderWidth: 2, borderRadius: 10, }}>
    <Icon name="home" size={20} color="#6f6b6a" />
  </View>
);
const IconExample4 = () => (
  <View style={{ backgroundColor: '#00ab67', width: 40, height: 40, justifyContent: 'center', alignItems: 'center', borderRadius: 15, }}>
    <Icon name="shopping-bag" size={20} color="#fff" />
  </View>
);
const IconExample5 = () => (
  <View>
    <Icon name="search" size={20} color="#6f6b6a" />
  </View>
);
const IconExample6 = () => (
  <View>
    <Icon name="arrow-down" size={20} color="#6f6b6a" />
  </View>
);
const IconExample7 = () => (
  <View>
    <Icon name="microphone" size={20} color="#6f6b6a" />
  </View>
);
const IconExample8 = () => (
  <View style={{ backgroundColor: '#e2e2e2', width: 40, height: 40, justifyContent: 'center', alignItems: 'center', borderColor: '#cacaca', borderWidth: 2, borderRadius: 10, }}>
    <Icon name="snapchat" size={20} color="#6f6b6a" />
  </View>
);
const IconExample9 = () => (
  <View style={{ backgroundColor: '#00ab67', width: 40, height: 40, justifyContent: 'center', alignItems: 'center', borderRadius: 15, }}>
    <Icon name="link" size={20} color="#fff" />
  </View>
);

const handleMenuPress = () => {
  // Action à effectuer lorsque le bouton du menu est pressé
  console.log('Menu pressé');
};


const like = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={{ fontSize: 16, color: '#6f6f6f', fontWeight: '600', }}>Your Location</Text>
          <Text style={{ fontSize: 16, fontWeight: 'bold', }}>
            3892 Olen Thomas Drive, NY <IconExample6></IconExample6>
          </Text>
        </View>
        <View>
          <Text style={{ fontSize: 20, }}>{'\u{1F600}'}</Text>
        </View>
      </View>

      <View style={styles.search}>
        <View style={styles.input}>
          <IconExample5></IconExample5>
          <TextInput placeholder='Search foods, groceries'></TextInput>
          <IconExample7></IconExample7>
        </View>
        <View>
          <IconExample9></IconExample9>
        </View>
      </View>

      <View style={styles.title}>
        <Text style={{ fontWeight: 'bold', fontSize: 20, }}>Categories</Text>
        <Text style={{ color: '#00ab67', }}>See all</Text>
      </View>

      <View style={{ height: 110, }}>
        <ScrollView horizontal contentContainerStyle={styles.scrollViewContent} contentOffset={{ x: -100, y: -100 }}>
          <View style={styles.products}>
            <View style={styles.prod}>
              <View style={{ backgroundColor: '#fff', borderRadius: 50, justifyContent: 'center', alignItems: 'center', padding: 5, }}>
                <Image source={fruit} style={styles.image}></Image>
              </View>
              <Text>Vegetables</Text>
            </View>

            <View style={styles.prod}>
              <View style={{ backgroundColor: '#fff', borderRadius: 50, justifyContent: 'center', alignItems: 'center', padding: 5, }}>
                <Image source={fruit} style={styles.image}></Image>
              </View>
              <Text>Vegetables</Text>
            </View>

            <View style={styles.prod}>
              <View style={{ backgroundColor: '#fff', borderRadius: 50, justifyContent: 'center', alignItems: 'center', padding: 5, }}>
                <Image source={fruit} style={styles.image}></Image>
              </View>
              <Text>Vegetables</Text>
            </View>

            <View style={styles.prod}>
              <View style={{ backgroundColor: '#fff', borderRadius: 50, justifyContent: 'center', alignItems: 'center', padding: 5, }}>
                <Image source={fruit} style={styles.image}></Image>
              </View>
              <Text>Vegetables</Text>
            </View>

            <View style={styles.prod}>
              <View style={{ backgroundColor: '#fff', borderRadius: 50, justifyContent: 'center', alignItems: 'center', padding: 5, }}>
                <Image source={fruit} style={styles.image}></Image>
              </View>
              <Text>Vegetables</Text>
            </View>

            <View style={styles.prod}>
              <View style={{ backgroundColor: '#fff', borderRadius: 50, justifyContent: 'center', alignItems: 'center', padding: 5, }}>
                <Image source={fruit} style={styles.image}></Image>
              </View>
              <Text>Vegetables</Text>
            </View>

          </View>
        </ScrollView>
      </View>

      <View style={styles.title2}>
        <Text style={{ fontWeight: 'bold', fontSize: 20, }}>Deals</Text>
        <Text style={{ color: '#00ab67', }}>See all</Text>
      </View>

      <View style={styles.reduction}>
        <View style={{ padding: 20, }}>
          <Text style={{ fontSize: 30, fontWeight: 'bold', }}>50% OFF</Text>
          <Text style={{ color: '#68736d', fontSize: 15, fontWeight: '600', }}>On Grocery Combo packs</Text>
          <View style={styles.shop}>
            <Text style={{ color: '#00ab67', fontWeight: '600', }}>Shop now</Text>
          </View>
        </View>
        <View>
          <Image source={fruit} style={{ width: 120, height: 120, }}></Image>
        </View>
      </View>

      <TouchableOpacity onPress={handleMenuPress} style={styles.menuButton}>
        <Text style={styles.menuButtonText}>- - -</Text>
      </TouchableOpacity>

      <View style={styles.title2}>
        <Text style={{ fontWeight: 'bold', fontSize: 20, }}>Popular items</Text>
        <Text style={{ color: '#00ab67', }}>See all</Text>
      </View>

      <View style={{height: 220,}}>
        <ScrollView horizontal contentContainerStyle={styles.scrollViewContent} contentOffset={{ x: -200, y: -200 }}>
          <View style={styles.cardlist}>
            <View style={styles.card}>
              <View style={styles.like}>
                <IconExample1></IconExample1>
              </View>
              <View style={{alignItems: 'center', marginTop: 15,}}>
                <Image source={betarave} style={{ width: 100, height: 100, }}></Image>
              </View>
              <View style={styles.price}>
                <View>
                  <Text style={{fontSize: 20, fontWeight: 'bold',}}>Bitrot</Text>
                  <Text style={{fontSize: 18, fontWeight: '600',}}>$ 1.50</Text>
                </View>
                <View style={{justifyContent: 'center',}}> 
                  <IconExample4></IconExample4>
                </View>
              </View>
            </View>
            <View style={styles.card}>
              <View style={styles.like}>
                <IconExample1></IconExample1>
              </View>
              <View style={{alignItems: 'center', marginTop: 15,}}>
                <Image source={brocoli} style={{ width: 100, height: 100, }}></Image>
              </View>
              <View style={styles.price}>
                <View>
                  <Text style={{fontSize: 20, fontWeight: 'bold',}}>Bitrot</Text>
                  <Text style={{fontSize: 18, fontWeight: '600',}}>$ 1.50</Text>
                </View>
                <View style={{justifyContent: 'center',}}> 
                  <IconExample4></IconExample4>
                </View>
              </View>
            </View>
            <View style={styles.card}>
              <View style={styles.like}>
                <IconExample1></IconExample1>
              </View>
              <View style={{alignItems: 'center', marginTop: 15,}}>
                <Image source={mandarine} style={{ width: 100, height: 100, }}></Image>
              </View>
              <View style={styles.price}>
                <View>
                  <Text style={{fontSize: 20, fontWeight: 'bold',}}>Bitrot</Text>
                  <Text style={{fontSize: 18, fontWeight: '600',}}>$ 1.50</Text>
                </View>
                <View style={{justifyContent: 'center',}}> 
                  <IconExample4></IconExample4>
                </View>
              </View>
            </View>
            <View style={styles.card}>
              <View style={styles.like}>
                <IconExample1></IconExample1>
              </View>
              <View style={{alignItems: 'center', marginTop: 15,}}>
                <Image source={tomate} style={{ width: 100, height: 100, }}></Image>
              </View>
              <View style={styles.price}>
                <View>
                  <Text style={{fontSize: 20, fontWeight: 'bold',}}>Bitrot</Text>
                  <Text style={{fontSize: 18, fontWeight: '600',}}>$ 1.50</Text>
                </View>
                <View style={{justifyContent: 'center',}}> 
                  <IconExample4></IconExample4>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>

    </View>
  );
};


const styles = StyleSheet.create({

  container: {
    flex: 1,
    height: 'auto',
    backgroundColor: '#f8f8f8',
    padding: 15,
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 25,
  },

  search: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 25,
  },

  input: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    height: 40,
    width: 270,
    padding: 15,
    gap: 15,
  },

  title2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
    alignItems: 'center',
  },

  title: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 25,
    alignItems: 'center',
  },

  products: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
    gap: 20,
  },

  image: {
    width: 50,
    height: 50,
  },

  scrollViewContent: {
    flexGrow: 1,
  },

  reduction: {
    width: '100%',
    height: 'auto',
    borderRadius: 15,
    backgroundColor: '#def3ea',
    marginTop: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  shop: {
    backgroundColor: '#fff',
    height: 'auto',
    width: 100,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    marginTop: 10,
  },

  menuButtonText: {
    fontSize: 34,
    fontWeight: 'bold',
    color: '#c4c4c4',
  },

  menuButton: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -15,
  },

  cardlist:{
    marginTop: 20,
    flexDirection: 'row',
    gap: 20,
  },

  card: {
    backgroundColor: '#fff',
    // height: 'auto',
    width: 200,
    borderRadius: 15,
  },

  like: {
    position: 'absolute',
    top: 0,
    right: 0,
    padding: 5,
  },

  price:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderTopColor: '#e2e2e2',
    borderBottomColor: '#fff',
    borderLeftColor: '#fff',
    borderRightColor: '#fff',
    margin: 15,
    paddingTop: 5,
    borderWidth: 2,
  },

});

export default like;