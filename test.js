import { getPostData } from './lib/posts.js';

(async () => {
  try {
    const postData = await getPostData();
    console.log(postData);
  } catch (error) {
    console.error("Error fetching post data:", error);
  }
})();
