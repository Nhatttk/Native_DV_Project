import { getLoginData } from "../api/storageData";

class UserData {
    data = null;
  
    // Kết nối WebSocket
    getData = async () => {
        const dataLogin = await getLoginData()
        this.data = dataLogin
    }

  }
  
  export default new UserData();
  