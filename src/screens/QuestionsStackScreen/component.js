import React, { Component } from 'react';
import {
  Platform,
  View,
  StyleSheet,
  Text,
  FlatList,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  Image,
  Linking
} from 'react-native';
import {
  AgainButton,
  EndScreenCard,
  YourAnswerItem,
  Button,
  QuestionItem,
  RulesItem,
  ButtonsGroup,
  TestSuccessfulItem,
  TestErrorItem,
  FooterButtons,
  DescriptionItem,
  QuestionWrapperItem,
  StepIndicator
} from './../../components/';

const { width, height } = Dimensions.get('window')

export default class QuestionsStackScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isPressed: false,
      yesIsPressed: false,
      noIsPressed: false,
      moreIsPressed: false,
      testIsEnd: false,
      showResult: false,
      currentPosition: 0,
      rule1: 'Выбранный вами вариант соответствует требованиям законодательства или им не противоречит. ',
      rule2: 'Проверка выявила нарушение. Текст показываемого комментария будет содержать ссылку на норму законодательства, регламентирующую данный вопрос.',
      isEndTextTittle: 'Проверка завершена!',
      isEndText: 'Нажмите на кнопку, чтобы получить перечень ошибок и сформировать Акт с результатами проверки',
      moreText: 'Для размещения информации на Сайте должен быть создан специальный раздел "Сведения об образовательной организации». Информация должна иметь общий механизм навигации по всем страницам специального раздела. Механизм навигации должен быть представлен на каждой странице специального раздела. оступ к специальному разделу должен осуществляться с главной (основной) страницы Сайта, а также из основного навигационного меню Сайта.',
      testErrors: [],
    }
  }
  
  nextSlide = () => {
    this.props.nextQuestion();
    this.nextBtnClick();
  }

  nextBtnClick = () => {
    this.setState({
      isPressed: !this.state.isPressed
    })
    this.setState({
      moreIsPressed: false
    })
  }

  passQuestion = () => {
    if (this.props.indexQ == this.props.anketa.length - 1) {
      this.setState({
        testIsEnd: true
      })
    } else {
      this.props.nextQuestion();      
    }
  }

  _renderItem = (item) => {
    return (
      <QuestionItem name={item.text} />
    );
  }

  onPageChange(position) {
    this.setState({ currentPosition: position });
  }
  
  componentWillUnmount() {
    this.props.clearUserAnswers();
  }

  isAnswerFalse = () => {
    const answers = this.props.answers;
    answers.map((elem) => {
      if (elem.right == false) {
        this.state.testErrors.push({
          id: elem.question_id,
          question: elem.question_text,
          answer: elem.answer_text
        })
      }
    })
  }

  changeState = () => {
    this.setState({
      isPressed: false,
      yesIsPressed: false,
      noIsPressed: false,
      moreIsPressed: false,
      testIsEnd: false,
      showResult: false,
      testErrors: []
    });
  }

  componentWillUpdate(nextProps, nextState) {
    !!this.flatList && this.flatList.scrollToIndex({ index: nextProps.indexQ, viewOffset: 1 })
    !!this.flatList && this.flatList.flashScrollIndicators();
    if (nextProps.isClear) {
      this.changeState();
      // dispatch isClear = false
      this.props.againButtonPressed(false)
    }
  }

  render() {
    const { params } = this.props.match;
    const { questions } = this.props;

    return (
      <View style={styles.container}>
        <ScrollView>
          {this.state.testIsEnd && !this.state.showResult &&
            <EndScreenCard />
          }
          {this.state.showResult && this.state.testErrors.length == 0 &&
            <TestSuccessfulItem />
          }
          {this.state.testErrors.length !== 0 &&
            <TestErrorItem
              _testErrors={this.state.testErrors}
            />
          }
          {!this.state.testIsEnd && !this.state.showResult &&
            <QuestionWrapperItem
              _isPressed={this.state.isPressed}
              _testIsEnd={this.state.testIsEnd}
              _yesIsPressed={this.state.yesIsPressed}
              _noIsPressed={this.state.noIsPressed}
              _yourAnswer={this.state.yesIsPressed ?
                this.props.anketa[this.props.indexQ].answers[0].text :
                this.props.anketa[this.props.indexQ].answers[1].text
              }
              _data={this.props.anketa}
              _renderItem={({ item }) => this._renderItem(item)}
              _keyExtractor={item => item.id}
              _ItemSeparatorComponent={() => <View style={styles.border} />}
              _ref={(elem) => this.flatList = elem}
            />
          }
          <DescriptionItem
            _isPressed={this.state.isPressed}
            _testIsEnd={this.state.testIsEnd}
            _index={this.props.indexQ}
            _right={this.state.yesIsPressed}
            _descriptionText={this.state.yesIsPressed ?
              this.props.anketa[this.props.indexQ].answers[0].comment :
              this.props.anketa[this.props.indexQ].answers[1].comment
            }
            _rule1={this.state.rule1}
            _rule2={this.state.rule2}
            _moreText={this.state.moreText}
            _moreIsPressed={this.state.moreIsPressed}
            _onPress={() => {
              this.setState({
                moreIsPressed: !this.state.moreIsPressed
              })
            }}
          />

        </ScrollView>
        <View style={{
          width,
          position: 'absolute',
          bottom: 0
        }}>
          {!this.state.testIsEnd && !this.state.showResult &&
            <View style={{ backgroundColor: 'white', paddingVertical: 10 }}>
            <Text style={{ textAlign: 'center' }}>{this.props.indexQ + 1} из {this.props.anketa.length}</Text>
              {/* <StepIndicator
                customStyles={{
                  stepIndicatorSize: 15,
                  currentStepIndicatorSize: 15,
                  separatorStrokeWidth: 2,
                  currentStepStrokeWidth: 1,
                  stepStrokeCurrentColor: 'rgb(166, 198, 215)',
                  stepStrokeWidth: 1,
                  stepStrokeFinishedColor: 'rgb(166, 198, 215)',
                  stepStrokeUnFinishedColor: 'rgb(166, 198, 215)',
                  separatorFinishedColor: 'rgb(166, 198, 215)',
                  separatorUnFinishedColor: 'rgb(166, 198, 215)',
                  stepIndicatorFinishedColor: this.props.answers.length ? this.props.answers[0].rank == 1 ? 'rgb(61,184,120)' : 'red' : 'red',//цвет круга
                  stepIndicatorUnFinishedColor: 'rgb(255, 255, 255)',
                  stepIndicatorCurrentColor: '#ffffff',
                  stepIndicatorLabelFontSize: 13,
                  currentStepIndicatorLabelFontSize: 13,
                  stepIndicatorLabelCurrentColor: 'rgb(255, 255, 255)',//цвет числа
                  stepIndicatorLabelFinishedColor: 'rgb(255, 255, 255)',
                  stepIndicatorLabelUnFinishedColor: 'rgb(255, 255, 255)',
                  labelColor: '#999999',
                  labelSize: 13,
                  currentStepLabelColor: '#fe7013',
                  rightColor: 'green',
                  wrongColor: 'red'
                }}
                currentPosition={this.props.positionQ}
                stepCount={10}
              /> */}
            </View>
          }
          <FooterButtons
            _index={this.props.indexQ}
            _isPressed={this.state.isPressed}
            _testIsEnd={this.state.testIsEnd}
            _makeDocument={this.state.showResult}
            _buttonLeft={() => {
              this.nextBtnClick()
              this.setState({
                yesIsPressed: !this.state.yesIsPressed,
                answerIndex: 0
              })
              this.props.addUserAnswer({
                question_id: this.props.anketa[this.props.indexQ].id,
                answer_id: this.props.anketa[this.props.indexQ].answers[0].id,
                text: this.props.anketa[this.props.indexQ].answers[0].text,
                rank: this.props.anketa[this.props.indexQ].answers[0].rank,
                right: this.props.anketa[this.props.indexQ].answers[0].right,
                question_text: this.props.anketa[this.props.indexQ].text,
                answer_text: this.props.anketa[this.props.indexQ].answers[1].comment,
              })
            }}
            _buttonRight={() => {
              this.nextBtnClick()
              this.setState({
                noIsPressed: !this.state.noIsPressed,
                answerIndex: 1
              })
              this.props.addUserAnswer({
                question_id: this.props.anketa[this.props.indexQ].id,
                answer_id: this.props.anketa[this.props.indexQ].answers[1].id,
                text: this.props.anketa[this.props.indexQ].answers[1].text,
                rank: this.props.anketa[this.props.indexQ].answers[1].rank,
                question_text: this.props.anketa[this.props.indexQ].text,
                answer_text: this.props.anketa[this.props.indexQ].answers[1].comment,
                right: this.props.anketa[this.props.indexQ].answers[1].right
              })
            }}
            _showPassButton={this.props.anketa[this.props.indexQ].answers.length == 3}
            _buttonPass={() => {
              this.props.passQuestionAction({
                question_id: this.props.anketa[this.props.indexQ].id,
                answer_id: this.props.anketa[this.props.indexQ].answers[2].id,
                text: this.props.anketa[this.props.indexQ].answers[2].text,
                rank: this.props.anketa[this.props.indexQ].answers[2].rank,
                right: this.props.anketa[this.props.indexQ].answers[2].right
              })
              this.passQuestion()
            }}
            _onPressNext={() => {
              if (this.props.indexQ ==  this.props.anketa.length - 1) {
                this.setState({
                  testIsEnd: true
                })
              } else {
                this.nextSlide()
                this.setState({ yesIsPressed: false })
                this.setState({ noIsPressed: false })
                if (this.props.positionQ == 10) {
                  this.props.refreshIndicator(1)
                }
              }
            }}
            _onPressShowResult={() => {
              this.isAnswerFalse()
              this.setState({ showResult: true })
              this.props.postAnswers(this.props.survey_id,this.props.answers)                                          
            }}
            _onPressMakeDocument={() => {
              Linking
                .openURL(`http://mosobrnadzor.ru/action.htm?c=check_lists&action=get_act&id=${this.props.actId}`)
              //this.props.history.goBack()
            }}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingBottom: 90,
    position: 'relative'
  },
  border: {
    width: 34,
    backgroundColor: 'rgb(242, 246, 249)'
  },
});
