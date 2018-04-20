import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

class PersonnageComponents extends React.Component 
{
    render()
    {
        return (
            // JSX render
            <View>
                <Text>Ordelan</Text>
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