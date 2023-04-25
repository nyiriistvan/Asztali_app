// import React, { useState } from 'react';
// import { View, Text, TouchableOpacity, Image, StyleSheet, Platform } from 'react-native';
// import * as ImagePicker from 'expo-image-picker';
// import Constants from 'expo-constants';
// import { uploadImage } from './api'; // import your API function for uploading the image

// const UploadImage = ({ onImageUpload }) => {
//   const [image, setImage] = useState(null);

//   const pickImage = async () => {
//     if (Platform.OS !== 'web') {
//       const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
//       if (status !== 'granted') {
//         alert('Sorry, we need camera roll permissions to make this work!');
//         return;
//       }
//     }

//     let result = await ImagePicker.launchImageLibraryAsync({
//       mediaTypes: ImagePicker.MediaTypeOptions.Images,
//       allowsEditing: true,
//       aspect: [4, 3],
//       quality: 1,
//     });

//     if (!result.cancelled) {
//       setImage(result.uri);
//     }
//   };

//     // const handleImageUpload = async () => {
//     if (image) {
//       const response = await uploadImage(image); // call your API function to upload the image
//       onImageUpload(response.imageUrl); // pass the image URL to the parent component
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <TouchableOpacity style={styles.button} onPress={pickImage}>
//         <Text style={styles.buttonText}>Pick an image from camera roll</Text>
//       </TouchableOpacity>
//       {image && (
//         <>
//           <Image source={{ uri: image }} style={styles.image} />
//           <TouchableOpacity style={styles.uploadButton} onPress={handleImageUpload}>
//             <Text style={styles.buttonText}>Upload Image</Text>
//           </TouchableOpacity>
//         </>
//       )}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor: '#fff',
//     paddingHorizontal: 20,
//     paddingTop: Constants.statusBarHeight,
//   },
//   button: {
//     backgroundColor: 'blue',
//     borderRadius: 10,
//     paddingHorizontal: 20,
//     paddingVertical: 10,
//     marginBottom: 20,
//   },
//   buttonText: {
//     color: '#fff',
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   image: {
//     width: 200,
//     height: 200,
//     marginBottom: 20,
//   },
//   uploadButton: {
//     backgroundColor: 'green',
//     borderRadius: 10,
//     paddingHorizontal: 20,
//     paddingVertical: 10,
//   },
// });

// export default UploadImage;
