import { useNavigation } from "expo-router";
import { Button, Text, View, StatusBar, TextInput, Image, TouchableOpacity } from "react-native";
import { TextInputProps, TextProps } from "../types";
import { Images } from "../assets/images";
import { Colors } from "../constants/Colors";
import { Fonts } from "../constants/Fonts";



const MyInput = ({ placeholder, placeholderTextColor, inputStyle, firstImage,firstImageStyle,secondImage,secondImageStyle,value,onChangeText,styleBox }: TextInputProps) => {
    return (
        <View style={{ height: 60, borderRadius: 40, flexDirection:'row', alignItems:'center',justifyContent:'space-between',paddingHorizontal:20,borderColor:Colors.borderBlue, borderWidth:1,...styleBox }}>
           {firstImage&& <TouchableOpacity>
            <Image
                source={firstImage}
                style={{
                    height: 30,
                    width: 30,
                    resizeMode: 'contain',
                    ...firstImageStyle,
                }}
            /></TouchableOpacity>}
            <TextInput value={value} placeholder={placeholder} onChangeText={onChangeText} placeholderTextColor={placeholderTextColor}  style={{ height: 60, width: "78%", ...inputStyle, fontFamily:Fonts.Regular400, color:Colors.silver}} />
            {secondImage&&<TouchableOpacity><Image
                source={secondImage}
                style={{
                    height: 30,
                    width: 30,
                    resizeMode: 'contain',
                    ...secondImageStyle,
                    // alignSelf:'flex-end'
                }}
            /></TouchableOpacity>}
        </View>
    );
}
export default MyInput;