import {Text, View, StyleSheet} from "react-native";

export default function Titulo({ valor, texto }) {
    return (
        <View>
            <Text style={styles.titulo}> {valor} </Text>
            <Text style={styles.subtitulo}> {texto} </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    subtitulo: {
        textAlign: "center",
        fontSize: 24,
        fontWeight: "light",
        color: "black"
    },

    titulo: {
        textAlign: "center",
        fontSize: 36,
        fontWeight: "bold",
        color: "red"
    }
})