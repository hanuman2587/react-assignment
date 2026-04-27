import { useParams, Link } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import CommentCard from "../components/CommentCard";
import "../styles/pages.css";

const BASE = "https://jsonplaceholder.typicode.com";

export default function PostDetail() {
  const { id } = useParams();

  // Fetch post
  const {
    data: post,
    isLoading: postLoading,
    error: postError,
  } = useFetch(`${BASE}/posts/${id}`);

  // Fetch comments
  const {
    data: comments,
    isLoading: commentsLoading,
    error: commentsError,
  } = useFetch(`${BASE}/posts/${id}/comments`);

  // Loading state
  if (postLoading || commentsLoading) {
    return <p className="status">Loading…</p>;
  }

  // Error state
  if (postError || commentsError) {
    return <p className="status status--error">Something went wrong.</p>;
  }

  return (
    <section className="page">
      <article className="post-detail">
        <h1 className="post-detail__title">{post.title}</h1>

        <p className="post-detail__meta">
          By{" "}
          <Link to={`/users/${post.userId}`}>
            User #{post.userId}
          </Link>
        </p>

        <p className="post-detail__body">{post.body}</p>
      </article>

      <section className="comments">
        <h2 className="comments__heading">
          Comments ({comments.length})
        </h2>

        {comments.map((comment) => (
          <CommentCard key={comment.id} {...comment} />
        ))}
      </section>
    </section>
  );
}