

import searchIcon from "../search.svg";
import "../App.css";
import { useGlobal } from "../Context";

type AutocompleteSearchBarParamas = {
 
};
const AutocompleteSearchBar: React.FC<AutocompleteSearchBarParamas> = () => {
  const { query, setQuery } = useGlobal();

  return (
    <div
      style={{
        padding: "12px",
        borderRadius: "8px",
        border: "1px solid #ccc",
        width: "300px",
        display: "flex",
        justifyContent: "start",
        gap: "0.5em",
        alignItems: "center",

        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
      }}
    >
      <img src={searchIcon} alt="looking-glass" height={16} width={16} />

      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{
          border: "none",
          // zIndex: 1,
          width: '100%'
        }}
      />
    </div>
  );
};

export default AutocompleteSearchBar;
