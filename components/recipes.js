import { View, Text, Pressable, Image } from 'react-native'
import React from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp, widthPercentageToDP} from 'react-native-responsive-screen';
import MasonryList from '@react-native-seoul/masonry-list';
import { mealData } from '@/constants';
import tw, { style } from 'twrnc';
import Animated, { FadeInDown } from 'react-native-reanimated';



export default function Recipes() {
  return (
    <View style={tw`mx-4 ml-4`}>
      <Text style={[{fontSize: hp(3)}, tw`font-semibold text-neutral-600`]}>Recipes</Text>
      <View>
          <MasonryList
              data={mealData}
              keyExtractor={(item)=> item.id}
              numColumns={2}
              showsVerticalScrollIndicator={false}
              renderItem={({item, i}) => <RecipeCard item={item} index={i}/>}
              // refreshing={isLoadingNext}
              // onRefresh={() => refetch({first: ITEM_CNT})}
              onEndReachedThreshold={0.1}
              // onEndReached={() => loadNext(ITEM_CNT)}
          />
      </View>
    </View>
  )
}

const RecipeCard =({item, index}) => {
  let isEven = index%2==0;
  return(
    <Animated.View entering={FadeInDown.delay(index*100).duration(600).springify().damping(12)}>
      <Pressable
      style={[{width: '100%', paddingLeft: isEven? 0:8, paddingRight: isEven? 8:0}, tw`flex justify-center mb-4 ml-1`]}
      >
      <Image 
      source={{uri: item.image}}
      style={[{width: '100%', height: index%3==0? hp(25): hp(35), borderRadius:35, fontSize: hp(1.5)}, tw`bg-black/5`]}
      />

      <Text style={tw`font-semibold ml-2 text-neutral-600`}>
        {
          item.name.length >20? item.name.slice(0,20)+'...': item.name
        }


      </Text>
      </Pressable>
    </Animated.View>
  )
}