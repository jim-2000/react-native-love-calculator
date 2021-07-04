import React,{Component} from 'react';
import { TextInput,Appbar,Button  } from 'react-native-paper';
import { StyleSheet, Text, View } from 'react-native';
import DisplayLove from './component/DisplayLove'


//
export default class App extends Component  {
state ={
  boy:'',
  girl:'',
  loading:'loading',
  modal:false,
}


submitted(){
  fetch(`https://love-calculator.p.rapidapi.com/getPercentage?fname=${this.state.boy}&sname=${this.state.girl}`, {
    headers: {
      'x-rapidapi-key': 'df8aedbadamshf7b01747fe6a292p1e9706jsn67b742d0acff',
      'x-rapidapi-host': 'love-calculator.p.rapidapi.com'
    }
  })
  .then(res=>res.json())
  .then(data=>{
    console.log(data);
    this.setState({loading:data})
  })
  this.setState({modal:!this.state.modal})
  setTimeout(() => {
  this.setState({boy:'', girl:''}) 
  this.setState({modal:false})   
  }, 1000000);
  
}

  render(){
    return (
      <View style={styles.container}>

    <Appbar.Header>
    <Appbar.Content title="lOVE " subtitle="counter" />
    <Appbar.Action icon="dots-vertical"  />
    </Appbar.Header>

        {/* <Text>{this.state.boy}</Text> */}

        <TextInput
        label="Your Name"
        style={{margin:5}}
        value={this.state.boy}
        onChangeText={boy=> this.setState({boy})}
        placeholder="Enter First Name"
        />
  
        {/* <Text>{this.state.girl}</Text> */}
  
        <TextInput
        label="Your Pertner Name"
        style={{margin:5}}
        
        value={this.state.girl}
        onChangeText={girl=>this.setState({girl})}
        />
       <Button  icon="heart" mode="contained" onPress={() => this.submitted()}>
        Calculate
      </Button>
        {
          this.state.modal ?  <DisplayLove modal={this.state.modal} loading={this.state.loading} /> : ''
        }
    
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ddd',
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    // margin:5,
  },

});














//