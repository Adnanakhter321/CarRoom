import { useNavigation } from "expo-router";
import { Button, Text, View, StatusBar, TextInput, Image, TouchableOpacity, StyleSheet } from "react-native";
import { TextInputProps, TextProps } from "../types";
import { Images } from "../assets/images";
import { Colors } from "../constants/Colors";
import { Fonts } from "../constants/Fonts";



const MyInput = ({ placeholder, placeholderTextColor, inputStyle, firstImage,firstImageStyle,secondImage,secondImageStyle,value,onChangeText,styleBox }: TextInputProps) => {
    return (
        <View style={[styles.container, styleBox]}>
        {firstImage && (
          <TouchableOpacity>
            <Image
              source={firstImage}
              style={[styles.image, firstImageStyle]}
            />
          </TouchableOpacity>
        )}
        <TextInput 
          value={value} 
          placeholder={placeholder} 
          onChangeText={onChangeText} 
          placeholderTextColor={placeholderTextColor}  
          style={[styles.textInput, inputStyle]} 
        />
        {secondImage && (
          <TouchableOpacity>
            <Image
              source={secondImage}
              style={[styles.image, secondImageStyle]}
            />
          </TouchableOpacity>
        )}
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
      height: 60,
      borderRadius: 40,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: 20,
      borderColor: Colors.borderBlue,
      borderWidth: 1,
    },
    image: {
      height: 30,
      width: 30,
      resizeMode: 'contain',
    },
    textInput: {
      height: 60,
      width: '78%',
      fontFamily: Fonts.Regular400,
      color: Colors.silver,
    },
  });
  
export default MyInput;