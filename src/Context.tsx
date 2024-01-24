import { ReactNode, useContext, useState } from "react";
import { createContext } from "react";
import { SearchCategory } from "./types";
type GlobalContextType = {
    query: string;
    setQuery: React.Dispatch<React.SetStateAction<string>>;
    results: SearchCategory[];
    setResults: React.Dispatch<React.SetStateAction<SearchCategory[]>>;

  };

export const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

export const GlobalContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [query, setQuery] = useState<string>("");
  const [results, setResults] = useState<SearchCategory[]>([

      {
        "id": 1,
        "keyword": "apple",
        "boundValues": [
          { "value": "apple juice", "popularity": 45 },
          { "value": "apples", "popularity": 0 },
          { "value": "apple Iphone", "popularity": 100 },
          { "value": "best apples", "popularity": 0 }
        ],
        "popularity": 45
      },
      
      // Rest of the SearchCategory objects

    // {"id":2,"value":"sem duis aliquam convallis","boundKeywords":["banana","elephant"],"popularity":79},
    // {"id":3,"value":"tincidunt nulla mollis molestie","boundKeywords":["elephant"],"popularity":10},
    // {"id":4,"value":"turpis integer aliquet massa id","boundKeywords":["banana","dog"],"popularity":17},
    // {"id":5,"value":"sapien ut nunc","boundKeywords":["elephant"],"popularity":13},
    // {"id":6,"value":"semper","boundKeywords":["apple"],"popularity":95},
    // {"id":7,"value":"eu","boundKeywords":["carrot"],"popularity":85},
    // {"id":8,"value":"adipiscing elit","boundKeywords":["apple"],"popularity":33},
    // {"id":9,"value":"proin leo odio porttitor id","boundKeywords":["dog"],"popularity":99},
    // {"id":10,"value":"donec pharetra magna vestibulum aliquet","boundKeywords":["elephant","apple"],"popularity":53}
  ]);
  let globalContextValue = {
    query,
    setQuery,
    results,
    setResults
  };

  return <GlobalContext.Provider value={globalContextValue}>{children}</GlobalContext.Provider>;
};

export const useGlobal = () => {
  const context = useContext(GlobalContext);

  if (!context) {
    throw new Error("useQuery must be used within a GlobalContextProvider");
  }

  return context;
};