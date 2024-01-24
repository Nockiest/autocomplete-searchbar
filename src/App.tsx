import "./App.css";
import QueryListTable from "./components/QueryListTable";
import AutocompleteSearchBar from "./components/SearchBar";
// import QueryListTable from "./components/queryListTable";

import { GlobalContextProvider } from "./Context";

function App() {
  return (
    <GlobalContextProvider>
      <div
        className="App"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          flexDirection: "column",
          // width: '300px'
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "40%",
            left: "50%",
            transform: "translate(-50% )",
          }}
        >
          <AutocompleteSearchBar />
          <QueryListTable />
        </div>
      </div>
    </GlobalContextProvider>
  );
}

export default App;
