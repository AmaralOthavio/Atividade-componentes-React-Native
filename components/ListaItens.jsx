import React from 'react';
import { View, Text } from 'react-native';

export default function ListaItens({ array }) {
    // Usando a função map, para cada componente do array eu posso retornar elementos.
    return (
        <View>
            {array.map((item, index) => (
                <Text key={index}>{item}</Text>
            ))}
        </View>
    );
}
