import axios from "axios";
export async function verify(verificationResponse: any) {
  try {
    const post = await axios.post(
      "https://api.worldcoinid.com/v1/verify",
      verificationResponse
    );
    console.log({ post });
    return post.data;
  } catch (error) {
    console.log(error);
  }
}
