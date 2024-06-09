import { SplashScreen, useNavigation } from "expo-router";
import { Button, Text, View, StatusBar, ImageBackground, Image, TouchableOpacity, StyleSheet } from "react-native";
import MyView from "./component/MyView";
import { useEffect } from "react";
import { useFonts } from "expo-font";
import { FontSize, Fonts } from "./constants/Fonts";
import { Images } from "./assets/images";
import { Colors, } from "./constants/Colors";
import StyledText from "./component/StyledText";
import { SpacerType } from "./types";


SplashScreen.preventAutoHideAsync();
const Index = () => {
  const navigation = useNavigation()
  const [loaded] = useFonts({
    Black900: require('../app/assets/fonts/Outfit-Black.ttf'),
    ExtraBold800: require('../app/assets/fonts/Outfit-ExtraBold.ttf'),
    Bold700: require('../app/assets/fonts/Outfit-Bold.ttf'),
    SemiBold600: require('../app/assets/fonts/Outfit-SemiBold.ttf'),
    Medium500: require('../app/assets/fonts/Outfit-Medium.ttf'),
    Regular400: require('../app/assets/fonts/Outfit-Regular.ttf'),
    Light300: require('../app/assets/fonts/Outfit-Light.ttf'),
    ExtraLight200: require('../app/assets/fonts/Outfit-ExtraLight.ttf'),
    Thin100: require('../app/assets/fonts/Outfit-Thin.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }
  return (
    <MyView barStyle='dark-content' style={styles.container}>
      <ImageBackground source={Images.Bg_Car} style={styles.bgCar}>
        <ImageBackground source={Images.Bg_Frame} resizeMode='contain' style={styles.bgFrame}>
          <View style={styles.textContainer}>
            <StyledText 
              text="Find Your Dream Car With Us" 
              textStyle={styles.titleText}
            />
            <StyledText 
              text="Explore your ideal car! We'll match your preferences with a range of options." 
              textStyle={styles.descriptionText}
            />
            <View style={styles.buttonContainer}>
              <TouchableOpacity onPress={()=>navigation.navigate('login')}>
                <StyledText 
                  text="Skip" 
                  textStyle={styles.skipText}
                />
              </TouchableOpacity>
              <Image 
                source={Images.Ic_Slide} 
                style={styles.slideIcon}
              />
              <TouchableOpacity onPress={()=>navigation.navigate('login')}>
                <Image 
                  source={Images.Ic_Arrow} 
                  style={styles.arrowIcon}
                />
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      </ImageBackground>
    </MyView>
  );
}
export default Index;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bgCar: {
    flex: 0.7,
    zIndex: 2,
  },
  bgFrame: {
    flex: 0.7,
    zIndex: 111,
    top: '76%',
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    bottom: '1%',
  },
  titleText: {
    fontFamily: Fonts.Bold700,
    fontSize: FontSize.font16,
    textAlign: 'center',
    color:Colors.grayBlack,
    width: '60%',
  },
  descriptionText: {
    fontFamily: Fonts.Regular400,
    fontSize: FontSize.font12,
    textAlign: 'center',
    width: '60%',
    color: Colors.silver,
    marginVertical: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    top: '25%',
    paddingHorizontal: 15,
  },
  skipText: {
    fontFamily: Fonts.Regular400,
    fontSize: FontSize.font14,
    color: Colors.silver,
  },
  slideIcon: {
    height: 10,
    width: 75,
    resizeMode: 'contain',
  },
  arrowIcon: {
    height: 30,
    width: 30,
    resizeMode: 'contain',
  },
});
