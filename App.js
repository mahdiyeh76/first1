import React from 'react';
import { StyleSheet, Text, View , FlatList ,Image ,Button } from 'react-native';
import {createStackNavigator} from 'react-navigation';
import Profile from './Profile'
  
 class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      users: []

    }
  }

    componentDidMount ()
     {
      fetch("https://randomuser.me/api")
      .then(res => res.json())
        .then(json =>{
            this.setState({
              users: json.results
             
            });
          })
        }
  render() 
  { const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
      
      <FlatList  style={styles.flat} 
       data={this.state.users}
        renderItem={({item}) =>(
         
           <View >
             <Text> {item.name.first}</Text>
             <Text>{item.name.last}</Text>
             <Text>{item.location.city}</Text>
             <Image source={{ uri:item.picture.thumbnail}}  style={styles.img}/>

           
          <Button
        title="Go to Profile's profile"
        onPress={() =>
          navigate('Profile' )
        }
      />          
             
           </View>
        )
      }

      />

         
      </View>
     
    );
  }
}


const styles = StyleSheet.create({
  container: {
  flex:1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center', 
  },
  flat:{
    backgroundColor:"#feb",
    marginTop:15,
    width:300,
    height:200,
  
  },
  img:{
    height:80,
    width:80,
    borderRadius:0.3,
  }

})

export default createStackNavigator({
  Home:{
    screen:App
  },
  Profile: {
    screen: Profile
  },
});

