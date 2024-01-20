// ----------------------------------------------------- //
// Complejidad Cognitiva: 3 // Puntos conseguidos: 270
//         Operaciones por segundo: 2875 aprox.
// ----------------------------------------------------- //

function manufacture(gifts, materials) {
  return gifts.filter((gift) => {
    return [...gift].every((char) => {
      return materials.includes(char)
    })
  })
}

// ----------------------------------------------------- //
// Complejidad Cognitiva: 3 // Puntos conseguidos: 270
//         Operaciones por segundo: 2709 aprox.
// ----------------------------------------------------- //


function manufacture(gifts, materials) {
  let array = []

  for (let gift of gifts) {
     let push = true
     for (let letter of gift) {
        if (!materials.includes(letter)) push = false
     }
     if (push) array.push(gift)
  }

  return array
}