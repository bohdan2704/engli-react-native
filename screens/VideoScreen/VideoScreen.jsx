import * as React from 'react';
import {View, StyleSheet, Button, Text, ActivityIndicator} from 'react-native';
import { Video, ResizeMode } from 'expo-av';
import {apiPath, cdnPath} from "../../data";
import SubsContainer from "./components/SubsContainer";

// {videoName, format}
export default function VideoScreen({route}) {
    const {videoName, engSubsName} = route.params;
    const video = React.useRef(null);
    const [status, setStatus] = React.useState({});
    const [currentTime, setCurrentTime] = React.useState(0);
    const [isLoading, setIsLoading] = React.useState(false)

    const handlePlayPause = () => {
        if (status.isPlaying) {
            // console.log(status)
            video.current.pauseAsync();
        } else {
            video.current.playAsync();
        }
    };

    return (
        <View style={styles.container}>
            {/*{console.log(route.params)}*/}
            <Video
                ref={video}
                style={styles.video}
                source={{
                    uri: cdnPath+videoName,
                }}
                // useNativeControls
                resizeMode={ResizeMode.CONTAIN}
                isLooping
                onLoadStart={() => setIsLoading(true)}
                onReadyForDisplay={() => setIsLoading(false)}
                positionMillis={currentTime}
                onPlaybackStatusUpdate={status => setStatus(status)}
            />

            {
                isLoading ? (
                    <View>
                        <ActivityIndicator
                            animating
                            size="large"
                        />
                        <Text style={{textAlign: "center"}}>Video is loading</Text>
                    </View>
                ) : (
                    <View>
                        <Button
                            title={status.isPlaying ? 'Pause' : 'Play'}
                            onPress={handlePlayPause}
                        />
                        <SubsContainer reference={video} subsFileName={engSubsName} status={status}/>
                    </View>
                )
            }
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'red',
    },
    video: {
        // flex: 1
        width: '100%',
        height: 300,
    },
    buttons: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
});
