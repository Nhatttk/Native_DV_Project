
import axios from "axios";
import {API_URL} from "./URL/apiUrl"
import * as Location from "expo-location";
import {API_URL_GEMINI} from '@env';
// api.js


export const getAllBooking = async (pk) => {
  try {
    const response = await axios.get(API_URL + "bookings/?pk=" + pk);
    return response.data;
  } catch (error) {
    // console.error("Error calling api:", error);
    throw error; // Ném lỗi để có thể xử lý tại component
  }
};

export const addBooking = async (playload) => {
  try {
    const response = await axios.post(API_URL + "bookings/", 
      playload
    );
    return response.data;
  } catch (error) {
    // console.error("Error calling api:", error);
    throw error; // Ném lỗi để có thể xử lý tại component
  }
};

export const getAllSuggestion = async (pk) => {
  try {
    const response = await axios.get(API_URL + "suggestion-friends/?pk=" + pk);
    return response.data;
  } catch (error) {
    // console.error("Error calling api:", error);
    throw error; // Ném lỗi để có thể xử lý tại component
  }
};

export const getAllFriendsRequest = async (receiver_id) => {
  try {
    const response = await axios.get(API_URL + "send_friend_request/?pk=" + receiver_id);
    return response.data;
  } catch (error) {
    // console.error("Error calling api:", error);
    throw error; // Ném lỗi để có thể xử lý tại component
  }
};

export const getAllFriends = async (user1_id) => {
  try {
    const response = await axios.get(API_URL + "friendships/?pk=" + user1_id);
    return response.data;
  } catch (error) {
    // console.error("Error calling api:", error);
    throw error; // Ném lỗi để có thể xử lý tại component
  }
};

export const addFriend = async (user1, user2) => {
  try {
    const response = await axios.post(API_URL + "friendships/", {
      user1_id: user1,
      user2_id: user2
    });
    return response.data;
  } catch (error) {
    // console.error("Error calling api:", error);
    throw error; // Ném lỗi để có thể xử lý tại component
  }
};

export const addRequestFriend = async (sender_id, receiver_id) => {
  try {
    const response = await axios.post(API_URL + "send_friend_request/", {
      sender_id: sender_id,
      receiver_id: receiver_id
    });
    return response.data;
  } catch (error) {
    // console.error("Error calling api:", error);
    throw error; // Ném lỗi để có thể xử lý tại component
  }
};

export const getAllProfiles = async () => {
  try {
    const response = await axios.get(API_URL + `user-profiles/`);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error; // Ném lỗi để có thể xử lý tại component
  }
}

export const getEmergencyList= async () => {
  try {
    const response = await axios.get(API_URL + `emergency-help/`);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error; // Ném lỗi để có thể xử lý tại component
  }
}

export const callGenerateContentAPI = async (prompt) => {
  const payload = {
    contents: [
      {
        parts: [
          {
            text: prompt
          }
        ]
      }
    ]
  };

  try {
    const response = await axios.post(API_URL_GEMINI, payload, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    return response.data; 
  } catch (error) {
    throw error.response ? error.response.data : new Error("Network Error");
  }
};


export const getChats = async (username) => {
  try {
    const response = await axios.get(API_URL + `chats/${username}/`);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error; // Ném lỗi để có thể xử lý tại component
  }
};

export const getMessages = async (chatId) => {
  try {
    const response = await axios.get(API_URL + `chats/${chatId}/messages/`);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error; // Ném lỗi để có thể xử lý tại component
  }
};

export const loginApi = async (username, password) => {
  try {
    const response = await axios.post(API_URL + "login/", {
      username: username,
      password:password
    });
    return response.data;
  } catch (error) {
    throw error; // Ném lỗi để có thể xử lý tại component
  }
};

export const getUserDataFromToken = async (token) => {
  try {
    const response = await axios.post(API_URL + "get-user/", {
      token: token,
    });
    return response.data; 
  } catch (error) {
    console.error("Error token:", error);
    throw error; // Ném lỗi để có thể xử lý tại component
  }
};

export const fetchKnowledgeList = async () => {
  try {
    const response = await axios.get(API_URL + "knowledge/");
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error; // Ném lỗi để có thể xử lý tại component
  }
};


export const fetchExpertList = async () => {
  try {
    const response = await axios.get(API_URL + "experts/");
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error; // Ném lỗi để có thể xử lý tại component
  }
};

export const sendEmail = async () => {
  try {
    let location = await Location.getCurrentPositionAsync({});
    const { latitude, longitude } = location.coords;
    const response = await axios.post(API_URL + "send-email/", {
      subject: "[URGENT] Emergency Help Needed - I Am in Danger",
      message:
        "Dear friends, family, and trusted contacts, I am currently in a dangerous situation and urgently need your help. This is a call for immediate assistance, and your support is crucial.\n\nPlease see the important details below:\n\n- **My current location:** [Your location or nearest known landmark]\n- **Last known time of communication:** [Time and date of this message]\n- **Contact details for immediate support:** [Your phone number or alternative contact]\n\nPlease reach out to me or notify the local authorities as soon as possible. I may not be able to respond immediately, but any efforts to locate and assist me could make a significant difference.\n\nYour timely response could be life-saving. Please do not ignore this message.\n\nThank you so much for your help and support in this critical time.\n\nSincerely,\n[Your Name]",
      ip: `https://www.google.com/maps?q=${latitude},${longitude}`,
      recipient_email: ["nhatngo1205q@gmail.com", "manhcan03@gmail.com"],
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error; // Ném lỗi để có thể xử lý tại component
  }
};

export const postStory = async (formData) => {
  try {
    const response = await axios.post(
      API_URL + "stories/",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export const getStories = async () => {
  try {
    const response = await axios.get(API_URL + "stories/");
    return response.data;
  } catch (error) {
    throw error;
  }
}

export const getAllEmailHelp = async (pk) => {
  try {
    const response = await axios.get(API_URL + "profile-emails/?pk=" + pk);
    return response.data;
  } catch (error) {
    throw error; // Ném lỗi để có thể xử lý tại component
  }
};
export const AddAllEmailHelp = async (id, email) => {
  try {
    const response = await axios.post(API_URL + "profile-emails/", {
      pk: id,
      email: email
    });
    return response.data;
  } catch (error) {
    throw error; // Ném lỗi để có thể xử lý tại component
  }
};