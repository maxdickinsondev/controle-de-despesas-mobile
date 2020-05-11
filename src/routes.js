import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Preload from './pages/Preload';
import Login from './pages/Login';
import Tabs from './Tabs';

const Routes = createAppContainer(
    createStackNavigator({
        Preload,
        Login,
        Tabs
    }, {
        headerMode: 'none'
    })
);

export default Routes;