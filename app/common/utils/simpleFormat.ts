export function simpleDateFormat(date: string) {
  const localDate = new Date(date)

  const dateToShow =
    localDate.getUTCDate() +
    '/' +
    (localDate.getUTCMonth() + 1) +
    '/' +
    localDate.getUTCFullYear()

  return dateToShow
}
