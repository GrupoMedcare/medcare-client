import dayjs from "dayjs";
import ptBr from "dayjs/locale/pt-br"
import utc from "dayjs/plugin/utc"
import timezone from "dayjs/plugin/timezone"
import customParse from "dayjs/plugin/customParseFormat"
dayjs.locale(ptBr)
dayjs.extend(utc)
dayjs.extend(customParse)
dayjs.extend(timezone)

const DayJs = dayjs

export default DayJs