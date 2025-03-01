import { View, Text, StatusBar, Image } from 'react-native'
import React, { useEffect } from 'react'
import tw, { style } from 'twrnc';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Animated, { useSharedValue, withSpring } from 'react-native-reanimated';


export default function WelcomeScreen() {

  const ring1padding = useSharedValue(0);
  const ring2padding = useSharedValue(0);

  useEffect(() => {
    ring1padding.value = 0;
    ring2padding.value = 0;
    setTimeout(()=> ring1padding.value= withSpring(ring1padding.value+hp(1)), 100),
    setTimeout(()=> ring2padding.value= withSpring(ring2padding.value+hp(4.5)), 300)

  }, [])


  return (
  <View style={[tw`flex-1 justify-center items-center bg-amber-500`, {padding: hp(5.5) }] }>
      <StatusBar hidden style="light"/>

    <Animated.View  style={[tw`bg-white/20 rounded-full`, {padding: ring2padding}]}>

        <Animated.View style={[tw`bg-white/20 rounded-full`, {padding: ring1padding }]}>
            <Image source={require('../assets/images/meal-icon.png')}
              style={{width: hp(30), height:hp(30)}}
            />
        </Animated.View>
    </Animated.View>

    <View style={tw`flex items-center`}>
      <Text style={[tw`font-bold text-white`, {fontSize: hp(7)}]}>
      Foody
      </Text>
      <Text style={[tw`font-medium text-white `, {fontSize: hp(2)}]}>
      Food is always right
      </Text>
    </View>
  </View>
  )
}