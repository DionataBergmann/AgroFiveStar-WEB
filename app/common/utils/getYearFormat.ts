export function getYearFormat(date: string) {
  const localDate = new Date(date)

  const dateToShow = localDate.getUTCFullYear()

  return dateToShow
}
