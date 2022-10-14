import { reactive } from 'vue'

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  user: {},
  /** @type {import('./models/Account.js').Account} */
  account: {},
  /** @type {import('./models/Campaign.js').Campaign} */
  campaigns: [],
  /** @type {import('./models/Campaign.js').Campaign || null} */
  activeCampaign: null,
  /** @type {import('./models/Encounter.js').Encounter} */
  encounters: [],
  /** @type {import('./models/Encounter.js').Encounter || null} */
  activeEncounter: {},
  /** @type {import('./models/Monster.js').Monster[]} */
  monsters: [{ name: "dragon" }, { name: "fel" }],
  /** @type {import('./models/Monster.js').Monster || null} */
  activeMonster: null,
  spells: [],
  activeSpell: null,
  spellIcons: [
    ["acid-arrow", "https://cdnb.artstation.com/p/assets/images/images/009/031/171/large/richard-thomas-paints.jpg?1516736560"],
    ["arcane-hand", "https://cdna.artstation.com/p/assets/images/images/009/031/174/large/richard-thomas-arcane-mark.jpg?1516736572"],
    ["burning-hands", "https://cdnb.artstation.com/p/assets/images/images/009/031/175/large/richard-thomas-burning-hands.jpg?1516736579"],
    ["instant-summons", "https://cdna.artstation.com/p/assets/images/images/009/031/178/large/richard-thomas-cats-grace-2.jpg?1516736583"],
    ["freezing-sphere", "https://cdna.artstation.com/p/assets/images/images/009/031/180/large/richard-thomas-paints2.jpg?1516736588"],
    ["hideous-laughter", "https://cdnb.artstation.com/p/assets/images/images/009/031/181/large/richard-thomas-laughter-9.jpg?1516736596"],
    ["fear", "https://cdna.artstation.com/p/assets/images/images/009/031/186/large/richard-thomas-paints-14.jpg?1516736602"],
    ["protection-from-evil-and-good", "https://cdnb.artstation.com/p/assets/images/images/009/031/187/large/richard-thomas-paints3.jpg?1516736610"],
    ["magic-weapon", "https://cdna.artstation.com/p/assets/images/images/009/031/188/large/richard-thomas-magic-weapon.jpg?1516736615"],
    ["magic-missile", "https://cdna.artstation.com/p/assets/images/images/009/031/190/large/richard-thomas-paints-11-v2.jpg?1516736621"],
    ["mage-armor", "https://cdna.artstation.com/p/assets/images/images/009/031/192/large/richard-thomas-paints-11-v2.jpg?1516736625"],
    ["lightning-bolt", "https://cdna.artstation.com/p/assets/images/images/009/934/134/large/richard-thomas-lightning.jpg?1521653409"]
  ]
})
