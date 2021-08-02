import * as React from 'react'
import { format } from 'date-fns'
import { nl } from 'date-fns/locale'
import 'bootstrap/dist/css/bootstrap.min.css'
import DatePicker from './DatePicker'

const App: React.FC = () => {
  const [date, setDate] = React.useState(new Date())

  return (
    <div className="p-5">
      <h3 className="mb-5">
        Date picked: {format(date, 'dd MMMM yyyy', { locale: nl })}
      </h3>

      <DatePicker
        selected={date}
        onChange={date => setDate(date)}
        locale={nl}
        weekStartsOn={1}
      />
    </div>
  )
}

export default App
