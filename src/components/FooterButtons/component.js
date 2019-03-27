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
    Button,
    ButtonsGroup
  } from '../';
  
const {width, height} = Dimensions.get('window')

export default class FooterButtons extends Component {
    render() {
      return (
        <View>
          
          { !this.props._isPressed && !this.props._testIsEnd &&
            <ButtonsGroup 
              buttonLeft={this.props._buttonLeft}
              buttonRight={this.props._buttonRight}
              buttonPass={this.props._buttonPass}
              index={this.props._index}
              showPassButton={this.props._showPassButton}
            />
          }
          { this.props._isPressed && !this.props._testIsEnd &&
            <Button
              large={true} 
              name='Далее' 
              _onPress={this.props._onPressNext}
            />
          }
          {this.props._testIsEnd && !this.props._makeDocument &&
            <Button name='Сформировать акт' 
              large={true}
              _onPress={this.props._onPressShowResult}
            />
          }
          {this.props._testIsEnd && this.props._makeDocument &&
            <Button name='Скачать результат' 
              large={true}
              _onPress={this.props._onPressMakeDocument}//Запрос на скачивание результатов
            />
          }
          
        </View>
      );
    }
  }

const styles = StyleSheet.create({
   
});