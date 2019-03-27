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
  RulesItem,
  RulesItemWrapper,
  DescriptionAnswerItem
} from './../../components/';
  
const {width, height} = Dimensions.get('window')

export default class DescriptionItem extends Component {
    render() {
      return (
        <View style={styles.descriptionWrapper}>
            <View>
              { this.props._isPressed && !this.props._testIsEnd &&
              <DescriptionAnswerItem
                _answerDescription={this.props._descriptionText}
                right={this.props._right}
              />
              }
              { !this.props._isPressed && !this.props._testIsEnd && !this.props._index > 0 &&
                <RulesItemWrapper 
                  __rule1={this.props._rule1}
                  __rule2={this.props._rule2}
                />
              }
            </View> 
            {/* { this.props._moreIsPressed && !this.props._testIsEnd &&
              <View style={styles.rulesWrapper}>
                  <Text style={styles.moreText}>{this.props._moreText}</Text>
              </View>
            }
            { this.props._isPressed && !this.props._testIsEnd &&
              <View style={styles.moreWrapper}>
                  <TouchableOpacity onPress={this.props._onPress}>
                      <Text style={styles.more}>Подробнее</Text>
                  </TouchableOpacity>
              </View>
            } */}
        </View>
      );
    }
  }

const styles = StyleSheet.create({
  descriptionWrapper:{
    backgroundColor: 'rgb(255,255,255)',
    paddingBottom: 90
  },
  answerWrapper: {
    flexDirection:'row',
    paddingTop: 16,
    paddingHorizontal: 16,
    paddingBottom: 11
  },
  descriptionText: {
    fontSize:14,
    lineHeight: 20,
    color:'rgb(143, 142, 148)',
    paddingLeft: 17
  },
  rulesWrapper: {
    marginTop: 16,
    paddingHorizontal: 16,
    paddingBottom: 20
  },
  textRules: {
    fontSize: 15,
    textAlign: 'left',
    lineHeight: 20, 
    color: 'rgb(143, 142, 148)', 
  },
  moreWrapper:{
    paddingLeft: 54,
    marginBottom: 16
  },
  more: {
    width: 78,
    height: 20,
    fontSize: 14,
    lineHeight: 20,
    color: 'rgb(166, 198, 215)'
  },
  moreText:{
    width:304, 
    textAlign:'left',
    color: 'rgb(71, 84, 89)',
    paddingLeft: 40,
    fontWeight:'400' 
  },
});