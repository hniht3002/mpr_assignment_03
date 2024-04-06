import { ImageBackground, ScrollView, StatusBar, StyleSheet, View } from "react-native";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import { useDispatch, useSelector } from "react-redux";
import { updateIsPortrait} from "../redux/slice/orientationSlice";
import { useEffect } from "react";
import { Dimensions } from "react-native";
function Layout({children}) {
    const dispatch = useDispatch();    
    const isPortrait = useSelector(state => state.orientationReducer.isPortrait)
    
    useEffect(() => {
      const handleOrientationChange = () => {
        const isPortrait = Dimensions.get('window').height > Dimensions.get('window').width;
        dispatch(updateIsPortrait(isPortrait));
      };
  
      const handler = Dimensions.addEventListener('change', handleOrientationChange);
  
      return () => {
        handler.remove()
      };
    }, [dispatch]);
    const Wrapper = ({children}) => {
      if(isPortrait) {
        return <View style={{flex: 1}}>{children}</View>
      } else {
        return <ScrollView>{children}</ScrollView>
      }
    }
    return ( 
            <View style={{flex: 1, backgroundColor: "white"}}>
                  <StatusBar></StatusBar>
                  <Wrapper>
                    <Header></Header>
                    <View style={styles.wrapper}>
                    {children}
                    </View>
                  </Wrapper>
                  <Footer></Footer>
            </View>        
    );
}

export default Layout;
const styles = StyleSheet.create({
    wrapper: {
      flex: 1,
      paddingVertical: 20
    }
})