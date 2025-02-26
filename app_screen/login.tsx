import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function Login(){
    return(
        <View style={estilos.container}>
            <Text style={estilos.titulo} >PODAI</Text>
            <Text style={estilos.labels}>Usuario</Text>
            <TextInput placeholder="Usuario" style={estilos.cajas}/>
            <Text style={estilos.labels} >Password</Text>
            <TextInput placeholder="Password" style={estilos.cajas} />
            <Button title="LOGIN" color={'#4B2E1E'}/>
        </View>

    )
}

const estilos = StyleSheet.create({
    titulo:{
        fontSize:30,
        color:'#4B2E1E',
        fontWeight:'bold',
        alignSelf:'center'
    },
    container:{
        backgroundColor:'#EDE0D4',
        flex:1,
        alignItems:'stretch',
        justifyContent:'center',
        paddingHorizontal:20
    },
    labels:{
        fontSize:15,
        fontWeight:'700',
        color:'#4B2E1E'
    },
    cajas:{
        borderWidth:3,
        borderRadius:7,
        borderColor:'#4B2E1E',
        padding:10,
        marginVertical:10
    }
})