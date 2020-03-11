import {createAppContainer, createSwitchNavigator} from 'react-navigation';

import Main from './view/Main';
import Spending from './view/Spending';

const Routes = createAppContainer(createSwitchNavigator({Main, Spending}));

export default Routes;
