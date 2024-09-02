import "./Card.styles.css";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
function Card({ user }) {
  const { name, email, phone, id } = user;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: "GET_DETAIL", payload: id });
  }, [dispatch, id]);

  return (
    <div className="card-container">
      <Link to={`home/${id}`}>
        <h2>{name}</h2>
        <p>{email}</p>
        <p>{phone}</p>
      </Link>
    </div>
  );
}

export default Card;
