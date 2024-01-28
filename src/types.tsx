// export type boundValue = {
//     popularity: number
//     value: string
// }
export type DbSearchResult = {
    id: number
    keyword: string
    fullquery: string

    popularity: number
  }
// export type SearchCategory = {
//     id: number
//     keyword: string
//     fullquery: string
//     // boundValues: boundValue[]
//     popularity: number
// }
export type SearchCategoryParams = {
    normalText: string;
    boldedPartBefore?: string
    boldedPartAfter: string,
    popularity: number
  };