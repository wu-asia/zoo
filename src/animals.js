export const ANIMALS = [
  { id: "dawn-mare", name: "曙原马", icon: "♞", color: "#c47b53", rarity: "常见", biome: "草原区", description: "在晨雾里奔跑的耐力好手。", speed: 64, accel: 48, handling: 72, stability: 48, rage: 18, skill: "轻蹄：跳跃滞空更久", ability: "longJump", reward: 45, unlock: 0 },
  { id: "moss-bison", name: "苔角野牛", icon: "♜", color: "#5d4535", rarity: "常见", biome: "大型动物区", description: "角上长着微绿苔藓的沉稳旅者。", speed: 56, accel: 36, handling: 43, stability: 83, rage: 22, skill: "破障：撞碎木箱", ability: "crate", reward: 55, unlock: 0 },
  { id: "ribbon-zebra", name: "缎纹斑马", icon: "♞", color: "#e7e1cc", rarity: "少见", biome: "草原区", description: "条纹像被风拂乱的丝带。", speed: 70, accel: 55, handling: 78, stability: 46, rage: 16, skill: "疾步：切换后的加速", ability: "dash", reward: 75, unlock: 0 },
  { id: "cloud-antelope", name: "云跃羚", icon: "♧", color: "#d49b67", rarity: "少见", biome: "草原区", description: "掠过草尖时仿佛踩着一朵云。", speed: 76, accel: 72, handling: 91, stability: 36, rage: 14, skill: "高跃：可越过岩石", ability: "rockJump", reward: 90, unlock: 1 },
  { id: "ember-rhino", name: "炽角犀", icon: "♛", color: "#727277", rarity: "稀有", biome: "大型动物区", description: "暮色中，额角会映出橘红的光。", speed: 60, accel: 42, handling: 39, stability: 95, rage: 25, skill: "铁甲：无视一次岩石碰撞", ability: "armor", reward: 140, unlock: 1 },
  { id: "canopy-giraffe", name: "冠影长颈鹿", icon: "♚", color: "#e7b85e", rarity: "稀有", biome: "草原区", description: "能从高处看见下一阵风的方向。", speed: 52, accel: 34, handling: 56, stability: 62, rage: 20, skill: "长步：自动跨越倒木", ability: "log", reward: 150, unlock: 2 },
  { id: "river-elephant", name: "河湾象", icon: "♛", color: "#789399", rarity: "稀有", biome: "大型动物区", description: "爱把河水洒成短暂的彩虹。", speed: 49, accel: 30, handling: 35, stability: 100, rage: 28, skill: "推倒：清除树木", ability: "tree", reward: 165, unlock: 2 },
  { id: "sun-lion", name: "曦鬃狮", icon: "♜", color: "#e0a74e", rarity: "传说", biome: "奇珍区", description: "鬃毛里藏着一小片日出。", speed: 82, accel: 64, handling: 68, stability: 58, rage: 12, skill: "威慑：障碍生成更慢", ability: "aura", reward: 280, unlock: 3 }
];

export const animalById = (id) => ANIMALS.find(animal => animal.id === id);
