import * as React from 'react';
import { FlatList, Text, View } from 'react-native';
import firestore from '@react-native-firebase/firestore';


const styles = {
  container: {
      flex: 1,
      marginTop: -220,
  },
};

const EntretenimientoScreen = () => {

    const [data, setData] = React.useState ()  

    async function loadData(){
        try{

          const noticias_inicio = await firestore().collection('Noticias').get()
          console.log(noticias_inicio.docs)
          setData(noticias_inicio.docs)
        } catch(e){
            console.log(e)
        }
    }

    React.useEffect(() => {
        loadData()
    }, [])

    function renderItem({ item }) {
        return(
          <View style = {{ flexDirection: 'row', margin: 10, }}>
              <Text>{ item.data().contenido }</Text>
              <Text>{ item.data().id }</Text>
              <Text>{ item.data().nombre }</Text>
          </View>
        )
    }

    return (
      
      <View style={ styles.container}  >
      <FlatList
         data = {data}
         renderItem = {renderItem }
         keyExtractor ={ item => item.id}
      />
      </View>
  );
}
  export default EntretenimientoScreen