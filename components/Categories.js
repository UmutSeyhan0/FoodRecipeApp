import { View, Image, TouchableOpacity, Text, ScrollView } from 'react-native';
import React from 'react';
import { categoryData } from '../constants';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import tw from 'twrnc';
import Animated, { FadeInDown } from 'react-native-reanimated';

export default function Categories({categories, activeCategory, setActiveCategory }) { // ✅ Props doğru alındı
  return (
    <Animated.View entering={FadeInDown.duration(500).springify()}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={tw`mt-4`}// space-x yerine kullanıldı
        contentContainerStyle={{ paddingHorizontal: 15 }}
      >
        {categories.map((cat, index) => {
          let isActive = cat.strCategory === activeCategory;
          let activeButtonClass = isActive ? tw`bg-amber-400` : tw`bg-black/10`; // ✅ Tailwind class'ı düzeltildi

          return (
            <TouchableOpacity
              key={index}
              onPress={() => setActiveCategory(cat.strCategory)} // ✅ Artık hata vermez
              style={tw`flex items-center ml-1`} // space-y yerine kullanıldı
            >
              <View style={[tw`rounded-full p-[6px]`, activeButtonClass]}>
                <Image
                  source={{ uri: cat.strCategoryThumb }}
                  style={[{ width: hp(6), height: hp(6) }, tw`rounded-full`]}
                />
              </View>
              <Text style={[tw`text-neutral-600`, { fontSize: hp(1.6) }]}>
                {cat.strCategory}
              </Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </Animated.View>
  );
}
