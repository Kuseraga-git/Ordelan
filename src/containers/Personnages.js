import React from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';


class PersonnageComponents extends React.Component 
{
    render()
    {
        return 
        (
            // JSX render
            <View>
                <Text>test</Text>
            </View>
        )
    }
}

const mapStateToProps = ({ /* variable'object', */ }) => (
    {
        // object: variale.object,
    }
)

const mapDispatchToProps = (dispatch) => (
    {
        // actionObject: (variable) => dispatch(actionObject(variable)),
    }
)

export default connect(mapStateToProps, mapDispatchToProps)(PersonnageComponents);