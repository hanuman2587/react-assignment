import { useParams, Link } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import UserCard from "../components/UserCard";
import "../styles/pages.css";

const BASE = "https://jsonplaceholder.typicode.com";

export default function UserProfile() {
  const { id } = useParams();

  // Fetch user
  const {
    data: user,
    isLoading: userLoading,
    error: userError,
  } = useFetch(`${BASE}/users/${id}`);

  // Fetch user posts
  const {
    data: userPosts,
    isLoading: postsLoading,
    error: postsError,
  } = useFetch(`${BASE}/posts?userId=${id}`);

  if (userLoading || postsLoading) {
    return <p className="status">Loading…</p>;
  }

  if (userError || postsError) {
    return <p className="status status--error">Something went wrong.</p>;
  }

  return (
    <section className="page">
      {/* User Info */}
      <UserCard
        name={user.name}
        email={user.email}
        company={user.company}
        website={user.website}
      />

      <h2 className="page__subheading">
        Posts by {user.name}
      </h2>

      <ul className="user-posts">
        {userPosts.map((post) => (
          <li key={post.id}>
            <Link to={`/posts/${post.id}`}>
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}