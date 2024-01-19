function findFirstRepeated(gifts) {
   const seen = {}
   let firstSeenIndex = Infinity
 
   for (let i = 0; i < gifts.length; i++) {
     const currentGift = gifts[i]
 
     if (seen[currentGift] >= 0) {
       firstSeenIndex = Math.min(firstSeenIndex, i)
       return currentGift
     }
 
     seen[currentGift] = i
   }
 
   return -1 
 }
console.log(Infinity)

/*  const giftIds = [2, 1, 3, 5, 3, 2]
 const firstRepeatedId = findFirstRepeated(giftIds)
 console.log(firstRepeatedId) // 3
 // Aunque el 2 y el 3 se repiten
 // el 3 aparece primero por segunda vez
 
 const giftIds2 = [1, 2, 3, 4]
 const firstRepeatedId2 = findFirstRepeated(giftIds2)
 console.log(firstRepeatedId2) // -1
 // Es -1 ya que no se repite ningún número
 
 const giftIds3 = [5, 1, 5, 1]
 const firstRepeatedId3 = findFirstRepeated(giftIds3)
 console.log(firstRepeatedId3) // 5 */