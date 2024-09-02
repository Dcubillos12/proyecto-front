import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getByName, getUsers } from "../../redux/actions";

import Cards from "../../components/cards/Cards.component";
import NavBar from "../../components/navbar/NavBar.component";
import "./Home.styles.css";
function Home() {
  const dispatch = useDispatch();
  const allUsers = useSelector((state) => state.allUsers);
  const [searchString, setSearchString] = useState("");

  function handleChange(e) {
    e.preventDefault();
    setSearchString(e.target.value);
  }
  /*filtro con BACKEND*/

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(getByName(searchString.toLowerCase()));
  }

  /*filtro con el estado*/

  // const [filteredUsers, setFilteredUsers] = useState(allUsers);

  // function handleChange(e) {
  //   e.preventDefault();
  //   setSearchString(e.target.value);
  // }
  // function handleSubmit(e) {
  //   e.preventDefault();
  //   const filtered = allUsers.filter((user) =>
  //     user.name.toLowerCase().includes(searchString.toLowerCase())
  //   );

  //   setFilteredUsers(filtered);
  // }

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  return (
    <div className="home">
      <h2 className="home-title">Home</h2>
      <NavBar handleChange={handleChange} handleSubmit={handleSubmit} />
      <Cards allUsers={allUsers} />
    </div>
  );
}

export default Home;
