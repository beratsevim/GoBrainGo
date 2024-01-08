import React, { useContext, useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { UserListContext, UserListContextType } from '../../context/UserListContext';

const AddUserScreen = ({ navigation }: any) => {
  const { addUserName } = useContext<UserListContextType>(UserListContext);
  const [userName, setUserName] = useState<string>('');

  const handleAddUser = () => {
    if (userName.trim() !== '') {
      addUserName(userName);
      setUserName('');

      // Kullanıcı ekledikten sonra kullanıcı listesi sayfasına yönlendir.
      navigation.navigate('UserListScreen');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Kullanıcı Ekle</Text>
      <TextInput
        style={styles.input}
        placeholder="Kullanıcı Adı"
        value={userName}
        onChangeText={(text) => setUserName(text)}
      />
      <Button title="Ekle" onPress={handleAddUser} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    backgroundColor: '#f0f0f0',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    padding: 8,
  },
});
export default AddUserScreen;
