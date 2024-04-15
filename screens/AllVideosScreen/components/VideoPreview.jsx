import * as React from 'react';
import {View, StyleSheet, Text, Image, TouchableOpacity} from 'react-native';
import {apiPath, staticPreviewPath} from "../../../data";
import { useNavigation } from '@react-navigation/native';

export default function VideoPreview({id, videoName, previewImageName, duration, engSubsName}) {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Text>{videoName}</Text>
            <Text>{previewImageName}</Text>
            <Text>{duration}</Text>
            {/*{console.log(apiPath + staticPreviewPath + previewImageName)}*/}
            {/*<Image style={styles.image} source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}/>*/}
            <TouchableOpacity onPress={() => navigation.navigate("VideoScreen", {videoName, engSubsName})}>
                <Image style={styles.image} source={{ uri: apiPath + staticPreviewPath + previewImageName }}/>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
    },
    image: {
        width: 200,
        height: 110,
        resizeMode: 'stretch'
    }
});
