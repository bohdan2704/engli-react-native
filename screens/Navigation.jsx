import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AllVideosScreen from "./AllVideosScreen/AllVideosScreen";
import VideoScreen from "./VideoScreen/VideoScreen";
import { NavigationContainer } from '@react-navigation/native';
import {StatusBar, StyleSheet, View} from "react-native";

const Stack = createNativeStackNavigator();

export const Navigation = () => {
    return (
        <NavigationContainer>
            {/*<View style={styles.box}/>*/}
            {/*<StatusBar theme="auto" /> /!* Keep StatusBar visible *!/*/}
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="AllVideo" component={AllVideosScreen} options={{title: "All Videos"}}/>
                <Stack.Screen name="VideoScreen" component={VideoScreen} options={{title: "Video Page"}}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}


const styles = StyleSheet.create({
    box: {
        width: '100%',
        height: 30,
        backgroundColor: 'grey',
    },
});
