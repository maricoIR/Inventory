import Actionbar from "./components/Actionbar";
import Table from "./components/Table";
import Container from "./components/Container";
import { useEffect } from "react";
import Edit from "./components/Edit";
import Add from "./components/Add";
import { useContext } from "react";
import { DataContext } from "../../context/DataContext";
import "./styles.css";

const Home = () => {
  const {
    state: { add, edit, searchTerm },
    dispatch,
  } = useContext(DataContext);

  useEffect(() => {
    dispatch({ searchTerm: "" });
  }, [edit]);

  if (edit) {
    return (
      <Container>
        <Edit />
      </Container>
    );
  }
  if (add) {
    return (
      <Container>
        <Add />
      </Container>
    );
  }
  return (
    <Container>
      <Actionbar />
      <Table />
    </Container>
  );
};

export default Home;
