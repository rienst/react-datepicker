# React datepicker

![React datepicker](./screenshot.png 'React datepicker')

A datepicker React component written in TypeScript. Requires [date-fns](https://www.npmjs.com/package/date-fns).

```js
import { useState } from 'react'
import { nl } from 'date-fns/locale'
import DatePicker from './DatePicker'

const App = () => {
  const [date, setDate] = useState(new Date())

  return (
    <DatePicker
      selected={date}
      onChange={date => setDate(date)}
      locale={nl}
      weekStartsOn={1}
    />
  )
}
```
