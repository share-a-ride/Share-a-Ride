import React, {useState} from 'react';
import {Alert, Modal, StyleSheet, Text, Pressable, View,TextInput} from 'react-native';

const ModalAddVihecle = (props) => {
  const closeModal=(bool,data) =>{
    props.changeModalVisible(bool)
  } 
  return (
    <View className="fixed h-full  backdrop-blur-md bg-white/80 flex justify-center items-center">
      <View className=" bg-white  w-11/12 rounded-lg border shadow dark:bg-gray-700" >
          <View className=" p-4 border-b rounded-t dark:border-gray-600 items-center" >
              <TextInput
            name="origin"
            className="bg-background py-4 w-11/12 text-white text-lg   mx-auto rounded-2xl mb-4 px-4"
            placeholder="Vihacle"
            placeholderTextColor="#8e9eb6"
            
          />
              <TextInput
            name="origin"
            className="bg-background py-4 w-11/12 text-white text-lg   mx-auto rounded-2xl mb-4 px-4"
            placeholder="number plate"
            placeholderTextColor="#8e9eb6"
            
          />
            <Pressable
            className="bg-accent rounded-xl py-3 w-24"
              onPress={() => closeModal(false)}>
              <Text className="text-xl text-white text-center">Submit</Text>
            </Pressable>
          </View>
        </View>
    </View>
  )
}

export default ModalAddVihecle

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
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
});