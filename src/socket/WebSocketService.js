import { Websocket_URL } from "../api/URL/apiUrl";
import * as Notifications from 'expo-notifications';

class WebSocketService {
    socket = null;
  
    // Kết nối WebSocket
    connect(userId) {
      console.log("Connecting to WebSocket with userId:", userId);
    console.log("Websocket_URL:", `${Websocket_URL}ws/notifications/${userId}/`);
      if (!this.socket) {
        const url = `${Websocket_URL}ws/notifications/${userId}/`;
        this.socket = new WebSocket(url);
  
        // Xử lý khi kết nối thành công
        this.socket.onopen = () => {
          console.log('WebSocket connected');
        };
  
        // Xử lý khi nhận được tin nhắn
        this.socket.onmessage = async (message) => {
          console.log('Received message:', message.data);
            // It's useful to save notification id so that you can edit/delete notification later
            await Notifications.scheduleNotificationAsync({
              content: {
                title: 'New Message',
                body: message.data,
                sound: true,
              },
              trigger: null, // Hiển thị ngay lập tức
            });
        };
  
        // Xử lý lỗi
        this.socket.onerror = (error) => {
          console.error('WebSocket error:', error);
        };
  
        // Xử lý khi kết nối đóng
        this.socket.onclose = () => {
          console.log('WebSocket connection closed');
          this.socket = null; // Đảm bảo socket không còn được tái sử dụng
        };
      }
    }
  
    // Gửi tin nhắn qua WebSocket
    sendMessage(data) {
      if (this.socket && this.socket.readyState === WebSocket.OPEN) {
        this.socket.send(JSON.stringify(data));
      } else {
        console.error('WebSocket is not connected');
      }
    }
  
    // Đóng kết nối WebSocket
    disconnect() {
      if (this.socket) {
        this.socket.close();
      }
    }
  }
  
  export default new WebSocketService();
  