import React, {useEffect, useState} from 'react';
import { View, StyleSheet, Text } from 'react-native';

export default function SubsElement({reference, subInfo, defaultActiveMarker}) {
    const { content, start, end } = subInfo;
    const [active, setActive] = useState(defaultActiveMarker);

    const handleSetTime = (time) => {
        reference.current.setPositionAsync(time);
        reference.current.playAsync(time);
        setActive(true)
        // setCurrentTime(time);
    };
    useEffect(() => {
        setActive(defaultActiveMarker)
    }, [defaultActiveMarker]);

    return (
        <View>
            <Text style={active ? styles.active : styles.default }
                  onPress={() => handleSetTime(start)}>
                  {content}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    default: {
        textAlign: "center",
        fontSize: 24, // Change the font size to your desired value
    },
    active: {
        color: 'white',
        textAlign: "center",
        fontSize: 24
    }
});