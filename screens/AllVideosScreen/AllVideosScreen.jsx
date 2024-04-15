import * as React from 'react';
import {View, StyleSheet, FlatList, Alert, Text, StatusBar} from 'react-native';
import {apiPath, videosPath} from "../../data";
import {useEffect} from "react";
import VideoPreview from "./components/VideoPreview";

export default function AllVideosScreen() {
    const [isLoading, setIsLoading] = React.useState(false)
    const [videos, setVideos] = React.useState([])

    useEffect(() => {
        setIsLoading(true)
        const getRequestPath = apiPath + videosPath;
        console.log(getRequestPath)

        fetch(getRequestPath)
            .then(res => {
                if (!res.ok) {
                    throw new Error('Failed to fetch all videos preview');
                }
                return res.json();
            })
            .then(json => {
                setVideos(json);
                setIsLoading(false);
            })
            .catch(error => {
                Alert.alert("Error", "Error when loading all video previews")
                setIsLoading(false);
            });

    }, []);

    return (
        <View style={styles.container}>
            {/*<StatusBar theme="auto" />x*/}
            <FlatList data={videos} renderItem={({item}) => <VideoPreview {...item}/>}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'grey',
    },
});
