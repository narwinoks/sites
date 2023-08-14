import Api from "../config/Api";

const getMusicTrack = async () => {
  try {
    const { data } = await Api.get(`/music`);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export default {
  getMusicTrack,
};
