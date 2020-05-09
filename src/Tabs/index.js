import { createAppContainer } from 'react-navigation';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';

import Expenses from '../screens/Expenses';
import Paidoff from '../screens/Paidoff';

const Tab = createAppContainer(
    createMaterialTopTabNavigator({
        Expenses,
        Paidoff
    }, {
        tabBarOptions: {
            upperCaseLabel: false,

            tabStyle: {
                height: 60,
                backgroundColor: '#191111'
            },

            activeTintColor: '#ffffff',
        },

        tabBarPosition: 'bottom',
    })
);

export default Tab;