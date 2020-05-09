import React, { useState } from 'react';

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

        console.log({
            email,
            password
        });

        try {
            await api.post('/login', data);
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
