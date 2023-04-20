import { addDays, format } from 'date-fns'
// import moment from 'moment';

export type WeekDate = {
  day: number
  month: number
  year: number
}

export type WeekProps = {
  weekDay: string
  weekIndexDay: number
  date: WeekDate
  firstDayOfWeek: Date
  lastDayOfWeek: Date
  currentDay: Date
}

export function createDateObject(
  day: number,
  month: number,
  year: number,
) {
  return {
    day,
    month,
    year,
  }
}

const weekDays = [
  'Domingo',
  'Segunda',
  'Terça',
  'Quarta',
  'Quinta',
  'Sexta',
  'Sábado',
]

export function setWeek(date: Date): WeekProps[] {
  const startOfTheWeekReference = new Date(date)
  const firstDayOfWeek = startOfTheWeekReference
  // const firstDayOfWeek = moment(date).startOf('week').toDate(); // SET first day of the board to last sunday
  const lastDayOfWeek = addDays(firstDayOfWeek, 6)
  const week = []

  let day = 0

  // eslint-disable-next-line unused-imports/no-unused-vars
  for (const dayIndex in weekDays) {
    const currentDay = addDays(firstDayOfWeek, day)
    const formatCurrentDay = format(currentDay, 'yyyy-MM-dd')
    const splitDate = formatCurrentDay.split('-')
    const date = createDateObject(
      Number(splitDate[2]),
      Number(splitDate[1]),
      Number(splitDate[0]),
    )

    week.push({
      weekDay: weekDays[currentDay.getDay()],
      weekIndexDay: Number(currentDay.getDay()),
      firstDayOfWeek: firstDayOfWeek,
      lastDayOfWeek: lastDayOfWeek,
      date: date,
      currentDay: currentDay,
    })
    day = day + 1
  }
  return week
}
