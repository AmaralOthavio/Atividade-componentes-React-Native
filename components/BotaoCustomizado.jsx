import React from "react";
import { Button, Alert, View } from "react-native";

export default function BotaoCustomizado(props) {
    return (
        <View style={{ marginVertical: 10 }}>
            <Button
                title={props.label}
                color={props.cor}
                onPress={() => Alert.alert("Você clicou no botão!")}
            />
        </View>
    );
}
