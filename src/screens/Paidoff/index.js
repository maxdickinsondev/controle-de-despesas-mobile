import React from 'react';
import { StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/SimpleLineIcons';

import { Container, Area, PageName,
    ExpensesArea, Description, ExpensesName,
    ExpensesValue, ExpensesDate, ExpensesInfo
} from './styles';

export default function Paidoff() {
    return (
        <>
            <Container>
                <StatusBar barStyle="light-content"/>
                <PageName>Quitadas</PageName>
            </Container>

            <Area>
                <ExpensesArea>
                    <ExpensesInfo>
                        <Description>Despesa</Description>
                        <ExpensesName>Aluguel</ExpensesName>

                        <Description>Valor</Description>
                        <ExpensesValue>R$ 20,75</ExpensesValue>

                        <Description>Vencimento</Description>
                        <ExpensesDate>14/05</ExpensesDate>
                    </ExpensesInfo>
                </ExpensesArea>
            </Area>
        </> 
    );
}

Paidoff.navigationOptions = {
    title: 'Quitadas'
}

