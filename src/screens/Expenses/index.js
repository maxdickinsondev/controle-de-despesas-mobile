import React, { useState, useEffect } from 'react';
import { StatusBar, AsyncStorage, ActivityIndicator } from 'react-native';
import Icon from 'react-native-vector-icons/SimpleLineIcons';

import { Container, Area, PageName, UserInfo, 
    Username, ExpensesArea, Description, ExpensesName,
    ExpensesValue, ExpensesDate, LogoutInfo, Logout, List,
    ButtonLogout, AreaLoading, ContainerLoading
} from './styles';

import api from '../../services/api';

export default function Expenses({ navigation }) {
    const [dwellerName, setDwellerName] = useState('');
    const [expenses, setExpenses] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        async function loadExpenses() {
            setLoading(true);

            const id = await AsyncStorage.getItem('dwellerId');
            const dwellerId = JSON.parse(id);

            const name = await AsyncStorage.getItem('dwellerName');
            const dwellerName = JSON.parse(name);

            const response = await api.get('/unpaid', {
                headers: {
                    Authorization: dwellerId
                }
            });

            setDwellerName(dwellerName);
            setExpenses(response.data);
            setLoading(false);
        }

        loadExpenses();
    }, []);

    async function handleLogout() {
        await AsyncStorage.clear();
        navigation.navigate('Login');
    }

    if (loading) {
        return (
            <ContainerLoading>
                <AreaLoading>
                    <ActivityIndicator size={40} color="#E02041" />
                </AreaLoading>
            </ContainerLoading>
        );
    } else {
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
}

Expenses.navigationOptions = {
    title: 'Despesas'
};