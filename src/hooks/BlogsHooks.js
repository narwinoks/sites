import Api from "../config/Api";

const getBlogs = async () => {
  try {
    const { data } = await Api.get(`/blogs`);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export default {
  getBlogs,
};
