import { useGlobal } from "../Context";
import OneQuery from "./OneQuery";
import { SearchCategoryParams } from "../types";
import { useEffect, useState } from "react";

const QueryListTable = () => {
  const { results, query } = useGlobal();
  const [shownResults, setShownResults] = useState<SearchCategoryParams[]>([]);

  useEffect(() => {
    let newShownResults: SearchCategoryParams[] = [];

    results.forEach((result) => {
      console.log(result);
      const fullquery = result.fullquery.replace(/\s+/g, " ");

      const queryWithoutRedundantSpaces = query.replace(/\s+/g, " ");

      const indexOfQuery = fullquery
        .toLocaleLowerCase()
        .indexOf(queryWithoutRedundantSpaces.toLocaleLowerCase());
      const beforeQuery = fullquery.slice(0, indexOfQuery);
      const afterQuery = fullquery.slice(
        indexOfQuery + queryWithoutRedundantSpaces.length
      );

      newShownResults.push({
        boldedPartBefore: beforeQuery,
        normalText: queryWithoutRedundantSpaces,
        boldedPartAfter: afterQuery,
        popularity: result.popularity,
      });
    });
    // Sort the newShownQueries array based on popularity in descending order
    newShownResults.sort((a, b) => b.popularity - a.popularity);
    setShownResults(newShownResults);
  }, [query, results]);

  return (
    <>
      {shownResults.length > 0 && query && (
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
            {shownResults.slice(0, 10).map((result, key) => {
              // this will only show the first 10 queries
              return (

              <OneQuery
                  key={key}
                  boldedPartBefore={result.boldedPartBefore}
                  normalText={result.normalText}
                  boldedPartAfter={result.boldedPartAfter}
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
