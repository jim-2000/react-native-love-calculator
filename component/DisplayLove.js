import React from 'react'
import { StyleSheet,View  } from 'react-native'
import { Modal, Portal, Text, Button, Provider } from 'react-native-paper'





//
const DisplayLove = ({loading,modal}) => {
    console.log(modal);
    const [visible, setVisible] = React.useState(true);
    const containerStyle = {backgroundColor: 'white', padding: 20};
    // const showModal = () => setVisible(true);
  const hideModal = () => {
    setVisible(false)
    };



    return (
    <View  >
        <Provider>
        <Portal>
          <Modal   visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
            <Text style={styles.title}>`${loading.percentage}%` </Text>
            <Text style={styles.subtitle}>{loading.result}</Text>
        <Button  mode="contained" style={{marginTop: 30,backgroundColor:'gray'}} onPress={hideModal}>
        Try again
        </Button>
          </Modal>
        </Portal>
      </Provider>
    </View>

        // <View style={styles.container}>
        //     <Text style={styles.title}>50%</Text>
        //     <Text style={styles.subtitle}>try better </Text>
        // </View>
    )
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#000',
        justifyContent:'flex-start',
        alignItems:'center',
        // margin:10,
        padding:10,  
        // height:20,  
    },
    title:{
        fontSize:30,
        textAlign:'center',
        color:'red'
    },
    subtitle:{
        color:'orange',
        fontSize:16,
        textAlign:'center',

    }


})





export default DisplayLove
