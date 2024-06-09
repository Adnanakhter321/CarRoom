import { useNavigation } from "expo-router";
import {View, StatusBar, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import MyView from "./component/MyView";
import StyledText from "./component/StyledText";
import { FontSize, Fonts } from "./constants/Fonts";
import { Colors } from "./constants/Colors";
import { Images } from "./assets/images";
import MyInput from "./component/MyInput";



const Login = () => {
  const navigation = useNavigation()
  return (
    <MyView barStyle="dark-content">
      <View style={styles.mainContainer}>
        <StyledText 
          text="LOGO" 
          textStyle={styles.logoText} 
        />
        <View style={styles.welcomeContainer}>
          <StyledText 
            text="Hi, Welcome!" 
            textStyle={styles.welcomeText} 
          />
          <Image
            source={Images.Ic_Hand} 
            style={styles.handIcon} 
          />
        </View>
        <View>
          <MyInput 
            placeholder="| Phone Number" 
            placeholderTextColor={Colors.silver} 
            firstImageStyle={styles.firstImageStyle} 
            firstImage={Images.Ic_Phone} 
            styleBox={styles.phoneInputStyle} 
          />
          <MyInput 
            placeholder="Password" 
            placeholderTextColor={Colors.silver} 
            secondImage={Images.Ic_Eye} 
            styleBox={styles.passwordInputStyle} 
          />
        </View>
        <View style={styles.rememberContainer}>
          <View style={styles.rememberLeftContainer}>
            <TouchableOpacity>
              <Image 
                source={Images.Ic_Tick} 
                style={styles.tickIcon} 
              />
            </TouchableOpacity>
            <StyledText 
              text="Remember me" 
              textStyle={styles.rememberText} 
            />
          </View>
          <StyledText 
            text="Forgot password?" 
            textStyle={styles.forgotPasswordText} 
          />
        </View>
        <TouchableOpacity style={styles.loginButton} onPress={()=>navigation.navigate('(tabs)')}>
          <StyledText 
            text="Log In" 
            textStyle={styles.loginButtonText} 
          />
        </TouchableOpacity>
        <View style={styles.orContainer}>
          <View style={styles.orLine} />
          <StyledText 
            text="Or" 
            textStyle={styles.orText} 
          />
          <View style={styles.orLine} />
        </View>
        <TouchableOpacity style={styles.googleLoginButton}>
          <Image 
            source={Images.Ic_Google} 
            style={styles.googleIcon} 
          />
          <StyledText 
            text="Log In with Google" 
            textStyle={styles.googleLoginButtonText} 
          />
        </TouchableOpacity>
        <Text style={styles.registerText}>
          Don’t have an account? 
          <Text style={styles.registerLinkText}> Register</Text>
        </Text>
      </View>
    </MyView>
  );
}
const styles = StyleSheet.create({
  mainContainer: {
    marginHorizontal: 20,
  },
  logoText: {
    fontFamily: Fonts.Regular400,
    fontSize: FontSize.font44,
    color: Colors.blue,
    marginTop: '20%',
  },
  welcomeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '70%',
    marginTop: 40,
    marginBottom: 20,
  },
  welcomeText: {
    fontFamily: Fonts.Bold700,
    fontSize: FontSize.font26,
    color: Colors.grayBlack,
  },
  handIcon: {
    height: 30,
    width: 30,
    resizeMode: 'contain',
  },
  firstImageStyle: {
    width: 60,
    height: 60,
  },
  phoneInputStyle: {
    marginVertical: 20,
  },
  passwordInputStyle: {
    borderColor: Colors.newGray,
  },
  rememberContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 13,
    paddingHorizontal: 10,
  },
  rememberLeftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  tickIcon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
  rememberText: {
    fontFamily: Fonts.Regular400,
    fontSize: FontSize.font12,
    color: Colors.silver,
    marginLeft: 10,
  },
  forgotPasswordText: {
    fontFamily: Fonts.Regular400,
    fontSize: FontSize.font12,
    color: Colors.silver,
  },
  loginButton: {
    backgroundColor: Colors.blue,
    height: 56,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 40,
  },
  loginButtonText: {
    fontSize: FontSize.font14,
    fontFamily: Fonts.Bold700,
    color: Colors.white,
  },
  orContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  orLine: {
    width: '40%',
    height: 0.1,
    borderWidth: 1,
    borderColor: Colors.bordertrr,
    backgroundColor: Colors.bordertrr,
  },
  orText: {
    fontFamily: Fonts.Regular400,
    fontSize: FontSize.font12,
    color: Colors.silver,
  },
  googleLoginButton: {
    height: 56,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
    marginBottom: 20,
    flexDirection: 'row',
    borderColor: Colors.blue,
    borderWidth: 1,
  },
  googleIcon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
    marginHorizontal: 10,
  },
  googleLoginButtonText: {
    fontSize: FontSize.font14,
    fontFamily: Fonts.Bold700,
    color: Colors.blue,
  },
  registerText: {
    fontFamily: Fonts.Regular400,
    fontSize: FontSize.font12,
    color: Colors.silver,
    textAlign: 'center',
  },
  registerLinkText: {
    fontFamily: Fonts.SemiBold600,
    fontSize: FontSize.font12,
    color: Colors.grayBlack,
  },
});
export default Login;