import React from 'react';

import bg from '../../assets/images/background.png';

import { Background, Container, InputArea, InputEmail, 
    InputPassword, ButtonText, ButtonSubmit,
} from './styles';

export default function Login({ navigation }) {
    function handleNavigate() {
        navigation.navigate('Tabs');
    }

    return (
        <Background source={bg}>
            <Container>
                <InputArea>
                    <InputEmail
                        placeholder="E-mail"
                    />

                    <InputPassword 
                        secureTextEntry={true}
                        placeholder="Password"
                    />
                </InputArea>

                <ButtonSubmit onPress={handleNavigate}>
                    <ButtonText>Entrar</ButtonText>
                </ButtonSubmit>
            </Container>
        </Background>
    );
}