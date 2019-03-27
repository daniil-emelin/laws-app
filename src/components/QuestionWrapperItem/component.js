import React, { Component } from 'react';
import {
    Platform,
    View, 
    StyleSheet,
    Text, 
    TouchableOpacity,
    Dimensions,
    FlatList
} from 'react-native';
import {
    YourAnswerItem,
  } from './../../components/';

  
const {width, height} = Dimensions.get('window');

export default class QuestionWrapperItem extends Component {
    render() {
      return (
        <View style={{
          backgroundColor: 'rgb(242, 246, 249)',
          width,
          flex: 1
        }}>
            {!this.props._testIsEnd &&
              <FlatList
                  style={{paddingBottom:15}}
                  data={this.props._data}
                  renderItem={this.props._renderItem}
                  keyExtractor={this.props._keyExtractor}
                  horizontal
                  scrollEnabled={false}
                  showsHorizontalScrollIndicator={false}
                  ItemSeparatorComponent={this.props._ItemSeparatorComponent}
                  ref={this.props._ref}
              />
            }
            <View style={styles.yourAnswerWrapper}>
              {this.props._isPressed && this.props._yesIsPressed && !this.props._testIsEnd &&
                  <YourAnswerItem name={this.props._yourAnswer}/>
              }
              {this.props._isPressed && this.props._noIsPressed && !this.props._testIsEnd &&
                  <YourAnswerItem name={this.props._yourAnswer}/>
              }
            </View>
      </View>
      );
    }
  }

const styles = StyleSheet.create({
  yourAnswerWrapper:{
    alignItems: 'flex-end',
    paddingBottom: 15,
    marginRight: 10,
  },
});