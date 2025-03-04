import { View, Image, TouchableOpacity, Text } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native'
import {categoryData} from '../constants'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import tw, { style } from 'twrnc';



export default function Categories() {
  return (
    <View>
      <ScrollView
      horizontal 
      showsHorizontalScrollIndicator={false}
      style={tw`space-x-4`}
      contentContainerStyle={{paddingHorizontal: 15}}
      >

        {
            categoryData.map((cat, index)=> {
                return (
                    <TouchableOpacity
                    key={index}
                    
                    style={tw`flex items-center space-y-1`}
                    >
                        <View style={tw`rounded=full p-[6px]`}>
                            <Image
                                source={{uri: cat.image}}
                                
                                style={[{width: hp(6), height: hp(6)}, tw`rounded-full`]}


                            />


                        </View>
                            <Text style={[tw`text-neutral-600`, {fontSize: hp(1.6)}]}>
                                {cat.name}
                            </Text>
                    </TouchableOpacity>
                )
            })
        }
      </ScrollView>
    </View>
  )
}