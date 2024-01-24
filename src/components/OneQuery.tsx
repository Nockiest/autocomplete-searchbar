
// import { useGlobal } from "../Context";
// import { SearchCategory } from "../types";

import { SearchCategoryParams } from "../types";


const OneQuery: React.FC<Omit<SearchCategoryParams, 'popularity'>> = ({ boldedPartBefore, normalText, boldedPartAfter  }) => {
  // const { query } = useGlobal();




  return (
    <tr >
      <td
        style={{
          maxWidth: "300px",
          height: "auto",
          wordWrap: "break-word",
          textAlign: "start",
        }}
      >
        <span style={{ fontWeight: "bold" }}>{boldedPartBefore}</span>{normalText}<span style={{ fontWeight: "bold" }}>{boldedPartAfter}</span>
      </td>
    </tr>
  );
};

export default OneQuery;
