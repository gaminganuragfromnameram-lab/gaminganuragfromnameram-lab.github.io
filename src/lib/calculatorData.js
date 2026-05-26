export const cpuOptions = [
  // AMD Ryzen 5000 series (2020)
  "AMD Ryzen 5 5500",
  "AMD Ryzen 5 5600X",
  "AMD Ryzen 7 5800X",
  "AMD Ryzen 7 5800X3D",
  "AMD Ryzen 9 5900X",
  "AMD Ryzen 9 5950X",
  // AMD Ryzen 7000 series (2022)
  "AMD Ryzen 5 7600X",
  "AMD Ryzen 7 7700X",
  "AMD Ryzen 7 7800X3D",
  "AMD Ryzen 9 7900X",
  "AMD Ryzen 9 7950X",
  // AMD Ryzen 9000 series (2024)
  "AMD Ryzen 5 9600X",
  "AMD Ryzen 7 9700X",
  "AMD Ryzen 7 9800X3D",
  "AMD Ryzen 9 9900X",
  "AMD Ryzen 9 9950X",
  // Intel 12th Gen (2021)
  "Intel Core i3-12100F",
  "Intel Core i5-12400F",
  "Intel Core i5-12600K",
  "Intel Core i7-12700K",
  "Intel Core i9-12900K",
  // Intel 13th Gen (2022)
  "Intel Core i5-13400F",
  "Intel Core i5-13600K",
  "Intel Core i7-13700K",
  "Intel Core i9-13900K",
  // Intel 14th Gen (2023)
  "Intel Core i5-14400F",
  "Intel Core i5-14500",
  "Intel Core i5-14600K",
  "Intel Core i7-14700K",
  "Intel Core i9-14900K",
  // Intel Arrow Lake (2024)
  "Intel Core Ultra 5 245K",
  "Intel Core Ultra 7 265K",
  "Intel Core Ultra 9 285K",
];

export const gpuOptions = [
  // NVIDIA RTX 20 series (2018-2019)
  "NVIDIA RTX 2060",
  "NVIDIA RTX 2060 Super",
  "NVIDIA RTX 2070 Super",
  "NVIDIA RTX 2080 Super",
  "NVIDIA RTX 2080 Ti",
  // NVIDIA RTX 30 series (2020-2022)
  "NVIDIA RTX 3050",
  "NVIDIA RTX 3060",
  "NVIDIA RTX 3060 Ti",
  "NVIDIA RTX 3070",
  "NVIDIA RTX 3070 Ti",
  "NVIDIA RTX 3080",
  "NVIDIA RTX 3080 Ti",
  "NVIDIA RTX 3090",
  "NVIDIA RTX 3090 Ti",
  // NVIDIA RTX 40 series (2022-2024)
  "NVIDIA RTX 4060",
  "NVIDIA RTX 4060 Ti",
  "NVIDIA RTX 4070",
  "NVIDIA RTX 4070 Super",
  "NVIDIA RTX 4070 Ti Super",
  "NVIDIA RTX 4080",
  "NVIDIA RTX 4080 Super",
  "NVIDIA RTX 4090",
  // NVIDIA RTX 50 series (2025)
  "NVIDIA RTX 5060",
  "NVIDIA RTX 5060 Ti",
  "NVIDIA RTX 5070",
  "NVIDIA RTX 5070 Ti",
  "NVIDIA RTX 5080",
  "NVIDIA RTX 5090",
  // AMD RX 6000 series (2020-2022)
  "AMD Radeon RX 6600",
  "AMD Radeon RX 6600 XT",
  "AMD Radeon RX 6650 XT",
  "AMD Radeon RX 6700 XT",
  "AMD Radeon RX 6750 XT",
  "AMD Radeon RX 6800 XT",
  "AMD Radeon RX 6900 XT",
  "AMD Radeon RX 6950 XT",
  // AMD RX 7000 series (2022-2024)
  "AMD Radeon RX 7600",
  "AMD Radeon RX 7600 XT",
  "AMD Radeon RX 7700 XT",
  "AMD Radeon RX 7800 XT",
  "AMD Radeon RX 7900 GRE",
  "AMD Radeon RX 7900 XT",
  "AMD Radeon RX 7900 XTX",
  // AMD RX 9000 series (2025)
  "AMD Radeon RX 9070",
  "AMD Radeon RX 9070 XT",
];

export const ramOptions = [
  "8GB DDR3 1600MHz",
  "16GB DDR3 1600MHz",
  "8GB DDR4 2400MHz",
  "8GB DDR4 3200MHz",
  "16GB DDR4 2400MHz",
  "16GB DDR4 3200MHz",
  "16GB DDR4 3600MHz",
  "32GB DDR4 3200MHz",
  "32GB DDR4 3600MHz",
  "16GB DDR5 4800MHz",
  "16GB DDR5 5600MHz",
  "16GB DDR5 6000MHz",
  "32GB DDR5 5600MHz",
  "32GB DDR5 6000MHz",
  "32GB DDR5 6400MHz",
  "64GB DDR5 6000MHz",
];

export const storageOptions = ["HDD", "SATA SSD", "NVMe SSD"];

export const displayOptions = [
  "60Hz",
  "75Hz",
  "144Hz",
  "165Hz",
  "240Hz",
  "360Hz",
];

export const gameOptions = [
  "Cyberpunk 2077",
  "GTA VI",
  "Valorant",
  "Elden Ring",
  "Counter-Strike 2",
  "Fortnite",
  "Call of Duty: Warzone",
  "Hogwarts Legacy",
  "Baldur's Gate 3",
  "Starfield",
  "The Witcher 3: Wild Hunt",
  "Red Dead Redemption 2",
  "Apex Legends",
  "Overwatch 2",
  "League of Legends",
  "Minecraft",
  "Palworld",
  "Helldivers 2",
  "Spider-Man: Miles Morales",
  "God of War Ragnarök",
  "Alan Wake 2",
  "Black Myth: Wukong",
  "The Finals",
  "Destiny 2",
  "Diablo IV",
  "Final Fantasy XVI",
  "Horizon Forbidden West",
  "Resident Evil 4 Remake",
  "Street Fighter 6",
  "Armored Core VI",
];

// GPU power tiers (0-10 scale)
const gpuTier = {
  // RTX 20 series
  "NVIDIA RTX 2060": 3.5,
  "NVIDIA RTX 2060 Super": 4,
  "NVIDIA RTX 2070 Super": 4.5,
  "NVIDIA RTX 2080 Super": 5,
  "NVIDIA RTX 2080 Ti": 5.5,
  // RTX 30 series
  "NVIDIA RTX 3050": 3,
  "NVIDIA RTX 3060": 4,
  "NVIDIA RTX 3060 Ti": 4.5,
  "NVIDIA RTX 3070": 5,
  "NVIDIA RTX 3070 Ti": 5.5,
  "NVIDIA RTX 3080": 6.5,
  "NVIDIA RTX 3080 Ti": 7,
  "NVIDIA RTX 3090": 7,
  "NVIDIA RTX 3090 Ti": 7.2,
  // RTX 40 series
  "NVIDIA RTX 4060": 4.5,
  "NVIDIA RTX 4060 Ti": 5,
  "NVIDIA RTX 4070": 5.5,
  "NVIDIA RTX 4070 Super": 6,
  "NVIDIA RTX 4070 Ti Super": 6.5,
  "NVIDIA RTX 4080": 7.5,
  "NVIDIA RTX 4080 Super": 7.8,
  "NVIDIA RTX 4090": 9,
  // RTX 50 series
  "NVIDIA RTX 5060": 5,
  "NVIDIA RTX 5060 Ti": 5.5,
  "NVIDIA RTX 5070": 7,
  "NVIDIA RTX 5070 Ti": 7.5,
  "NVIDIA RTX 5080": 8.5,
  "NVIDIA RTX 5090": 10,
  // AMD RX 6000 series
  "AMD Radeon RX 6600": 3,
  "AMD Radeon RX 6600 XT": 3.5,
  "AMD Radeon RX 6650 XT": 3.5,
  "AMD Radeon RX 6700 XT": 4,
  "AMD Radeon RX 6750 XT": 4.2,
  "AMD Radeon RX 6800 XT": 5.5,
  "AMD Radeon RX 6900 XT": 6,
  "AMD Radeon RX 6950 XT": 6.3,
  // AMD RX 7000 series
  "AMD Radeon RX 7600": 3.5,
  "AMD Radeon RX 7600 XT": 4,
  "AMD Radeon RX 7700 XT": 4.5,
  "AMD Radeon RX 7800 XT": 5.5,
  "AMD Radeon RX 7900 GRE": 6,
  "AMD Radeon RX 7900 XT": 6.5,
  "AMD Radeon RX 7900 XTX": 7,
  // AMD RX 9000 series
  "AMD Radeon RX 9070": 6.5,
  "AMD Radeon RX 9070 XT": 7,
};

// Game demand (higher = more demanding)
const gameDemand = {
  "Cyberpunk 2077": 9,
  "GTA VI": 9.5,
  Valorant: 2,
  "Elden Ring": 6,
  "Counter-Strike 2": 3,
  Fortnite: 3,
  "Call of Duty: Warzone": 6,
  "Hogwarts Legacy": 7.5,
  "Baldur's Gate 3": 6.5,
  Starfield: 8,
  "The Witcher 3: Wild Hunt": 5,
  "Red Dead Redemption 2": 7,
  "Apex Legends": 4,
  "Overwatch 2": 3,
  "League of Legends": 1.5,
  Minecraft: 2,
  Palworld: 5,
  "Helldivers 2": 6,
  "Spider-Man: Miles Morales": 7,
  "God of War Ragnarök": 7.5,
  "Alan Wake 2": 9.5,
  "Black Myth: Wukong": 9,
  "The Finals": 5.5,
  "Destiny 2": 4.5,
  "Diablo IV": 5,
  "Final Fantasy XVI": 6.5,
  "Horizon Forbidden West": 7.5,
  "Resident Evil 4 Remake": 6,
  "Street Fighter 6": 4,
  "Armored Core VI": 6,
};

export function calculateFPS(selections) {
  const { cpu, gpu, ram, storage, display, game } = selections;

  const gpuPower = gpuTier[gpu] || 5;
  const demand = gameDemand[game] || 5;

  // RAM bonus
  let ramMultiplier = 1;
  if (ram.includes("DDR5")) ramMultiplier = 1.1;
  if (ram.includes("64GB")) ramMultiplier *= 1.05;
  if (ram.includes("32GB")) ramMultiplier *= 1.02;
  if (ram.includes("8GB")) ramMultiplier *= 0.85;

  // Storage bonus
  let storageBonus = 0;
  if (storage === "NVMe SSD") storageBonus = 5;
  if (storage === "SATA SSD") storageBonus = 2;

  // CPU bonus (rough)
  let cpuBonus = 1;
  if (
    cpu.includes("9950X") ||
    cpu.includes("9900X") ||
    cpu.includes("9800X3D") ||
    cpu.includes("285K")
  )
    cpuBonus = 1.15;
  else if (
    cpu.includes("7800X3D") ||
    cpu.includes("7950X") ||
    cpu.includes("14900K") ||
    cpu.includes("265K")
  )
    cpuBonus = 1.1;
  else if (
    cpu.includes("7700X") ||
    cpu.includes("14700K") ||
    cpu.includes("13900K") ||
    cpu.includes("245K")
  )
    cpuBonus = 1.05;
  else if (
    cpu.includes("5600X") ||
    cpu.includes("5500") ||
    cpu.includes("12400F") ||
    cpu.includes("12100F") ||
    cpu.includes("7600X")
  )
    cpuBonus = 0.95;
  else if (
    cpu.includes("14500") ||
    cpu.includes("13400F") ||
    cpu.includes("13600K")
  )
    cpuBonus = 1.0;

  // Base FPS calculation
  const basePower = gpuPower * 20;
  const highFPS = Math.round(
    (basePower / (demand * 0.55)) * cpuBonus * ramMultiplier + storageBonus,
  );
  const medFPS = Math.round(highFPS * 1.45);
  const lowFPS = Math.round(highFPS * 2.1);

  // Cap values
  const cap = (v) => Math.min(Math.max(v, 15), 500);

  return {
    low: cap(lowFPS),
    medium: cap(medFPS),
    high: cap(highFPS),
  };
}
