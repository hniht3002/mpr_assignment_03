import { View, Image, StyleSheet } from "react-native";
import CustomText from "../../components/CustomText/CustomText";

function Header() {
    return ( <View style = {styles.wrapper}>
        <View style={styles.avatar}>
            <Image source={require("../../assets/images/avatar.jpg")} style={{width: 100, height: 100, resizeMode: 'center',}}></Image>
        </View>

        <View>
            <CustomText>Welcome, Thinh</CustomText>
            <CustomText style={{fontWeight:"bold"}}>Tracking your expenses!</CustomText>
        </View>
    </View> );
}

export default Header;

const styles = StyleSheet.create({
    avatar:{
        borderWidth: 1,
        width: 55,
        height: 55,
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
        borderBottomWidth: 1
    }
})