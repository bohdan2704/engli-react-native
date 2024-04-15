import * as React from 'react';
import {View, StyleSheet, StatusBar, Text, ActivityIndicator, Alert} from 'react-native';
import { useEffect, useState } from "react";
import {apiPath, subsPath} from "../../../data";
import SubsBox from "./SubsBox";

export default function SubsContainer({ reference, subsFileName}) {
    const [subsArray, setSubsArray] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true)
        const getRequestPath = apiPath + subsPath + subsFileName;

        fetch(getRequestPath)
            .then(res => {
                if (!res.ok) {
                    throw new Error('Failed to fetch data');
                }
                return res.json();
            })
            .then(json => {
                setSubsArray(json);
                setIsLoading(false);
            })
            .catch(error => {
                Alert.alert("Error", "Error when loading subtitles")
                setIsLoading(false);
            });
    }, [subsFileName]);

    return (
        <View>
            {
                isLoading ? (
                <View style={styles.loadingContainer}>
                    <ActivityIndicator size="large" color="#0000ff" />
                    <Text style={{textAlign: "center"}}>Subs are loading</Text>
                </View>
            ) : (
                <SubsBox reference={reference} subsArray={subsArray}/>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    loadingContainer: {
        justifyContent: 'center',
        // alignItems: 'center',
    },
});
