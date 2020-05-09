import styled from 'styled-components';

export const Background = styled.ImageBackground`
    flex: 1;
    opacity: 0.9;
`;

export const Container = styled.View`
    padding: 40px;
    padding-top: 0px;
    flex: 1;
    flex-direction: column;
    justify-content: center;
`;

export const InputArea = styled.View`
    
`;

export const InputEmail = styled.TextInput`
    padding: 10px;
    border: 0.5px solid #E49722;
    border-radius: 4px;
    height: 40px;
    margin-bottom: 10px;
    color: #fff;
`;

export const InputPassword = styled.TextInput`
    padding: 10px;
    border: 0.5px solid #E49722;
    border-radius: 4px;
    height: 40px;
    margin-bottom: 40px;
    color: #fff;
`;


export const ButtonSubmit = styled.TouchableOpacity`
    background: #E49722;
    border-radius: 4px;
    height: 40px;
    align-items: center;
    justify-content: center;
`;

export const ButtonText = styled.Text`
    color: #fff;
    text-transform: uppercase;
    font-weight: bold;
    text-align: center;
`;

export const LogoArea = styled.View`
    align-items: center;
    margin-bottom: 40px;
`;

export const NameApp = styled.Text`
    text-transform: uppercase;
    font-size: 20px;
    color: #fff;
`;