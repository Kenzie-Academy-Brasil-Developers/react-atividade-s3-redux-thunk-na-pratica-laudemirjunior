import { useSelector } from "react-redux";

function Card() {
  const user = useSelector((store) => store.user.comments);

  return (
    <div className="card">
      {user.map((item, index) => (
        <div>
          <p>{item}</p>
        </div>
      ))}
    </div>
  );
}

export default Card;
