import {Button, Text, View, StyleSheet, ScrollView} from "react-native";
import { useState } from "react";
import Titulo from "./components/Titulo";
import BotaoCustomizado from "./components/BotaoCustomizado";
import ListaItens from "./components/ListaItens";
import CardPerfil from "./components/CardPerfil";

export default function App() {
    const [numero, setNumero] = useState(0);
    const [componentes, setComponentes] = useState([]);

    function criarEspada() {
        setComponentes([...componentes, <ListaItens key={numero} array={[" ", "^", "||", "||", "||", "||", "===", "||", "o"]} />]);
        setNumero(numero + 1);
    }

    return (
        <ScrollView style={styles.container}>
            <CardPerfil local_img={"imagem_aqui"} nome={"Ferreiro Rutherfórdio"} descricao={"O ferreiro da cidade"}></CardPerfil>
            <Titulo texto1={"Bem-vindo ao ferreiro!"} texto2={"Peça para ele forjar uma espada"} />
            <Text>Quantidade de espadas: {numero}</Text>

            {/* BTN */}
            <BotaoCustomizado texto={"Forjar Espada"} funcao={criarEspada} />

            {/* Renderizando os componentes adicionados */}
            {componentes}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        gap: 20,
        marginTop: 50
    }
});
