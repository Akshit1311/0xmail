import axios from "axios";

export const sendEpnsNotif = (
  recipient: string,
  title: string,
  body: string
) => {
  const options = {
    method: "POST",
    url: "http://localhost:5000/epns",
    params: {
      recipient,
      title,
      body,
    },
    headers: { "Content-Type": "application/json" },
  };

  try {
    axios.request(options).then(function (response) {
      console.log({ data: response.data });
    });

    alert("sent successfully");
  } catch (error) {
    console.error({ error });
  }
};
