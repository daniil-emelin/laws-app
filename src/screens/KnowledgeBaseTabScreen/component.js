import React, { PureComponent,Component } from 'react';
import {
  Platform,
  Button,
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  Image,
  ScrollView,
  Dimensions,
  FlatList,
  SectionList,
  ListView
} from 'react-native';
import { KnowledgeBaseItem, HeaderItem } from './../../components';
import img from '../../images/icon.png';
let { width, height } = Dimensions.get('window');

export default class KnowledgeBaseTabScreen extends React.PureComponent {

  _renderItem = ({ item,index }) => {
    const titles = ['лицензирования', 'аккредитации', 'надзора и контроля'];
    return (
      <KnowledgeBaseItem
        header={item.title}
        desc={item.description}
        iconUrl={item.iconUrl}
        to={`/knowledge/licensing/${item.id}/${titles[index]}/${item.title}`}
      />
    );
  };

  _keyExtractor = (item, index) => item.title;

  render() {
    const { base } = this.props;
    const { match: { url } } = this.props
    const titles = ['лицензирования', 'аккредитации', 'надзора и контроля'];
    return (
      <View style={{flex:1}}> 
        <HeaderItem title='База знаний' />
      <ScrollView style={styles.container}>
       
          {/* <FlatList
            style={styles.wrapper}
            data={base}
            keyExtractor={this._keyExtractor}
            renderItem={this._renderItem}
          /> */}

{base && base.map((item, index)=>{

  return(
      <KnowledgeBaseItem
        key={index}
        header={item.title}
        desc={item.description}
        iconUrl={item.iconUrl}
        to={`/knowledge/licensing/${item.id}/${titles[index]}/${item.title}`}
        // onPress={()=>{
        //   this.props.appReducer.title=item.title;
        // }}
      />
  );
}
)}

      </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    
  },
  wrapper: {
    paddingHorizontal: 17,
    paddingVertical: 16
  }
});
