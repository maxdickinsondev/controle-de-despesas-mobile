import React, { useState, useEffect } from 'react';
import { StatusBar, AsyncStorage } from 'react-native';

import { Container, List, PageName,
    Description, ExpensesName,
    ExpensesValue, ExpensesDate, ExpensesInfo,
} from './styles';

import api from '../../services/api';

export default function Paidoff() {
    const [expenses, setExpenses] = useState([]);

    useEffect(() => {
        async function loadExpenses() {
            const id = await AsyncStorage.getItem('dwellerId');
            const dwellerId = JSON.parse(id);

            const response = await api.get('/paid', {
                headers: {
                    Authorization: dwellerId
                }
            });

            setExpenses(response.data);
        }

        loadExpenses();
    }, []);

    return (
        <>
            <Container>
                <StatusBar barStyle="light-content"/>
                <PageName>Quitadas</PageName>
            </Container>

            <List
                data={expenses}
                renderItem={({ item }) => (
                    <ExpensesInfo>
                        <Description>Despesa</Description>
                        <ExpensesName> {item.title} </ExpensesName>

                        <Description>Valor</Description>
                        <ExpensesValue> R$ {item.value} </ExpensesValue>

                        <Description>Vencimento</Description>
                        <ExpensesDate> {item.date} </ExpensesDate>
                    </ExpensesInfo>
                )}
            />
        </> 
    );
}

Paidoff.navigationOptions = {
    title: 'Quitadas'
}

