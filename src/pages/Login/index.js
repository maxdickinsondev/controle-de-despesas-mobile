import React, { useState } from 'react';
import { AsyncStorage } from 'react-native';

import bg from '../../assets/images/background.png';

import { Background, Container, InputArea, InputEmail, 
    InputPassword, ButtonText, ButtonSubmit, NameApp,
    LogoArea
} from './styles';

import api from '../../services/api';

export default function Login({ navigation }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function handleLogin() {
        const data = {
            email,
            password
        };

        try {
            const response = await api.post('/login', data);

            await AsyncStorage.setItem('dwellerId', JSON.stringify(response.data.dwellerId));
            await AsyncStorage.setItem('dwellerName', JSON.stringify(response.data.name));
            navigation.navigate('Tabs');
        } catch (error) {
            alert('Tente novamente mais tarde.');
        }
    }

    return (
        <Background source={bg}>
            <Container>
                <LogoArea>
                    <NameApp>PoupeMax</NameApp>
                </LogoArea>

                <InputArea>
                    <InputEmail
                        placeholder="E-mail"
                        value={email}
                        onChangeText={(text) => setEmail(text)}
                    />

                    <InputPassword 
                        secureTextEntry={true}
                        placeholder="Password"
                        value={password}
                        onChangeText={(text) => setPassword(text)}
                    />
                </InputArea>

                <ButtonSubmit onPress={handleLogin}>
                    <ButtonText>Entrar</ButtonText>
                </ButtonSubmit>
            </Container>
        </Background>
    );
}
