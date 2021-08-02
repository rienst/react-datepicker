# React datepicker

A datepicker React component written in TypeScript. Requires [date-fns](https://www.npmjs.com/package/date-fns).

```js
import { useState } from 'react'
import DatePicker from './DatePicker'

const App = () => {
  const [date, setDate] = useState(new Date())

  return <DatePicker initialDate={date} onChange={date => setDate(date)} />
}
```
