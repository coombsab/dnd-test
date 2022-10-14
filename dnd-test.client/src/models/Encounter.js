export class Encounter {

  constructor(data) {
    this.id = data.id
    this.name = data.id
    this.desc = data.desc || ''
    this.campaignId = data.campaignId
    this.type = data.type || 'fight'
    this.isCompleted = data.isCompleted || false
    this.coverImg = data.coverImg || ''
    this.musicUrl = data.musicUrl || ''
  }
}