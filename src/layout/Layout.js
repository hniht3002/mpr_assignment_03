import { Children } from "react";
import { StatusBar, StyleSheet, View } from "react-native";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";

function Layout({children}) {
    return ( 
        <View style={{flex: 1}}>
            <StatusBar></StatusBar>
            <Header></Header>
            <View style={styles.wrapper}>
            {children}
            </View>
            <Footer></Footer>
        </View>
    );
}

export default Layout;
const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: "#ffffff",
        flex: 1
    }
})