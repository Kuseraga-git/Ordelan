import { StackNavigator } from 'react-navigation';

const RootStack = StackNavigator(
    {
        Person: {
            Screen: App
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