import React, { useState } from "react";

import { Text, View, Image, TextInput, TouchableOpacity, Alert, ActivityIndicator } from "react-native";
import { style } from "./styles";
import Logo from "../../assets/logo.png";
import {MaterialIcons, Octicons} from '@expo/vector-icons';
import { themes } from "../../global/themes";
import { Input } from "../../components/input";
import { Button } from "../../components/Button";
import { useNavigation, NavigationProp } from "@react-navigation/native";

export function Login() {

    const navigation = useNavigation<NavigationProp<any>>();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(true);
    const [loading, setLoading] = useState(false);

    async function getLogin(){
        try {
            setLoading(true);
            if(!email || !password){
                Alert.alert('Atenção','Informe os campos obrigatórios!');
            }

            navigation.reset({routes:[{name:'BottomRoutes'}]});
            
            
        } catch (error) {
            console.log(error);
        }finally{
            setLoading(false);
        }
    }



    return (
        <View style={style.container}>
            <View style={style.boxTop}>
                <Image source={Logo} 
                style={style.logo}
                resizeMode="contain"/>
                <Text style={style.text}>Bem vindo de volta!</Text>
            </View>
            <View style={style.boxMid}>
                <Input 
                value={email}
                onChangeText={setEmail}
                title="ENDEREÇO DE E-MAIL"
                IconRightName="email"
                IconRight={MaterialIcons}
                />
                <Input 
                value={password}
                onChangeText={setPassword}
                title="SENHA"
                IconRightName={showPassword?'eye-closed':'eye'}
                IconRight={Octicons}
                secureTextEntry={showPassword}
                onIconRightPress={()=>setShowPassword(!showPassword)}
                />
                
            </View>
            <View style={style.boxBottom}>
                <Button text="ENTRAR" onPress={getLogin} loading={loading}/>
            </View>
            <Text style={style.textBottom}>Não tem conta? <Text style={style.textBottomCreate}>Crie agora</Text></Text>
        </View>
    )
}   