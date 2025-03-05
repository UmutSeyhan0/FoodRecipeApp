import { View, Image, StatusBar, ScrollView, Text, TextInput } from 'react-native'
import React, { useEffect, useState } from 'react'
import tw, { style } from 'twrnc';
//import { ScrollView } from 'react-native-reanimated/lib/typescript/Animated';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {BellIcon, MagnifyingGlassIcon} from 'react-native-heroicons/outline'
import Categories from '../components/Categories'
import axios from 'axios';
import Recipes from '../components/recipes'


export default function HomeScreen() {

  const [activeCategory, setActiveCategory] = useState('Beef');
  const [categories, setCategories] = useState([]);

  useEffect(()=> {
    getCategories();
  }, [])

  const getCategories = async ()=>{
    try{
      const response = await axios.get('https://themealdb.com/api/json/v1/1/categories.php')
      //console.log('got categories:', response.data)
    if(response && response.data){
      setCategories(response.data.categories)
    }
    }catch(err){
      console.log('error: ', err.message);
    }

  }

  return (
    <View style={tw`flex-1 bg-white`}>
    <StatusBar style="dark "/>
    <ScrollView
    showsVerticalScrollIndicator={false}
    contentContainerStyle={{paddingBottom : 50}}
    style={tw`ml-1 pt-14`}
    >

    <View style={tw`mx-4 flex-row justify-between items-center mb-2`}>
    <Image source={require('../assets/images/avatar.png')} style={{height : hp(5.3), width: hp(5.5)} } />
    <BellIcon size={ hp(4)} color="gray"/>
    </View>

    <View style={tw`mx-4 ml-2 mb-2`}>
      <Text  style={[{fontSize: hp(1.7)}, tw` text-neutral-600`]}>Hello, Umut!</Text>
      <View>
      <Text style={[{fontSize: hp(3.8)}, tw`font-semibold text-neutral-600`]}>Make your own food,</Text>
      </View>
      <Text style={[{fontSize: hp(3.8)}, tw`font-semibold text-neutral-600`]}
      >stay at <Text style={ tw`text-amber-400`}>home</Text></Text>
    </View>

    <View style={tw`mx-4 flex-row items-center rounded-full bg-black/5 p-[6px]`}
    >
    <TextInput
    placeholder='Search any recipe'
    placeholderTextColor={'gray'}
    style={[{fontSize: hp(1.7)}, tw`flex-1 text-base mb-1 pl-3 tracking-wider`]}
    />
    <View style={tw`bg-white rounded-full p-3`}>
      <MagnifyingGlassIcon size={hp(2.5)} strokeWidth={3} color="gray" />
    </View>
    </View>

    <View>

      { categories.length>0 && <Categories categories={categories} activeCategory={activeCategory} setActiveCategory={setActiveCategory}/>}
    </View>

    <View>
      <Recipes/>
    </View>

  </ScrollView>
 </View>
  )
}