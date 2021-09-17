import React, {useCallback, useState} from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { Alert, Text } from 'react-native';


import { Container, ListData, ItemData, TitleItem, DescItem } from './styles';

import api from '../../config/configApi';


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
        <Container>
            <ListData
                data={orcamentos}
                renderItem={({ item }) => (
                    <ItemData>
                        <TitleItem>{item.id + " - " + item.name}</TitleItem>
                        <DescItem>{item.subject}</DescItem>
                    </ItemData>
                )} keyExtractor={orcamentos => String(orcamentos.id)}
            />
        </Container>
    )
}