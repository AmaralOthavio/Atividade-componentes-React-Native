import React from "react";
import { ScrollView, View } from "react-native";
import Titulo from "./components/Titulo";
import CardPerfil from "./components/CardPerfil";
import BotaoCustomizado from "./components/BotaoCustomizado";
import ListaItens from "./components/ListaItens";
import CampoTexto from "./components/CampoTexto";

export default function App() {
    const missoes = [
        "Salvar Nova York",
        "Enfrentar o Duende Verde",
        "Ajudar o Doutor Estranho",
        "Proteger Mary Jane",
        "Estudar para as provas"
    ];

    return (
        <ScrollView style={{ flex: 1, padding: 20 }}>
            <Titulo texto="🕷️ Bem-vindo ao App do Homem-Aranha!" />
            <CardPerfil />
            <BotaoCustomizado label="Clique aqui" cor="red" />
            <Titulo texto="Missões:" />
            <ListaItens itens={missoes} />
            <CampoTexto />
        </ScrollView>
    );
}
