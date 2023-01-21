import posts from '../fakeData/posts.js';

const fetchPush = async (elem) => {
  const data = await new Promise((resolve, reject) => {
    const index = posts.findIndex((o) => o.id === elem.id);
    console.log(elem);
    console.log(posts);
    console.log(index);
    if (index === -1) {
      const post = posts.push(elem);
      resolve('204');
    } else {
      posts[index].content = elem.content;
    }
  });

  return data;
};

export default fetchPush;
