import React, { Component } from 'react';
import {
    Platform,
    View, 
    StyleSheet,
    Text, 
    TouchableOpacity,
    Dimensions
} from 'react-native';
import {
    RulesItem
} from '../';
  
const {width, height} = Dimensions.get('window')

export default class RulesItemWrapper extends Component {
    render() {
      return (
        <View style={styles.container}>
            <View>
                <RulesItem 
                    name={this.props.__rule1}
                    _answer={true}
                />
                <RulesItem 
                    name={this.props.__rule2}
                    _answer={false}
                />
            </View>
        </View>
      );
    }
  }

const styles = StyleSheet.create({
   container: {

   },
   rulesWrapper: {
        flexDirection: 'row',
        paddingTop: 16,
        paddingHorizontal: 16,
        paddingBottom: 11
    },
    textRules: {
        fontSize: 15,
        textAlign: 'left',
        lineHeight: 20, 
        color: 'rgb(143, 142, 148)', 
        paddingLeft: 17
    },
});

/* 
 { !this.props._isPressed && !this.props._testIsEnd && !this.props._index > 0 &&
                <RulesItem 
                  name={this.props._rule1}
                  _answer={true}
                />
              }
              { !this.props._isPressed && !this.props._testIsEnd && !this.props._index > 0 &&
                <RulesItem 
                  name={this.props._rule2}
                  _answer={false}
                />
              }
*/