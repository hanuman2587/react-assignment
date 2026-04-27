import "../styles/usercard.css";

export default function UserCard({ name, email, company, website }) {
  return (
    <div className="user-card">
      <div className="user-card__avatar">
        {name ? name.charAt(0).toUpperCase() : "?"}
      </div>

      <div className="user-card__info">
        <h2 className="user-card__name">{name || "No Name"}</h2>
        <p className="user-card__email">{email || "No Email"}</p>

        <p className="user-card__company">
          {company?.name || "No Company"}
        </p>

        <a
          className="user-card__website"
          href={`https://${website}`}
          target="_blank"
          rel="noreferrer"
        >
          {website || "No Website"}
        </a>
      </div>
    </div>
  );
}