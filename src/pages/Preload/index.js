import React, { useEffect } from 'react';
import { AsyncStorage } from 'react-native';

import bg from '../../assets/images/background.png';

import { Background } from './styles';

export default function Login({ navigation }) {

    useEffect(() => {
        async function handlePreload() {
            const id = await AsyncStorage.getItem('dwellerId');
            const dwellerId = JSON.parse(id);

            if (dwellerId) {
                navigation.navigate('Tabs');
            } else {
                navigation.navigate('Login');
            }
        }

        handlePreload();
    }, []);

    return (
        <Background source={bg}>
        </Background>
    );
}
