export class SpellShort {
  constructor(data) {
    this.index = data.index
    this.name = data.name
    this.url = data.url
    this.id = data.id || data._id
    this.img = "https://cdn-icons-png.flaticon.com/512/1669/1669398.png"
  }
}