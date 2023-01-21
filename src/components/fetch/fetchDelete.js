import posts from '../fakeData/posts.js';

const fetchDelete = async (id) => {
  const data = await new Promise((resolve, reject) => {
    const index = posts.findIndex((o) => o.id === id);
    if (index !== -1) {
      posts.splice(index, 1);
      resolve('204');
    } else reject('Error');
  });
  return data;
};

export default fetchDelete;
