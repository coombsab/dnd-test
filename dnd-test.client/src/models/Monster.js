export class Monster {

  constructor(data) {
    this.id = data.id
    this.index = data.index
    this.desc = data.desc
    this.name = data.name
    this.encounterId = data.encounterId
    this.hit_points = data.hit_points
    this.type = data.type
    this.size = data.size
    this.alignment = data.alignment
    this.icon = data.icon
    this.initiative = data.initiative
    this.image = data.image ? "https://www.dnd5eapi.co" + data.image : "https://www.charlotteathleticclub.com/assets/camaleon_cms/image-not-found-4a963b95bf081c3ea02923dceaeb3f8085e1a654fc54840aac61a57a60903fef.png"
    this.nickName = data.nickName
  }
}