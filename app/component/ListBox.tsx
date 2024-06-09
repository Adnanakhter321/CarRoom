import { useNavigation } from "expo-router";
import { Button, Text, View, StatusBar, Image, StyleSheet } from "react-native";
import { ListBoxProps, MyViewProps, TextProps } from "../types";
import { Colors } from "../constants/Colors";
import { Images } from "../assets/images";
import StyledText from "./StyledText";
import { FontSize, Fonts } from "../constants/Fonts";



const ListBox = ({ carName, rating, location, price}: ListBoxProps) => {
    return (
        <View style={styles.listBoxContainer}>
        <Image source={Images.Ic_carImg} style={styles.carImage} />
        <View style={styles.ratingContainer}>
            <Image source={Images.Ic_Star} style={styles.starIcon} />
            <StyledText text={rating} textStyle={styles.ratingText} />
        </View>
        <View style={styles.detailsContainer}>
            <View style={styles.detailsInnerContainer}>
                <View style={styles.featuresContainer}>
                    <View style={styles.feature}>
                        <Image source={Images.ic_Seat} style={styles.featureIcon} />
                        <StyledText text={`${"4"} Seats`} textStyle={styles.featureText} />
                    </View>
                    <View style={[styles.feature, styles.featureMarginLeft]}>
                        <Image source={Images.Ic_Manual} style={styles.featureIcon} />
                        <StyledText text={'Manual'} textStyle={styles.featureText} />
                    </View>
                    <View style={[styles.feature, styles.featureMarginLeft]}>
                        <Image source={Images.Ic_Electric} style={styles.featureIcon} />
                        <StyledText text={'Electric'} textStyle={styles.featureText} />
                    </View>
                </View>
                <StyledText text={carName} textStyle={styles.carNameText} />
                <View>
                    <StyledText text="Location" textStyle={styles.locationText} />
                    <View style={styles.locationContainer}>
                        <Image source={Images.Ic_Location2} style={styles.locationIcon} />
                        <StyledText text={location} textStyle={styles.locationAddressText} />
                    </View>
                </View>
            </View>
            <View style={styles.priceContainer}>
                <Image source={Images.Ic_wish} style={styles.wishIcon} />
                <Text style={styles.priceText}>
                    <Text style={styles.priceAmount}>{price}</Text>/day
                </Text>
            </View>
        </View>
    </View>
    );
}

const styles = StyleSheet.create({
    listBoxContainer: {
        height: 331,
        elevation: 5,
        shadowColor: '#00000012',
        backgroundColor: Colors.white,
        width: '91%',
        borderRadius: 10,
        alignSelf: 'center',
        marginTop: 20
    },
    carImage: {
        width: '100%',
        height: '60%',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10
    },
    ratingContainer: {
        flexDirection: 'row',
        position: 'absolute',
        alignSelf: 'flex-end',
        margin: 10,
        alignItems: 'center',
        backgroundColor: Colors.white,
        width: 51,
        height: 28,
        right: 1,
        padding: 3,
        borderRadius: 3,
        justifyContent: 'center'
    },
    starIcon: {
        width: 14,
        height: 14,
        resizeMode: 'contain',
        marginRight: 5
    },
    ratingText: {
        color: Colors.grayBlack,
        fontFamily: Fonts.Medium500,
        fontSize: FontSize.font12
    },
    detailsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10
    },
    detailsInnerContainer: {
        marginTop: 15,
        justifyContent: 'center'
    },
    featuresContainer: {
        flexDirection: 'row'
    },
    feature: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    featureMarginLeft: {
        marginLeft: 10
    },
    featureIcon: {
        width: 18,
        height: 18,
        resizeMode: 'contain'
    },
    featureText: {
        color: Colors.blue,
        fontFamily: Fonts.Regular400,
        fontSize: FontSize.font14,
        marginLeft: 5
    },
    carNameText: {
        color: Colors.grayBlack,
        fontFamily: Fonts.Bold700,
        fontSize: FontSize.font14,
        marginTop: 10
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
        marginRight: 3,
    },
    locationAddressText: {
        fontSize: FontSize.font12,
        fontFamily: Fonts.Medium500,
        color: Colors.silver,
    },
    priceContainer: {
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    wishIcon: {
        width: 40,
        height: 40,
        resizeMode: 'contain',
        marginVertical: 15
    },
    priceText: {
        color: Colors.grayBlack,
        fontFamily: Fonts.Regular400,
        fontSize: FontSize.font12
    },
    priceAmount: {
        color: Colors.blue,
        fontFamily: Fonts.Bold700,
        fontSize: FontSize.font16
    }
})
export default ListBox;