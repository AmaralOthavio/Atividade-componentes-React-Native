import React from "react";
import { View, Text, Image } from "react-native";

export default function CardPerfil() {
    return (
        <View style={{ alignItems: "center", marginBottom: 20 }}>
            <Image
                source={{ uri: "https://i.imgur.com/5R8z8BM.png" }}
                style={{ width: 120, height: 120, borderRadius: 60 }}
            />
            <Text style={{ fontSize: 18, fontWeight: "bold", marginTop: 10 }}>
                Peter Parker (Homem-Aranha)
            </Text>
            <Text>"Com grandes poderes vêm grandes responsabilidades."</Text>
        </View>
    );
}
