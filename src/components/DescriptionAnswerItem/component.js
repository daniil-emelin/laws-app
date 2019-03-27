import React, { Component } from 'react';
import {
    Platform,
    View, 
    StyleSheet,
    Text,
    Dimensions
} from 'react-native';
import {
  RulesItem,
  RulesItemWrapper
} from './../../components/';
import { connect } from 'react-redux'
import surveys from '../../reducers/surveys';
  
const {width, height} = Dimensions.get('window')

class DescriptionAnswerItem extends Component {
    render() {
      return (
        <View style={styles.answerWrapper}>
            <View style={{
                width: 13,
                height: 13,
                backgroundColor: !!this.props.answers && this.props.answers[this.props.indexQ].right ? 'rgb(61, 184, 120)':  'rgb(244, 111, 95)' ,
                borderRadius: 7,
                marginTop: 4
            }} />
            <Text style={styles.descriptionText}>
            {`${this.props._answerDescription
              .replace(/&laquo;/g, '"')
              .replace(/&raquo;/g, '"')
              .replace(/&nbsp;/g, '')}`}
            </Text>
        </View>
      );
    }
  }

const mapStateToProps = (state) => ({
  indexQ: state.surveys.indexQ,
  answers: state.surveys.answers,
});


export default connect(mapStateToProps)(DescriptionAnswerItem)

const styles = StyleSheet.create({
  descriptionWrapper:{
    backgroundColor: 'rgb(255,255,255)',
    marginBottom: 50,
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