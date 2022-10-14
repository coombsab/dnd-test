export class Campaign {

  constructor(data) {
    this.id = data.id
    this.name = data.name
    this.creatorId = data.creatorId
    this.desc = data.desc
    this.coverImg = data.coverImg || 'https://i.pinimg.com/originals/db/98/1d/db981db279d5988e238855faa73dce9e.jpg'
  }
}