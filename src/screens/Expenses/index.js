import React, { useState, useEffect } from 'react';
import { StatusBar, AsyncStorage } from 'react-native';
import Icon from 'react-native-vector-icons/SimpleLineIcons';

import { Container, Area, PageName, UserInfo, 
    Username, ExpensesArea, Description, ExpensesName,
    ExpensesValue, ExpensesDate, LogoutInfo, Logout, List,
    ButtonLogout
} from './styles';

import api from '../../services/api';

export default function Expenses({ navigation }) {
    const dwellerName = navigation.getParam('dwellerName');

    const [expenses, setExpenses] = useState([]);

    useEffect(() => {
        async function loadExpenses() {
            const id = await AsyncStorage.getItem('dwellerId');
            const dwellerId = JSON.parse(id);

            const response = await api.get('/unpaid', {
                headers: {
                    Authorization: dwellerId
                }
            });

            setExpenses(response.data);
        }

        loadExpenses();
    }, []);

    function handleLogout() {
        AsyncStorage.clear();
        navigation.navigate('Login');
    }

    return (
        <>
            <Container>
                <StatusBar barStyle="light-content"/>
                <PageName>Despesas</PageName>
            </Container>

            <Area>
                <UserInfo>
                    <Username> {`Bem-vindo, ${dwellerName}!`} </Username>
                    
                    <LogoutInfo>
                        <Logout>Sair</Logout>
                        <ButtonLogout onPress={handleLogout}>
                            <Icon name="logout" size={30} color="#E02041" style={{ marginRight: 10 }}/>
                        </ButtonLogout>
                    </LogoutInfo>
                </UserInfo>

                <List 
                    data={expenses}
                    renderItem={({ item }) => (
                        <ExpensesArea>
                            <Description>Despesa</Description>
                            <ExpensesName> {item.title} </ExpensesName>

                            <Description>Valor</Description>
                            <ExpensesValue> {item.value} </ExpensesValue>

                            <Description>Vencimento</Description>
                            <ExpensesDate> {item.date} </ExpensesDate>
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