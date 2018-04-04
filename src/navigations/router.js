import { StackNavigator } from 'react-navigation';
import PersonnageComponents from '../containers/Personnages';


const RootStack = StackNavigator(
    {
        Person: PersonnageComponents,
        
    },
    {
        initialRouteName: 'Person',
    }
);

export default RootStack;