import React, { Component } from 'react';
import {
    Platform,
    View, 
    StyleSheet,
    Text, 
    TouchableOpacity,
    Image,
} from 'react-native';
import { connect } from 'react-redux'
import {
    Button,
  } from '../';

class ButtonsGroup extends Component {
  render() {
    return (
        <View style={styles.container}>
            <Button 
                large={false} 
                name={this.props.anketa[this.props.index].answers[0].text}
                _onPress={this.props.buttonLeft}
            />
            <Button 
                large={false} 
                name={this.props.anketa[this.props.index].answers[1].text}
                _onPress={this.props.buttonRight}
            />

           {this.props.showPassButton &&
            <Button 
                large={true} 
                name={this.props.anketa[this.props.index].answers[2].text}
                _onPress={this.props.buttonPass}
            /> 
            }
        </View>
    );
  }
}

const mapStateToProps = (state) => ({
    anketa: state.surveys.anketa,
  });
  
export default connect(mapStateToProps)(ButtonsGroup)

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgb(242, 246, 249)',
        alignItems: 'center',
        flexDirection:'row',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        flex: 1,
        paddingHorizontal: 17
    },
});