// import { SearchCategory } from '../types'
import { useGlobal } from "../Context";
import OneQuery from "./OneQuery";
import {   SearchCategoryParams } from "../types";
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
    const keywordWithoutSpaces = search.replace(/\s+/g, " ");
    const queryWithoutSpaces = query.replace(/\s+/g, " ");
    console.log( keywordWithoutSpaces.toLocaleLowerCase().indexOf(queryWithoutSpaces),keywordWithoutSpaces, queryWithoutSpaces)
    return (
      keywordWithoutSpaces.toLocaleLowerCase().indexOf(queryWithoutSpaces) === 0
    );
  };







useEffect(() => {
  let newShownQueries: SearchCategoryParams[] = [];

  results.forEach((result) => {
    result.boundValues.forEach((boundValue) => {
      let { value, popularity } = boundValue;
      value = value.replace(/\s+/g, " ");

      const queryWithoutRedundantSpaces = query.replace(/\s+/g, " ");
      if (!checkSearchRelevant(value, queryWithoutRedundantSpaces)) {
        return;
      }
      const indexOfQuery = value
        .toLocaleLowerCase()
        .indexOf(queryWithoutRedundantSpaces.toLocaleLowerCase());
        console.log(value, indexOfQuery, queryWithoutRedundantSpaces)
      const beforeQuery = value.slice(0, indexOfQuery);
      const afterQuery = value.slice(indexOfQuery + queryWithoutRedundantSpaces.length);
      console.log(beforeQuery, afterQuery)
      newShownQueries.push({
        boldedPartBefore: beforeQuery,
        normalText: queryWithoutRedundantSpaces,
        boldedPartAfter: afterQuery,
        popularity,
      });
    });
  });

  // Sort the newShownQueries array based on popularity in descending order
  newShownQueries.sort((a, b) => b.popularity - a.popularity);

  setShownQueries(newShownQueries);

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
