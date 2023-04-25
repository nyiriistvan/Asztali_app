import React from 'react';
import { Modal, Text, TouchableOpacity, View, StyleSheet } from 'react-native';

const ConfirmDeleteModal = ({ visible, onConfirm, onCancel }) => {
  return (
    <Modal visible={visible} transparent>
      <View style={styles.container}>
        <View style={styles.modal}>
          <Text style={styles.message}>Are you sure you want to delete this item?</Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.confirmButton} onPress={onConfirm}>
              <Text style={styles.buttonText}>Yes</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.cancelButton} onPress={onCancel}>
              <Text style={styles.buttonText}>No</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};
const styles = StyleSheet.create({
    modalContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    modal: {
      backgroundColor: '#fff',
      padding: 20,
      borderRadius: 10,
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
  
      elevation: 5,
    },
    message: {
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 20,
      textAlign: 'center',
    },
    buttonContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '100%',
    },
    button: {
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 5,
      marginHorizontal: 10,
    },
    cancelButton: {
      backgroundColor: 'gray',
    },
    confirmButton: {
      backgroundColor: 'red',
    },
    buttonText: {
      color: '#fff',
      fontWeight: 'bold',
    },
  });
  

export default ConfirmDeleteModal;
