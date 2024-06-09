import { useNavigation } from "expo-router";
import { Button, Text, View, StatusBar } from "react-native";
import { MyViewProps, TextProps } from "../types";
import { Colors } from "../constants/Colors";



const StyledText = ({text,textStyle,barStyle}:TextProps) => {
  return (
    <Text style={{color:Colors.white,...textStyle}}>
        {text}
    </Text>
  );
}
export default StyledText;