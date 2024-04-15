import * as React from 'react';
import {View, StyleSheet, StatusBar, Text, ActivityIndicator, FlatList} from 'react-native';
import { useEffect, useState } from "react";
import {cdnPath, refreshInterval} from "../../../data";
import SubsElement from "./SubsElement";

export default function SubsBox({reference, subsArray }) {
    const keyExtractor = (item, index) => index.toString();
    const [activeSubs, setActiveSubs] =  useState([]);

    useEffect(() => {
        const execute = async () => {
            const status = await reference.current.getStatusAsync();
            if (status.isPlaying) {
                let booleans = []
                subsArray.forEach((sub, i) => {
                    if (status.positionMillis > sub.start && status.positionMillis < sub.end) {
                        booleans[i] = true;
                    } else {
                        booleans[i] = false
                    }
                });
                // console.log(booleans)
                setActiveSubs(booleans)
            }
        };

        const interval = setInterval(execute, refreshInterval); // Log position every second

        return () => clearInterval(interval); // Cleanup interval
    }, []);

    // useEffect(() => {
    //     console.log(activeSubs); // Log activeSubs whenever it changes
    // }, [activeSubs]);

    return (
        <View style={styles.container}>
            {/*<StatusBar theme="auto" />*/}
            <FlatList keyExtractor={keyExtractor} data={subsArray} renderItem={({item, index}) => <SubsElement reference={reference} subInfo={item} defaultActiveMarker={activeSubs[index]}/>}/>
            {/*/!*{subsArray.map((el, i) => <SubsElement reference={reference} key={i} subInfo={el}/>)}*!/    //  active={activeSubs[index]}*/}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 600,
        paddingBottom: 200,
        // flex: 1, // Ensure the FlatList fills available space
    },
});
