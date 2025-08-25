import React from "react";
import { Text } from "react-native";

export default function Titulo(props) {
    return (
        <Text style={{ fontSize: 24, fontWeight: "bold", marginBottom: 10 }}>
            {props.texto}
        </Text>
    );
}
