const getNextBatchUrl = (
  count: boolean,
  page: string,
  endpoint: string
): string | null => {
  // Current result count may not always mean there's more results.
  // But we'll adopt this for now since the Cats API doesn't give us any clue
  const nextPage = +page + 1
  return !!count
    ? `${process.env.APP_BASE_URL}${endpoint}?page=${nextPage}`
    : null
}

export default getNextBatchUrl
