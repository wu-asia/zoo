import { ANIMALS } from "./animals.js";
import { CONFIG } from "./config.js";

export const upgradeCost = (upgrade, level) => Math.floor(upgrade.baseCost * Math.pow(2.35, level));

export class Zoo {
  constructor(store) { this.store = store; }
  get capturedAnimals() { return ANIMALS.filter(a => this.store.state.captured.includes(a.id)); }
  get passiveRate() {
    const { habitat, income } = this.store.state.upgrades;
    return this.capturedAnimals.length * (1 + habitat * .2) * (1 + income * .35) / 20;
  }
  collect() { return this.store.collectIncome(this.capturedAnimals.length); }
  buy(id) {
    const upgrade = CONFIG.upgrades.find(item => item.id === id);
    return this.store.upgrade(id, upgradeCost(upgrade, this.store.state.upgrades[id]));
  }
}
