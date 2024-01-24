// import { SearchCategory } from '../types'
import { useGlobal } from "../Context";
import OneQuery from "./OneQuery";
import { SearchCategory, SearchCategoryParams } from "../types";
import { useEffect, useState } from "react";

type QueryListTableProps = {
  // results: SearchCategory[]
  // query: string
};

const QueryListTable: React.FC<QueryListTableProps> = () => {
  const { results, query } = useGlobal();
  const [shownQueries, setShownQueries] = useState<SearchCategoryParams[]>([]);

  const checkSearchRelevant = (search: string, query: string) => {
    if (query.replace(/\s/g, "") === ''){
      return false
    }
    const keywordWithoutSpaces = search.replace(/\s/g, "");
    const queryWithoutSpaces = query.replace(/\s/g, "");
    console.log(keywordWithoutSpaces, queryWithoutSpaces);
    return (
      keywordWithoutSpaces.toLocaleLowerCase().indexOf(queryWithoutSpaces) === 0
    );
  };

useEffect(() => {
  let newShownQueries: SearchCategoryParams[] = [];
  results.forEach((result) => {
    result.boundValues.forEach((boundValue) => {
      const { value, popularity } = boundValue;
      if (!checkSearchRelevant(value, query)) {
        return;
      }
      const indexOfQuery = value
        .toLocaleLowerCase()
        .indexOf(query.toLocaleLowerCase());
      const beforeQuery = value.slice(0, indexOfQuery);
      const afterQuery = value.slice(indexOfQuery + query.length);

      newShownQueries.push({
        boldedPartBefore: beforeQuery,
        normalText: query,
        boldedPartAfter: afterQuery,
        popularity,
      });
    });
  });

  // Sort the newShownQueries array based on popularity in descending order
  newShownQueries.sort((a, b) => b.popularity - a.popularity);

  setShownQueries(newShownQueries);
  console.log(shownQueries);
}, [query, results]);

  return (
    <>
      {shownQueries.length > 0 && query && (
        <table
          style={{
            width: "100%",
            zIndex: -1,
            backgroundColor: "#f7f6f2",
            padding: "0.25em",
            maxHeight: "500px",
          }}
        >
          <tbody>
            {shownQueries.map((shownQuery, key) => {
              return (
                <OneQuery
                  key={key}
                  boldedPartBefore={shownQuery.boldedPartBefore}
                  normalText={shownQuery.normalText}
                  boldedPartAfter={shownQuery.boldedPartAfter}
                />
              );
            })}
          </tbody>
        </table>
      )}
    </>
  );
};

export default QueryListTable;
