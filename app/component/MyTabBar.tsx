import { Animated, View, TouchableOpacity, Image } from 'react-native';
import { Images } from '../assets/images';
import { FontSize, Fonts } from '../constants/Fonts';
import { Colors } from '../constants/Colors';

export default function MyTabBar({ state, descriptors, navigation, position }) {
  return (
    <View style={{ flexDirection: 'row',height:50,backgroundColor:Colors.grayBlack,alignItems:'center',justifyContent:'center',paddingHorizontal:20 }}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        const inputRange = state.routes.map((_, i) => i);
        const opacity = position.interpolate({
          inputRange,
          outputRange: inputRange.map(i => (i === index ? 1 : 0)),
        });

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{ flex: 1,alignItems:'center',flexDirection:'row',justifyContent:'center'}}
          >
            <Image source={label==="Apartment"?Images.Ic_Warehouse:label==="Boat"?Images.Ic_Boat:Images.Ic_Car} style={{width:18,height:18,resizeMode:'contain',marginRight:5}}/>
            <Animated.Text style={{fontFamily:Fonts.Medium500,fontSize:FontSize.font12,color:isFocused?'#FFFFFF':'#FFFFFF80'}}>
              {label}
            </Animated.Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}