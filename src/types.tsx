export type boundValue = {
    popularity: number
    value: string
}
export type DbSearchCategory = {
    id: number
    keyword: string
    boundValues: string
    popularity: number
  }
export type SearchCategory = {
    id: number
    keyword: string
    boundValues: boundValue[]
    popularity: number
}
export type SearchCategoryParams = {
    normalText: string;
    boldedPartBefore?: string
    boldedPartAfter: string,
    popularity: number
  };