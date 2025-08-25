import React, { useState } from "react";
import { View, TextInput, Button, Alert } from "react-native";

export default function CampoTexto() {
    const [texto, setTexto] = useState("");

    return (
        <View style={{ marginTop: 20 }}>
            <TextInput
                placeholder="Digite sua mensagem para o Homem-Aranha"
                value={texto}
                onChangeText={setTexto}
                style={{ borderWidth: 1, padding: 8, marginBottom: 10 }}
            />
            <Button
                title="Enviar"
                color="red"
                onPress={() => Alert.alert("Mensagem:", texto)}
            />
        </View>
    );
}
