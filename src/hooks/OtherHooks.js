import Api from "../config/Api";

const githubUser = async () => {
  try {
    const { data } = await Api.get(`/github/info`);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export default {
  githubUser,
};
