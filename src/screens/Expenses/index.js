import React, { useState } from 'react';
import { StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/SimpleLineIcons';

import { Container, Area, PageName, UserInfo, 
    Username, ExpensesArea, Description, ExpensesName,
    ExpensesValue, ExpensesDate, LogoutInfo, Logout, List
} from './styles';

export default function Expenses() {
    const [expenses, setExpenses] = useState([]);

    return (
        <>
            <Container>
                <StatusBar barStyle="light-content"/>
                <PageName>Despesas</PageName>
            </Container>

            <Area>
                <UserInfo>
                    <Username>Bem-vindo, Max!</Username>
                    
                    <LogoutInfo>
                        <Logout>Sair</Logout>
                        <Icon name="logout" size={30} color="#E02041" style={{ marginRight: 10 }}/>
                    </LogoutInfo>
                </UserInfo>

                <List 
                    data={expenses}
                    renderItem={() => (
                        <ExpensesArea>
                            <Description>Despesa</Description>
                            <ExpensesName>Aluguel</ExpensesName>

                            <Description>Valor</Description>
                            <ExpensesValue>R$ 20,75</ExpensesValue>

                            <Description>Vencimento</Description>
                            <ExpensesDate>14/05</ExpensesDate>
                        </ExpensesArea>
                    )}
                />
            </Area>
        </> 
    );
}

Expenses.navigationOptions = {
    title: 'Despesas'
};