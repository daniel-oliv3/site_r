import React, {useCallback, useState} from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { Alert, Text } from 'react-native';

import api from '../../config/configApi';
import { FlatList } from 'react-native-gesture-handler';

export default function Home(){

    const [orcamentos, setOrcamentos] = useState('');

    const getOrcamento = async () => {
        try {
            const response = await api.get('/listar-orcamento');
            setOrcamentos(response.data.orcamento);
            console.log(response.data.orcamento);
        }catch(err){
            Alert.alert("", "Erro: Nenhum orçamento encontrado! tente mais tarde!")
        }
    }


    useFocusEffect(
        useCallback(() => {
            getOrcamento();
        },[])
    )

    return (
        <>
            <Text>Listar Orçamentos</Text>
            <FlatList
                data={orcamentos}
                renderItem={({ item }) => (
                    <>
                        <Text>{item.id}</Text>
                        <Text>{item.name}</Text>
                        <Text>{item.subject}</Text>
                    </>
                )} keyExtractor={orcamentos => String(orcamentos.id)}
            />
        </>
    )
}