import React from 'react'; //on importe la librairie react
import { View, Button, TextInput } from 'react-native' // on importe nos components

class Search extends React.Component{ // création d'une classe qui hérite de react.component
    //les components se présentent comme une classe
    // les components rendent les éléments graphiques
    // donc obligatoirement render
    render(){
        return(
            <View style={{ marginTop: 40 }}>
                <TextInput style={styles.textinput} placeholder='Sea-Ride Test'/>
                <Button style={styles.textinput} title='Rechercher'  onPress={() => {}}/>
            </View>

        )
    }
}
const styles = {
    textinput: {
        marginLeft: 5,
        marginRight: 5,
        height: 50,
        borderColor: '#000000',
        borderWidth: 1,
        paddingLeft: 5
    }
}

export default Search