import React, { useState, useEffect } from 'react';
import { View, Text, Image, Button, StyleSheet } from 'react-native';
import axios from 'axios';

const App = () => {
  const [userData, setUserData] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalUsers = 80;

  useEffect(() => {
    axios
      .get(`https://random-data-api.com/api/users/random_user?size=1&seed=${currentIndex}`)
      .then(response => setUserData(response.data[0]))
      .catch(error => console.error('Error:', error));
  }, [currentIndex]);

  const handlePrevious = () => currentIndex > 0 && setCurrentIndex(currentIndex - 1);
  const handleNext = () => currentIndex < totalUsers - 1 && setCurrentIndex(currentIndex + 1);

  if (!userData) return <View><Text>Loading...</Text></View>;

  return (
    <View style={styles.container}>
      <Image source={{ uri: userData.avatar }} style={styles.avatar} />
      <Text>ID: {userData.id}</Text>
      <Text>UID: {userData.uid}</Text>
      <Text>Password: {userData.password}</Text>
      <Text>First Name: {userData.first_name}</Text>
      <Text>Last Name: {userData.last_name}</Text>
      <Text>Username: {userData.username}</Text>
      <Text>Email: {userData.email}</Text>
      <View style={styles.buttonContainer}>
        <Button title="Previous" onPress={handlePrevious} disabled={currentIndex === 0} />
        <Button title="Next" onPress={handleNext} disabled={currentIndex === totalUsers - 1} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  avatar: { width: 150, height: 150, borderRadius: 75, alignSelf: 'center', marginVertical: 20 },
  buttonContainer: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 },
});

export default App;