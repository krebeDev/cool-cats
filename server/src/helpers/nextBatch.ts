const getNextBatchUrl = (
  count: number,
  queryLimit: number,
  page: string,
  endpoint: string
): string | null => {
  const nextPage = +page + 1
  return queryLimit > count
    ? null
    : `${process.env.APP_BASE_URL}${endpoint}?page=${nextPage}`
}

export default getNextBatchUrl
