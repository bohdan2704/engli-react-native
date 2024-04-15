import * as React from 'react';
import {StyleSheet} from 'react-native';
import {Navigation} from "./screens/Navigation";

export default function App() {

    return <Navigation/>
        // style={styles.container}
        // <View>
        //     {/*<AllVideosScreen/>*/}
        //     {/*<VideoScreen videoName="phantom_liberty" format=".mp4"/>*/}
        //     <StatusBar theme="auto"/>
        // </View>

}
const styles = StyleSheet.create({
    container: {
        // flex: 1,
        backgroundColor: 'blue',
    }
});