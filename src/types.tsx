export type boundValue = {
    popularity: number
    value: string
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