import React, { Component } from 'react';
import { 
  Platform,
  Button, 
  View, 
  StyleSheet,
  Text, 
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import {Link} from 'react-router-native';

export default class InspectorStackScreen extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      disabled: false
    }
  }

  componentDidMount() {
    this.props.addTitle(this.props.match.params.title );
  }

  componentWillMount(){
    this.props.removeLastTitle();
    const { params } = this.props.match;
    const { lists } = this.props;
    this.props.fetchQuests(lists[parseInt(params.id)].Id);
  }
  
  render() {
    const { params } = this.props.match;
    const { lists } = this.props;
    return (
      <ScrollView style={styles.container}>
        <View style={styles.textWrapper}>
            <Text style={styles.description}>{lists[parseInt(params.id)].Description}</Text>
        </View>
        <View style={styles.warningWrapper}>
            <Text style={styles.contentWarning}>
               {`${lists[parseInt(params.id)].StartPageText
                .replace(/&laquo;/g, '"')
                .replace(/&raquo;/g, '"')
                .replace(/&nbsp;/g, '')}`
                }
            </Text>
        </View>
        <View style={styles.textWrapper2}>
            <Text style={styles.attention}>При работе с проверочным листом вам будут последовательно показываться вопросы. После ответа на каждый вопрос вы увидите комментарии к своему ответу.</Text>
        </View>
        <View style={styles.rulesWrapper}>
            <View style={{
                width: 13,
                height: 13,
                backgroundColor:'rgb(61, 184, 120)',
                borderRadius: 7,
                marginTop: 4
            }}/>
            <Text style={styles.textRules}>{lists[parseInt(params.id)].NoProblemsResponce
              .replace(/&laquo;/g, '"')
              .replace(/&raquo;/g, '"')
              .replace(/&nbsp;/g, '')}</Text>
        </View>
        <View style={styles.rulesWrapper}>
            <View style={{
              width: 13,
              height: 13,
              backgroundColor: 'rgb(244, 111, 95)',
              borderRadius: 7,
              marginTop: 4
            }}/>
            <Text style={styles.textRules}>{lists[parseInt(params.id)].ProblemsResponce
            .replace('::RESPONCE::', '')
            .replace(/&quot;/g,"\"")}</Text>
        </View>
        {this.props.fetched &&
        <Link 
          style={styles.btnNext}
          disabled={this.state.disabled}
          to={`/inspector/quest/${params.id}/${lists[parseInt(params.id)].Id}`}          
          onPress={() => {
              this.setState({disabled: true})            
              setTimeout(()=>{
                this.setState({disabled: false})                            
              }, 2000)
            }
          }
        >
            <Text style={styles.btnText}>Далее</Text>
        </Link>
        }
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  textWrapper: {
    paddingHorizontal: 17,
    paddingTop: 24,
    paddingBottom: 17
  },
  description: {
      fontSize: 17,
      textAlign: 'left',
      lineHeight: 22,
      color: 'rgb(71, 84, 89)',
      fontWeight: 'bold'
  },
  warningWrapper: {
      backgroundColor: 'rgb(242, 246, 249)',
      paddingTop: 14,
      paddingBottom: 14,
      paddingLeft: 17,
      paddingRight: 15
  },
  warning: {
      fontSize: 15,
      color: 'rgb(146, 115, 90)',
      textAlign: 'left',
      lineHeight: 20,
  },
  contentWarning: {
    fontSize: 15,
    textAlign: 'left',
    lineHeight: 20,
  },
  textWrapper2: {
    paddingHorizontal: 17,
    paddingTop: 17,
    paddingBottom: 17,
  },
  attention: {
    fontSize: 17,
    textAlign: 'left',
    lineHeight: 22,
    color: 'rgb(71, 84, 89)',
    fontWeight: 'bold'
  },
  rulesWrapper: {
    flexDirection:'row',
    paddingHorizontal: 16,
    paddingBottom: 11
  },
  textRules: {
    fontSize: 15,
    textAlign: 'left',
    lineHeight: 20, 
    color: 'rgb(143, 142, 148)',
    paddingLeft:7 
  },
  btnNext: {
      width: 341,
      backgroundColor: 'rgb(77, 141, 176)',
      borderRadius: 6,
      alignSelf: 'center',
      marginBottom: 17
  },
  btnText: {
      color: 'white',
      textAlign: 'center',
      paddingTop: 17,
      paddingBottom: 16,
  }
});