const getNextBatchUrl = (
  count: number,
  queryLimit: number,
  page: string,
  endpoint: string
): string | null => {
  const nextPage = +page + 1
  return count > queryLimit
    ? `${process.env.APP_BASE_URL}${endpoint}?page=${nextPage}`
    : null
}

export default getNextBatchUrl
