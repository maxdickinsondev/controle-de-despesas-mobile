import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Login from './pages/Login';
import Tabs from './Tabs';

const Routes = createAppContainer(
    createStackNavigator({
        Login,
        Tabs
    }, {
        headerMode: 'none'
    })
);

export default Routes;