
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Header from './components/headers';
import StartGame from './screens/startgame';
import GameScreen from './screens/GameScreen';
import { useState } from 'react';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';


export default function App() {

  const [userNumber ,setUserNumber] = useState() 

  const [loaded] = useFonts ({
    Bebas: require ('./assets/fonts/BebasNeue-Regular.ttf')
  })

  if(!loaded) return <AppLoading/>

  const userNumberHandler = value =>{
    setUserNumber(value);
  }
  
  let content = <StartGame onStarGame={userNumberHandler}/>

  if(userNumber!=null){
    content = <GameScreen onBack={userNumberHandler}/>
  }


  return (
    <SafeAreaView>
    <View style={styles.container}>
     <Header   title= "Encabezado"></Header>
     {content}
     </View>
     </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  
});
