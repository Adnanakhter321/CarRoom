import { useNavigation } from "expo-router";
import { Button, Text, View, StatusBar, Image, TouchableOpacity, TextInput, StyleSheet } from "react-native";
import { MyViewProps, TextProps } from "../types";
import { Colors } from "../constants/Colors";
import MyView from "../component/MyView";
import StyledText from "../component/StyledText";
import { Images } from "../assets/images";
import { FontSize, Fonts } from "../constants/Fonts";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import MyTabBar from "../component/MyTabBar";
import Cars from "../Cars";



const Home = () => {
    const Tab = createMaterialTopTabNavigator();
    return (
        <MyView barStyle='light-content' style={styles.myViewStyle}>
            <View style={styles.outerViewStyle}>
                <View style={styles.headerContainer}>
                    <View>
                        <StyledText text="Location" textStyle={styles.locationText} />
                        <View style={styles.locationContainer}>
                            <Image source={Images.Ic_Location} style={styles.locationIcon} />
                            <StyledText
                                text="775 Rolling Green Rd."
                                textStyle={styles.locationAddressText}
                            />
                        </View>
                    </View>
                    <View style={styles.iconsContainer}>
                        <TouchableOpacity>
                            <Image source={Images.Ic_Notif} style={styles.iconStyle} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image source={Images.Ic_User} style={styles.iconStyle} />
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.searchContainer}>
                    <View style={styles.searchBox}>
                        <TouchableOpacity>
                            <Image source={Images.ic_Search} style={styles.searchIcon} />
                        </TouchableOpacity>
                        <View style={styles.searchInputContainer}>
                            <StyledText
                                text="Where to?"
                                textStyle={styles.searchText}
                            />
                            <TextInput
                                placeholder={"Los Angeles|"}
                                placeholderTextColor={Colors.silver}
                                style={styles.searchInput}
                            />
                        </View>
                        <TouchableOpacity>
                            <Image source={Images.Ic_Filter} style={styles.filterIcon} />
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.tabViewStyle}>
                    <Tab.Navigator tabBar={props => <MyTabBar {...props} />} initialRouteName="Car">
                        <Tab.Screen name="Apartment" children={() => (
                            <Text>asd</Text>
                        )} />
                        <Tab.Screen name="Boat" children={() => (
                            <Text>asd</Text>
                        )} />
                        <Tab.Screen name="Car" children={() => <Cars />} />
                    </Tab.Navigator>
                </View>
            </View>
        </MyView>
    );
}
const styles =StyleSheet.create({
    myViewStyle: {
        backgroundColor: Colors.grayBlack,
    },
    outerViewStyle: {
        marginTop: 70,
    },
    headerContainer: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginHorizontal: 20,
    },
    locationText: {
        fontSize: FontSize.font12,
        fontFamily: Fonts.Regular400,
        color: Colors.white,
    },
    locationContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    locationIcon: {
        width: 15,
        height: 15,
        resizeMode: 'contain',
    },
    locationAddressText: {
        fontSize: FontSize.font14,
        fontFamily: Fonts.Medium500,
        color: Colors.white,
    },
    iconsContainer: {
        flexDirection: 'row',
    },
    iconStyle: {
        width: 48,
        height: 48,
        resizeMode: 'contain',
        marginHorizontal: 13,
    },
    searchContainer: {
        marginVertical: 30,
        marginHorizontal: 20,
    },
    searchBox: {
        height: 60,
        borderRadius: 40,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        borderColor: Colors.borderBlue,
        borderWidth: 1,
        backgroundColor: Colors.newBorder,
    },
    searchIcon: {
        height: 24,
        width: 24,
        resizeMode: 'contain',
    },
    searchInputContainer: {
        flex: 1,
        paddingHorizontal: 20,
    },
    searchText: {
        fontSize: FontSize.font12,
        fontFamily: Fonts.Medium500,
        color: Colors.grayBlack,
    },
    searchInput: {
        fontFamily: Fonts.Regular400,
        color: Colors.silver,
    },
    filterIcon: {
        height: 24,
        width: 24,
        resizeMode: 'contain',
    },
    tabViewStyle: {
        height: "100%",
    },
});
export default Home;