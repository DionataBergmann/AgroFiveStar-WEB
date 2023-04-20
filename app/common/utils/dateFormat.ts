export function dateFormat(date: string) {
  const localDate = new Date(date)
  const monthNames = [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro',
  ]

  const dateToShow =
    monthNames[localDate.getUTCMonth()] +
    ' ' +
    localDate.getUTCFullYear()

  return dateToShow
}
