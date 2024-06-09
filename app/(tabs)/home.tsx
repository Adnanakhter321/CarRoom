import { useNavigation } from "expo-router";
import { Button, Text, View, StatusBar, Image, TouchableOpacity, TextInput } from "react-native";
import { MyViewProps, TextProps } from "../types";
import { Colors } from "../constants/Colors";
import MyView from "../component/MyView";
import StyledText from "../component/StyledText";
import { Images } from "../assets/images";
import { FontSize, Fonts } from "../constants/Fonts";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import MyTabBar from "../component/MyTabBar";



const Home = () => {
    const Tab = createMaterialTopTabNavigator();
    return (
        <MyView barStyle='light-content' style={{ backgroundColor: Colors.grayBlack }}>
            <View style={{ marginTop: 70 }}>
                <View style={{ justifyContent: 'space-between', flexDirection: 'row', marginHorizontal: 20 }}>
                    <View>
                        <StyledText text="Location" textStyle={{
                            fontSize: FontSize.font12,
                            fontFamily: Fonts.Regular400,
                            color: Colors.white,
                        }} />
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Image source={Images.Ic_Location} style={{ width: 15, height: 15, resizeMode: 'contain' }} />
                            <StyledText
                                text="775 Rolling Green Rd."
                                textStyle={{
                                    fontSize: FontSize.font14,
                                    fontFamily: Fonts.Medium500,
                                    color: Colors.white,
                                }}
                            />
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <TouchableOpacity><Image source={Images.Ic_Notif} style={{ width: 48, height: 48, resizeMode: 'contain', marginHorizontal: 13 }} /></TouchableOpacity>
                        <TouchableOpacity><Image source={Images.Ic_User} style={{ width: 48, height: 48, resizeMode: 'contain' }} /></TouchableOpacity>
                    </View>
                </View>

                <View style={{ marginVertical: 30, marginHorizontal: 20 }}>
                    <View style={{ height: 60, borderRadius: 40, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 20, borderColor: Colors.borderBlue, borderWidth: 1, backgroundColor: Colors.newBorder }}>
                        <TouchableOpacity>
                            <Image
                                source={Images.ic_Search}
                                style={{
                                    height: 24,
                                    width: 24,
                                    resizeMode: 'contain',
                                }}
                            /></TouchableOpacity>
                        <View style={{ flex: 1, paddingHorizontal: 20, }}>
                            <StyledText
                                text="Where to?"
                                textStyle={{
                                    fontSize: FontSize.font12,
                                    fontFamily: Fonts.Medium500,
                                    color: Colors.grayBlack,
                                }}
                            />
                            <TextInput placeholder={"Los Angeles|"} placeholderTextColor={Colors.silver} style={{ fontFamily: Fonts.Regular400, color: Colors.silver }} />
                        </View>
                        <TouchableOpacity><Image
                            source={Images.Ic_Filter}
                            style={{
                                height: 24,
                                width: 24,
                                resizeMode: 'contain',
                                // alignSelf:'flex-end'
                            }}
                        /></TouchableOpacity>
                    </View>
                </View>

                <View style={{height:"100%"}}>
                    <Tab.Navigator tabBar={props => <MyTabBar {...props} />}>
                        <Tab.Screen name="Apartment" children={()=>(
                            <Text>asd</Text>
                        )} />
                        <Tab.Screen name="Boat" children={()=>(
                            <Text>asd</Text>
                        )} />
                         <Tab.Screen name="Car" children={()=>(
                            <Text>asd</Text>
                        )} />
                    </Tab.Navigator>
                </View>
            </View>
        </MyView>
    );
}
export default Home;