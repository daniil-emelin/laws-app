import React, { PureComponent,Component } from 'react';
import {
  Platform,
  Button,
  View,
  StyleSheet,
  Text,
  ScrollView,
  WebView,
  Dimensions,
  Animated,
  TouchableHighlight,
  TouchableOpacity,
  Image,
  ImageBackground,
  FlatList
} from 'react-native';
import { LicensingStackScreenItem } from './../../components';
let {width, height} = Dimensions.get('window');

export default class LicensingStackScreen extends React.PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      text: props.base[props.match.params.id].textLink,
      isHidden: true,
    }
  }

  _toggle() {
    if (this.state.isHidden) {
      this.setState({ text: this.props.base[this.props.match.params.id].moreText, isHidden: !this.state.isHidden })
    }
    else this.setState({ text: this.props.base[this.props.match.params.id].textLink, isHidden: !this.state.isHidden })
  }

  componentDidMount() {
    this.props.dispatch({ type: 'ADD_TITLE', payload: this.props.match.params.title });
  }

  componentWillUnmount() {
    this.props.dispatch({ type: 'REMOVE_LAST_TITLE' });
  }

  _renderItem = ({ item,index }) => {
    if (item.norm_acts.length){
    return (
     <LicensingStackScreenItem
            key={index}
            name={item.title}
            to={`/knowledge/acts/${this.props.match.params.id}/${item.id}/${item.title}`}
            borderTop={(index === 0) ? 1 : 0}
            // onPress={()=>{
            //   this.props.history.title=item.title;
            // }}
          />
    );
  }
  };

  _keyExtractor = (item, index) => item.title;



  render() {
    const { base } = this.props;
    const { params } = this.props.match;
    const { match: { url } } = this.props
    return (
      <View style={styles.container}>

        {/* <Text style={styles.blueHeader}>{base[parseInt(params.id)].title}</Text>
        <TouchableHighlight style={{
          borderBottomWidth: 1,
          borderBottomColor: 'rgb(201,220,231)',
          paddingBottom: 16
        }}
          onPress={this._toggle.bind(this)}
          underlayColor={'white'}>
          <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', paddingRight: 20 }}>
            <Text style={styles.colHeader}>{this.state.text}</Text>
            <Image style={[{ width: 25, height: 25, tintColor: 'rgb(166,198,215)' }, (this.state.isHidden) ? { transform: [{ rotateZ: '90deg' }] } : { transform: [{ rotateZ: '-90deg' }] }]} source={require('./../../images/arrowRight.png')} />
          </View>
        </TouchableHighlight>
        <Text style={styles.brownHeader}>Законодательная база{'\n'}по вопросам {this.props.match.params.brownheader}</Text> */}

        <FlatList
            style={styles.wrapper}
            data={base[params.id].types}
            keyExtractor={this._keyExtractor}
            renderItem={this._renderItem}
            // initialNumToRender={4}
            ListHeaderComponent={()=>{
              return(
                <View style={{flex:1}}>
                <Text style={styles.blueHeader}>{base[params.id].title}</Text>
        <TouchableHighlight style={{
          borderBottomWidth: 1,
          borderBottomColor: 'rgb(201,220,231)',
          paddingBottom: 16
        }}
          onPress={this._toggle.bind(this)}
          underlayColor={'white'}>
          <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', paddingRight: 20 }}>
            <Text style={styles.colHeader}>{this.state.text}</Text>
            <Image style={[{ width: 25, height: 25, tintColor: 'rgb(166,198,215)' }, (this.state.isHidden) ? { transform: [{ rotateZ: '90deg' }] } : { transform: [{ rotateZ: '-90deg' }] }]} source={require('./../../images/arrowRight.png')} />
          </View>
        </TouchableHighlight>
        <Text style={styles.brownHeader}>Законодательная база{'\n'}по вопросам {this.props.match.params.brownheader}</Text>
</View>
              );
            }}
          />

        {/* {base[parseInt(params.id)].types && base[parseInt(params.id)].types.map((item, key) => {
          if (item.norm_acts.length){
            return (
          <LicensingStackScreenItem
            key={key}
            name={item.title}
            to={`/knowledge/acts/${params.id}/${item.id}/${item.title}`}
            borderTop={(key === 0) ? 1 : 0}
          />
            )
          }
        })} */}

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingLeft: 17,
    
  },
  blueHeader: {
    fontSize: 20,
    textAlign: 'left',
    lineHeight: 22,
    color: 'rgb(45,113,148)',
    fontWeight: 'bold',
    paddingBottom: 17,
    paddingTop:23
  },
  colHeader: {
    fontSize: 17,
    lineHeight: 22,
    color: 'rgb(71,84,89)',
    width: 0.8*width,
  },
  brownHeader: {
    fontSize: 18,
    lineHeight: 22,
    color: 'rgb(146,115,90)',
    fontWeight: 'bold',
    paddingTop: 24,
    paddingBottom: 16
  },
  wrapper: {
    width: null,
    height: null,
    backgroundColor: 'transparent',
    flex: 1,
    flexDirection: 'column',
  }
});