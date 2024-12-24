import AsyncStorage from '@react-native-async-storage/async-storage';

export const saveLoginData = async (responseData) => {
  try {
    await AsyncStorage.setItem('userData', JSON.stringify(responseData));
  } catch (error) {
    console.error('Failed to save user data:', error);
  }
};

export const getLoginData = async () => {
    try {
      const userData = await AsyncStorage.getItem('userData');
      return userData ? JSON.parse(userData) : null;
    } catch (error) {
      console.error('Failed to retrieve user data:', error);
    }
  };

  export const removeLoginData = async () => {
    try {
      await AsyncStorage.removeItem('userData')
    } catch (error) {
      console.error('Failed to remove user data:', error);
    }
  };