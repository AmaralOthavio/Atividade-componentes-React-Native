import React from "react";
import { View, Text } from "react-native";

export default function ListaItens(props) {
    return (
        <View style={{ marginTop: 10 }}>
            {props.itens.map((item, index) => (
                <Text key={index}>• {item}</Text>
            ))}
        </View>
    );
}
