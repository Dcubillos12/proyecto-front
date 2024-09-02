import Card from "../card/Card.component";
import "./Cards.styles.css";
function Cards({ allUsers }) {
  const userList = allUsers;
  return (
    <div className="card-list">
      {userList?.map((user) => ( // cortocircuito para evitar erros
        <Card user={user} />
      ))}
    </div>
  );
}

export default Cards;
