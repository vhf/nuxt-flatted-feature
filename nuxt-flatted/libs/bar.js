import { parse, stringify } from 'flatted/cjs'

export default class Bar {
  constructor (id = Math.random()) {
    this.id = id
  }

  transform () {
    return this.id * 2
  }

  serialize () {
    return stringify(this)
  }

  static reviver (key, value) {
    if (key === 'id') {
      return new Bar(value)
    }

    if (key === '') {
      return value.id
    }

    return value
  }

  static deserialize (bar) {
    return parse(bar, Bar.reviver)
  }
}
