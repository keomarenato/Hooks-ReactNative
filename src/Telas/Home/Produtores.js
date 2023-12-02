import { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text } from "react-native";

import { carregaProdutores } from "../../servicos/carregaDados";
import { Produtor } from "./components/Produtor";
import useProdutores from "../../hooks/useProdutores";

export default function Produtores() {
  const [titulo, lista] = useProdutores()

  const TopoLista = () => {
    return
    <>
      <Text style={estilos.titulo}>{titulo}</Text>
    </>

  }

  return (
    <FlatList
      data={lista}
      renderItem={({ item }) => <Produtor {...item} />}
      keyExtractor={(nome) => nome}
      ListHeaderComponent={TopoLista}
    />
  )
}

const estilos = StyleSheet.create({
  titulo: {
    fontSize: 20,
    lineHeight: 32,
    marginHorizontal: 16,
    color: "#464646",
    fontWeight: 'bold'
  }
})