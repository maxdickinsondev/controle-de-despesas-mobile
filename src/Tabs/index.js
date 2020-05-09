import { createAppContainer } from 'react-navigation';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';

import Expenses from '../screens/Expenses';
import Paidoff from '../screens/Paidoff';

const Tab = createAppContainer(
    createMaterialTopTabNavigator({
        Expenses,
        Paidoff
    })
);

export default Tab;