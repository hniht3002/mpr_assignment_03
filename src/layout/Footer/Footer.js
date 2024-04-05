import { Pressable, StyleSheet, View } from "react-native";
import CustomText from "../../components/CustomText/CustomText";
import { Ionicons } from '@expo/vector-icons';
import color from "../../constants/color";
import { useNavigation } from "@react-navigation/native";
function Footer() {
    const navigation = useNavigation()
    return ( 
    <View style={styles.footerWrapper}>
        <Pressable style = {styles.navBtn} onPress={() => {navigation.navigate("Recent")}}>
            <CustomText align = "center">Recent Expenses</CustomText>
        </Pressable>
        <View style={styles.addBtn}>
            <Pressable onPress={() => {navigation.navigate("Add")}}>
                <Ionicons name="add" size={24} color="white" />
            </Pressable>
        </View>
        <Pressable style={styles.navBtn} onPress={() => {navigation.navigate("All")}}>
            <CustomText align="center">All Expenses</CustomText>
        </Pressable>
    </View> );
}

export default Footer;
const styles = StyleSheet.create({
    footerWrapper: {
        position: "relative",
        backgroundColor: "white",
        borderTopWidth: 1,
        borderTopColor: "#000000",
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignContent: "center",
        position: "fix",
        paddingTop: 3
    },
    addBtn: {
        justifyContent: "center",
        alignItems: "center",   
        width: 60,
        height: 60,
        borderWidth: 5,
        borderRadius: 999,
        backgroundColor:    `${color.primary}`,
        borderColor: "white",
        justifyContent: "center",
        alignItems: "center"
    },
    navBtn: {
        width: "30%",
        justifyContent: "center",
        alignItems: "center"
    }
})