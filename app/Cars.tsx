import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import MyView from "./component/MyView";
import StyledText from "./component/StyledText";
import { FontSize, Fonts } from "./constants/Fonts";
import { Colors, height } from "./constants/Colors";
import ListBox from "./component/ListBox";

const Cars = () => (
    <MyView>
       <View style={styles.headerContainer}>
            <StyledText
                text="Near You"
                textStyle={styles.nearYouText}
            />
            <TouchableOpacity>
                <StyledText
                    text="See all"
                    textStyle={styles.seeAllText}
                />
            </TouchableOpacity>
        </View>
        <View style={{flex:1}}>
            <FlatList
                data={[{carName:'Tesla Model 3 2022',rating:4.5,location:'"775 Rolling Green Rd."',price:'$59'},{carName:'Tesla Model 3 2022',rating:4.5,location:'"775 Rolling Green Rd."',price:'$22'},{carName:'Tesla Model 3 2022',rating:4.5,location:'"775 Rolling Green Rd."',price:'$59'},{carName:'Tesla Model 3 2022',rating:4.5,location:'"775 Rolling Green Rd."',price:'$59'},]}
                contentContainerStyle={{ paddingBottom: "100%" }}
                renderItem={({item})=><ListBox {...item}/>}
                // ItemSeparatorComponent={()=><View style={{marginBottom:20}}/>}
            />
        </View>
    </MyView>
);

const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        marginTop: 20,
    },
    nearYouText: {
        fontSize: FontSize.font16,
        fontFamily: Fonts.Bold700,
        color: Colors.grayBlack,
    },
    seeAllText: {
        fontSize: FontSize.font14,
        fontFamily: Fonts.Medium500,
        color: Colors.silver,
    },
});
export default Cars;
