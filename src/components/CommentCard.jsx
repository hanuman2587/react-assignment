import "../styles/commentcard.css";

// TODO: Accept and destructure three props: name, email, body
export default function CommentCard(
  {
    /* name, email, body */name,email,body
  },
) {
  return (
    <div className="comment-card">
      <div className="comment-card__header">
        <span className="comment-card__name">{/* render name here */name}</span>
        <span className="comment-card__email">{/* render email here */email}</span>
      </div>
      <p className="comment-card__body">{/* render body here */body}</p>
    </div>
  );
}