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

## Configuration

| Prop           | Required | Default | Description                                                                                     |
| -------------- | -------- | ------- | ----------------------------------------------------------------------------------------------- |
| `initialDate`  | &check;  |         | The date that should be selected when the datepicker is first rendered.                                                     |
| `onChange`     | &check;  |         | A callback function that will fire once a new date has been selected.                           |
| `weekStartsOn` |          | `1`     | The day used as the first day of the week. `0` is sunday, `1` is monday, etc. |
