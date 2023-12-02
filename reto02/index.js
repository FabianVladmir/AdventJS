function manufacture(gifts, materials) {
    const result = new Set();
  
    const materialsSet = new Set(materials);
  
    for (const word of gifts) {
      let canBeFormed = true;
  
      for (const ch of word) {
        if (!materialsSet.has(ch)) {
          canBeFormed = false;
          break;
        }
      }
  
      if (canBeFormed) {
        result.add(word);
      }
    }
  
    return Array.from(result);
  }
  
  console.log(manufacture(['tren', 'oso', 'pelota'], 'tronesa'));
  // Output: ["tren", "oso"]
