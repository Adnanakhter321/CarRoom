import { useNavigation } from "expo-router";
import { Button, Text, View, StatusBar, SafeAreaView } from "react-native";
import { MyViewProps } from "../types";



const MyView = ({children,style,barStyle,titleBarHidden}:MyViewProps) => {
  return (
    <>
    <StatusBar barStyle={barStyle} hidden={titleBarHidden} />
    <View
     style={[{flex:1,...style}]} 
    >
      {children}
    </View>
    </>
  );
}
export default MyView;