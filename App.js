import {Button, Text, View, StyleSheet} from "react-native";
import {useState} from "react";
import Titulo from "./components/Titulo";
import BotaoCustomizado from "./components/BotaoCustomizado";

export default function App() {
    const [numero, setNumero] = useState(0);

    function adicionar() {
        setNumero(numero + 1);
    }

    function remover() {
        setNumero(numero - 1);
    }

    return (
        <View style={styles.container}>
            <Titulo valor={numero} texto={"Contador"} />

            {/* BTN */}
            <BotaoCustomizado texto={"Aumentar"} funcao={adicionar}></BotaoCustomizado>
            <BotaoCustomizado texto={"Diminuir"} funcao={remover}></BotaoCustomizado>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 20
    }
})