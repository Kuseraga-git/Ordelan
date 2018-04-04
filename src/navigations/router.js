import { StackNavigator } from 'react-navigation';
import { PersonnageComponents } from '../containers/Personnages';


const RootStack = StackNavigator(
    {
        Person: {
            // varible: class ( IMPORTANT importer la class ) 
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