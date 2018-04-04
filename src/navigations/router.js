import { StackNavigator } from 'react-navigation';
import { PersonnageComponents } from '../containers/Personnages';


const RootStack = StackNavigator(
    {
        Person: {
            Screen: PersonnageComponents,
        },
        // Caract: {
        //     Screen: caracScreen
        // },
    },
    {
        initialRouteName: 'Person',
    }
);

export default RootStack;