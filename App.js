import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Toast from 'react-native-toast-message'

const App = () => {

  return (
    <View>
      <Toast ref={(ref)=>Toast.setRef(ref)}/>
      <TouchableOpacity onPress={() =>{
        Toast.show({
          type:'success',
          text1:'Data Saved Successfully',
          position:'top',
          visibilityTime:1000
        })
      }}>
        <Text style={{textAlign:'center',marginTop:200,backgroundColor:'grey',fontSize:30,color:'black'}}>success</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() =>{
        Toast.show({
          type:'error',
          text1:'Error',
        })
      }}>
        <Text style={{textAlign:'center',marginTop:50,backgroundColor:'grey',fontSize:30,color:'black'}}>Error</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() =>{
        Toast.show({
          type:'info',
          text1:'Data Saved information',
        })
      }}>
        <Text style={{textAlign:'center',marginTop:50,backgroundColor:'grey',fontSize:30,color:'black'}}>Info</Text>
      </TouchableOpacity>
    </View>
  )
}

export default App