import ArticleSummary from "../components/ArticleSummary";
import { posts } from "../getAllPosts";

export default function IndexPage() {
  return (
    <>
      {posts.map((post) => (
        <ArticleSummary key={post.link} post={post} />
      ))}
    </>
  );
}

// My blog: https://www.ibrahima-ndaw.com/