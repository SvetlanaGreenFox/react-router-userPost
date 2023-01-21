import posts from '../fakeData/posts.js';

const fetchGet = async () => {
  const data = await new Promise((resolve, reject) => {
    resolve(posts);
  });
  return data;
};

export default fetchGet;
