// ----------------------------------------------------- //
// Complejidad Cognitiva: 3 // Puntos conseguidos: 330
//         Operaciones por segundo: 3172 aprox.
// ----------------------------------------------------- //

function findFirstRepeated(gifts) {
   return gifts.find((gift, index, arr) => arr.indexOf(gift) != index) ?? -1
}

// ----------------------------------------------------- //
// Complejidad Cognitiva: 4 // Puntos conseguidos: 280
//         Operaciones por segundo: 3060 aprox.
// ----------------------------------------------------- //

function findFirstRepeated(gifts) {
   const seen = new Set()
   return gifts.find(gift => seen.has(gift) || !seen.add(gift)) || -1
}

// ----------------------------------------------------- //
// Complejidad Cognitiva: 2 // Puntos conseguidos: 160
//         Operaciones por segundo: 2700 aprox.
// ----------------------------------------------------- //

function findFirstRepeated(gifts) {
   const seen = new Set()
 
   for (let gift of gifts) {
     if (seen.has(gift)) return gift
     seen.add(gift)
   }
   
   return -1
}

// ----------------------------------------------------- //
// Complejidad Cognitiva: 2 // Puntos conseguidos: 160
//         Operaciones por segundo: 2600 aprox.
// ----------------------------------------------------- //

function findFirstRepeated(gifts) {
   const count = {}
     
   for (let gift of gifts) {
     if (count[gift]) return gift
     count[gift] = true
   }
   
   return -1
}

// ----------------------------------------------------- //
// Complejidad Cognitiva: 3 // Puntos conseguidos: 150
//         Operaciones por segundo: 2817 aprox.
// ----------------------------------------------------- //

function findFirstRepeated(gifts) {
   const seen = {}

   for (let i = 0; i < gifts.length; i++) {
     const gift = gifts[i]
     
     if (seen[gift] !== undefined) return gift
     seen[gift] = i
   }

   return -1
}

// ----------------------------------------------------- //
// Complejidad Cognitiva: 5 // Puntos conseguidos: 130
//         Operaciones por segundo: 2300 aprox.
// ----------------------------------------------------- //

function findFirstRepeated(gifts) {
   const seen = gifts.map((gift, index) => {
     if (gifts.slice(0, index).includes(gift)) {
       return gift
     }
   }).filter(e => e != undefined)

   return seen[0] || -1;
}

// ----------------------------------------------------- //