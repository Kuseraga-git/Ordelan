import { StackNavigator } from 'react-navigation';

const RootStack = StackNavigator(
    {
        Person: {
            Screen: PersonneContainer,
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