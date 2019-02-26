export default class Bar {
  constructor (id = Math.random()) {
    this.id = id
  }
  transform () {
    return this.id * 2
  }
}
