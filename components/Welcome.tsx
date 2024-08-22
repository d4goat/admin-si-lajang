import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

export const Welcome = () => {
    const router = useRouter()
    return (
        <View style={{ width: '100%' }} >
            <Text style={styles.head} >Halo Dek</Text>
            <Text style={styles.subTitle} >Halo Dek</Text>
        </View>
    )

}

const styles = StyleSheet.create({
    head: {
        fontSize: 18,
        fontFamily: 'QuickSand',
        fontWeight: "500",
    },
    subTitle: {
        fontSize: 24,
        fontWeight: "700"
    }
})