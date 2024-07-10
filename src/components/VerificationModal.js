import { Modal, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons';

const VerificationModal = ({successful,
    setModalVisible,
    modalVisible,
    requestMessage,
    persistLoginAfterOTPVerification}) => {

  const SuccessContent = ({ buttonHandler}) => {
        return (
          <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
          <Icon name="checkmark-circle" size={100} color="green" />
          <Text style={{fontWeight: 'bold', fontSize: 25, color: '#000', marginBottom: 10}}>Verified!</Text>
          <Text style={styles.modalText}>You have successful verified your account.</Text>
          <TouchableOpacity   onPress={buttonHandler}
          style={{ backgroundColor: "green", flexDirection: 'row',alignItems: 'center', borderRadius: 10, padding:5}}>
             <Text style={{fontWeight: 'bold', fontSize: 15, color: '#FFF', padding:10 , paddingRight: 3}}>Continue to App</Text>
             <Icon name="arrow-forward-circle" size={25} color="white" />
          </TouchableOpacity>
            {/* <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle}>Hide Modal</Text>
            </Pressable> */}
          </View>
        </View>
      </Modal>
        )
      }

      const FailContent = ({ errorMsg, buttonHandler}) => {
        return (
          <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
          <Icon name="close-circle" size={100} color="red" />
          <Text style={{fontWeight: 'bold', fontSize: 25, color: '#000', marginBottom: 10}}>Failed!</Text>
          <Text style={styles.modalText}>`Account verification failed. {errorMsg}</Text>
          <TouchableOpacity   onPress={buttonHandler}
          style={{ backgroundColor: "red", flexDirection: 'row',alignItems: 'center', borderRadius: 10, padding:5}}>
             <Text style={{fontWeight: 'bold', fontSize: 15, color: '#FFF', padding:10 , paddingRight: 3}}>Try again</Text>
             <Icon name="arrow-redo-circle" size={25} color="white" />
          </TouchableOpacity>
            {/* <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle}>Hide Modal</Text>
            </Pressable> */}
          </View>
        </View>
      </Modal>
        )
      }

  const buttonHandler = () => {
    if (successful){
      persistLoginAfterOTPVerification()
    }
    setModalVisible(false);
  }

  return (
<View style={styles.centeredView}>
      {!successful && <FailContent
                        buttonHandler={buttonHandler} 
                        errorMsg={requestMessage} />
                          }
      {successful && 
         <SuccessContent buttonHandler={buttonHandler}/>}
      {/* <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}>
        <Text style={styles.textStyle}>Show Modal</Text>
      </Pressable> */}
    </View>
  )
}

export default VerificationModal

const styles = StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 22,
      backgroundColor: '#000000',
      opacity: 0.8,
      // display: 'none'
    },
    modalView: {
      margin: 20,
      backgroundColor: 'white',
      borderRadius: 20,
      padding: 35,
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
    },
    button: {
      borderRadius: 20,
      padding: 10,
      elevation: 2,
    },
    buttonOpen: {
      backgroundColor: '#F194FF',
      // display: 'none'
    },
    buttonClose: {
      backgroundColor: '#2196F3',
    },
    textStyle: {
      color: 'white',
      fontWeight: 'bold',
      textAlign: 'center',
    },
    modalText: {
      marginBottom: 15,
      textAlign: 'center',
    },
})


