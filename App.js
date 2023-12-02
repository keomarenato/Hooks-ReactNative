
import { SafeAreaView, StyleSheet } from 'react-native';
import Home from './src/Telas/Home';


export default App = () => {
  return (
    <SafeAreaView styl={estilos.tela} >
      <Home />
    </SafeAreaView>
  );
}

const estilos = StyleSheet.create({
  tela: {
    flex: 1
  }
})