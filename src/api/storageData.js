import AsyncStorage from '@react-native-async-storage/async-storage';

export const saveLoginData = async (accessToken) => {
  try {
    await AsyncStorage.setItem('accessToken', accessToken);
    console.log('Access token saved successfully!');
  } catch (error) {
    console.error('Failed to save access token:', error);
  }
};

export const getLoginData = async () => {
    try {
      const accessToken = await AsyncStorage.getItem('accessToken');
      if (accessToken) {
        console.log('Access token retrieved:', accessToken);
        return accessToken;
      } else {
        console.log('No access token found.');
      }
    } catch (error) {
      console.error('Failed to retrieve access token:', error);
    }
  };
