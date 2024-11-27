import { getPostData } from '../lib/posts';

export async function getStaticProps() {
  // Fetch data using getPostData on the server
  const postData = getPostData();

  return {
    props: {
      postData, // Pass the post data as props to the component
    },
  };
}

export default function Home({ postData }) {
  const { data, contentHtml } = postData;

  return (
    <div>
      <h1>{data.title}</h1>
      <p>{data.date}</p>
      {/* Render the HTML content */}
      <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
    </div>
  );
}
