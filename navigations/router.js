//import { StackNavigator } from 'react-navigation';
import { NavigationExperimental } from 'react-native-deprecated-custom-components';
import PersonnageComponents from '../containers/Personnages';
import PantheonComponents from "../containers/Pantheon";


const RootStack = StackNavigator(
    {
        //Person: PersonnageComponents,
        Pantheon: PantheonComponents

    },
    //{
    //    initialRouteName: 'Person',
    //}
);

export default RootStack;