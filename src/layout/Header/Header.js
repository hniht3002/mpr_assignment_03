import { View, Image, StyleSheet } from "react-native";
import CustomText from "../../components/CustomText/CustomText";
import color from "../../constants/color";

function Header() {
    return ( <View style = {styles.wrapper}>
        <View style = {styles.avatar}>
            <Image source={require("../../assets/images/avatar.jpg")} style={{width: "100%", height: "100%", aspectRatio: 1, resizeMode: 'cover'}}></Image>
        </View>        

        <View>
            <CustomText>Welcome, Thinh</CustomText>
            <CustomText style={{fontWeight:"bold", color: "#b30021"}}>Tracking your expenses!</CustomText>
        </View>
    </View> );
}

export default Header;

const styles = StyleSheet.create({
    avatar:{
        borderWidth: 1,
        borderColor: "#b30021",
        width: 60,
        height: 60,
        borderRadius: 99,
        overflow: "hidden",
        objectFit: "center"
    },
    wrapper: {
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
        backgroundColor: "#ffffff",
        paddingHorizontal: 12,
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderColor: "#b300214D"
    }
})