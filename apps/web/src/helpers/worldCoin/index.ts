import axios from "axios";
export async function verificationResponse() {
  try {
    return await axios.post("https://api.worldcoinid.com/v1/verify");
  } catch (error) {
    console.log(error);
  }
}
