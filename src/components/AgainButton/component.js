import React, { Component } from 'react';
import {
    Platform,
    Button,
    View,
    StyleSheet,
    TouchableOpacity,
    Text,
    Image,
    Dimensions
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { clearUserAnswers } from '../../actions/clearUserAnswers';
import { againButtonPressed } from '../../actions/againButtonPressed';

const {width, height} = Dimensions.get('window')

class AgainButton extends React.Component {

    render() {
        return (
            <TouchableOpacity 
                style={styles.againButton} 
                onPress={() => {
                    this.props.againButtonPressed(true)
                    setTimeout(() => {
                        this.props.clearUserAnswers();  
                    });                  
                    //this.props._onPress; 
                }}
            >
                <Text style={styles.againButtonText}>Заново</Text>
            </TouchableOpacity>
        );
    }
}

const mapStateToProps = (state) => ({});
  
  const mapDispatchToProps = (dispatch) => bindActionCreators(
    { 
        clearUserAnswers,
        againButtonPressed 
    },
    dispatch
  );
  
  export default connect(mapStateToProps, mapDispatchToProps)(AgainButton)

const styles = StyleSheet.create({
    againButton:{
        width: width/4,
        height: 50,
        backgroundColor: 'transparent',
        borderRadius: 6,
        alignSelf: 'flex-end',
        marginTop: -30,
        zIndex: 1
    },
    againButtonText:{
        textAlign: 'center',
        paddingTop: 15,
        paddingBottom: 16,
        fontSize: 17,
        lineHeight: 22,
        fontWeight: 'bold',
        color: 'rgb(216, 230, 238)'
    }
});
