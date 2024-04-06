import { Pressable, StyleSheet, View } from "react-native";
import CustomText from "../../components/CustomText/CustomText";
import { FontAwesome6 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import color from "../../constants/color";
import { useNavigation } from "@react-navigation/native";
import { useRoute } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

function Footer() {
    const navigation = useNavigation()
    const route = useRoute();
    
    return ( 
    <View style={styles.footerWrapper}>
        <Pressable style = {route.name == "Recent" ? [styles.navBtn, styles.active] : styles.navBtn} onPress={() => {navigation.navigate("Recent")}}>
            <FontAwesome6 name="clock-rotate-left" size={24} color={route.name == "Recent" ? "#b30021" : "#525252"} />
            <CustomText align = "center" style={{width: "100%", fontSize: 14, color: `${route.name == "Recent" ? "#b30021" : "#525252"}`}}>Recent</CustomText>
        </Pressable>
        <View style={styles.addBtnWrapper}>
            <Pressable onPress={() => {navigation.navigate("Add")}} style = {route.name == "Add" ? [styles.addBtn, styles.activeAddBtn] : styles.addBtn}>
                <Ionicons name="add" size={24} color={"white"} />
            </Pressable>
        </View>
        <Pressable style = {route.name == "All" ? [styles.navBtn, styles.active] : styles.navBtn} onPress={() => {navigation.navigate("All")}}>
            <MaterialCommunityIcons name="menu" size={24} color={route.name == "All" ? "#b30021" : "#525252"} />
            <CustomText align="center" style={{width: "100%", fontSize: 14, color: `${route.name == "All" ? "#b30021" : "#525252"}`}}>All Expenses</CustomText>
        </Pressable>
    </View> );
}

export default Footer;
const styles = StyleSheet.create({
    footerWrapper: {
        position: "relative",
        backgroundColor: "white",
        flexDirection: "row",
        gap: 20,
        alignContent: "center",
        position: "fix",
        paddingTop: 1,
        borderTopColor: "#b300214D",
        borderTopWidth: 1
    },
    addBtn: {
        justifyContent: "center",
        alignItems: "center",   
        width: 60,
        height: 60,
        borderWidth: 5,
        borderRadius: 999,
        backgroundColor: "white",
        borderColor: "white",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#858585"
        
        
    },
    addBtnWrapper: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    navBtn: {
        width: "40%",
        justifyContent: "center",
        alignItems: "center"
    },
    active: {
        color: "white"
    },
    activeAddBtn: {
        backgroundColor: "#b30021"
    }
})