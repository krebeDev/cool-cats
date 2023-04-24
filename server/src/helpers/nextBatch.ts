const APP_BASE_URL = `${process.env.APP_BASE_URL}`

const getNextBatchUrl = (
  count: boolean,
  page: string,
  endpoint: string
): string | null => {
  // Current result count may not always mean there's more results.
  // But we'll adopt this for now since the Cats API doesn't give us any clue
  return !!count ? `${APP_BASE_URL}${endpoint}?page=${page + 1}` : null
}

export default getNextBatchUrl
