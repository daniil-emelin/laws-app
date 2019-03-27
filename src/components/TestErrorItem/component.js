import React, { Component } from 'react';
import {
    Platform,
    View, 
    StyleSheet,
    Text,
    ScrollView,
    FlatList,
} from 'react-native';
import { connect } from 'react-redux'

class TestErrorItem extends Component {
    _renderItem = (item) => {
        return(
            <View style={styles.errorWrapper}>
              <View style={styles.errorQuestionWrapper}>
                <View style={{
                  width: 8,
                  height: 8,
                  backgroundColor: 'rgb(146, 115, 90)',
                  borderRadius: 7,
                  marginTop: 4
                }}/>
              <Text style={styles.errorQuestion}>{`${item.question
                .replace(/&laquo;/g, '"')
                .replace(/&raquo;/g, '"')
                .replace(/&nbsp;/g, '')}`}</Text>
            </View>
            <Text style={styles.errorAnswer}>{`${item.answer
              .replace(/&laquo;/g, '"')
              .replace(/&raquo;/g, '"')
              .replace(/&nbsp;/g, '')}`}</Text>
            </View>
        )
    }
    render() {
      return (
        <ScrollView style={styles.container}>
            <View style={styles.headerTextWrapper}>
              <Text style={styles.headerText}>Результаты проверки</Text>
            </View>
            <View style={styles.errorTextWrapper}>
              <Text style={styles.errorText}>Выявлены нарушения</Text>
            </View>
            <View style={styles.descriptionTextWrapper}>
            <Text style={styles.descriptionText}>
                В ходе проверки соблюдения требований, предъявляемых 
                к структуре официального сайта образовательной организации 
                в информационно-телекоммуникационной сети "Интернет" и формату представления на нем информации, утвержденных приказом Федеральной службы 
                по надзору в сфере образования 
                и науки от 29 мая 2014 г. № 785.  
            </Text>
            </View>
            <View>
                <Text style={styles.errorTextHeader}>Список нарушений:</Text>
                <FlatList 
                    data={this.props._testErrors}
                    renderItem={({item}) => this._renderItem(item)}
                    keyExtractor={item => item.id}                    
                />
            </View>
        </ScrollView> 
      );
    }
  }

const mapStateToProps = (state) => ({
indexQ: state.surveys.indexQ,
positionQ: state.surveys.positionQ,
survey_id: state.surveys.survey_id,
anketa: state.surveys.anketa,
answers: state.surveys.answers,
});
  
export default connect(mapStateToProps)(TestErrorItem)

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  headerText: {
    fontSize: 20,
    textAlign: 'left',
    lineHeight: 28,
    color: 'rgb(45,113,148)',
    paddingLeft: 17,
    paddingTop: 24,
    paddingBottom:12
  },
  errorTextWrapper: {
    backgroundColor: 'rgb(242, 238, 235)'
  },
  errorText: {
    fontSize: 15,
    textAlign: 'left',
    lineHeight: 20,
    color: 'rgb(146, 115, 90)',
    paddingLeft: 17,
    paddingVertical: 14
  },
  descriptionText: {
    fontSize: 17,
    textAlign: 'left',
    lineHeight: 22,
    color: 'rgb(71, 84, 89)',
    paddingLeft: 17,
    paddingTop: 17
  },
  errorTextHeader:{
    color:'rgb(51, 51, 51)',
    fontSize: 17,
    textAlign: 'left',
    lineHeight: 22,
    paddingLeft: 17,
    paddingTop: 24,
    paddingBottom:12,
    fontWeight: '500'
  },
  errorWrapper:{
    paddingHorizontal: 17,
    paddingVertical: 12
  },
  errorQuestionWrapper:{
    flexDirection: 'row'
  },
  errorAnswer:{
    paddingLeft: 24,
    paddingTop:8,
    fontSize: 17,
    textAlign: 'left',
    lineHeight: 22,
    color:'rgb(71, 84, 89)'
  },
  errorQuestion:{
    paddingLeft: 16,
    color:'rgb(51, 51, 51)',
    fontSize: 17,
    textAlign: 'left',
    lineHeight: 22,
    fontWeight: '500'
  },
});