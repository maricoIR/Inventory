import AppRouter from "./AppRouter";
import "./index.css";
import { DataProvider } from "./context/DataContext";

function App() {
  return (
    <DataProvider>
      <AppRouter />
    </DataProvider>
  );
}

export default App;
