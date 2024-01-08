
import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { UserListContext, UserListContextType } from '../../context/UserListContext';

const UserListScreen = () => {
    const { userNames } = useContext<UserListContextType>(UserListContext);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Kullanıcı Listesi:</Text>
            <View style={styles.userListContainer}>
                {userNames.map((userName, index) => (
                    <Text key={index} style={styles.userName}>{index+1}. {userName}</Text>
                ))}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#f0f0f0', // Arka plan rengi
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
        textAlign: 'center',
    },
    userListContainer: {
        marginTop: 10,
    },
    userName: {
        fontSize: 18,
        marginBottom: 8,
        fontWeight: 'bold',
    },
});

export default UserListScreen;