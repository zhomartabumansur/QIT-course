let totalScore = 0
let score = 5
let attempts = 0

while (attempts < 3) {
    let question1 = prompt("Жерде канша миллиард адам бар?")

    if (question1) {
        totalScore += score
    } else {
        attempts++
        score--
    }

    let question2 = prompt("Бір күнде қанша сағат бар?")

    if (question2) {
        totalScore += score
    } else {
        attempts++
        score--
    }

    let question3 = prompt("Бір минутта қанша секунд бар?")

    if (question3) {
        totalScore += score 
    } else {
        attempts++
        score--
    }
}

alert("Сіздің ұпайыңыз: " + totalScore)