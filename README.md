# React datepicker

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

## Configuration

| Prop           | Required | Type                              | Default | Description                                                                   |
| -------------- | -------- | --------------------------------- | ------- | ----------------------------------------------------------------------------- |
| `selected`     | &check;  | `Date`                            |         | The date that should be selected when the datepicker is first rendered.       |
| `onChange`     | &check;  | `(date: Date) => any`             |         | A callback function that will fire once a new date has been selected.         |
| `weekStartsOn` |          | `0 \| 1 \| 2 \| 3 \| 4 \| 5 \| 6` | `1`     | The day used as the first day of the week. `0` is sunday, `1` is monday, etc. |
