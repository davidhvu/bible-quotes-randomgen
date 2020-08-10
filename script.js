const scripturesNIV = [{

    scripture: "1 Corinthians 12:12",
    verse: "Just as a body, though one, has many parts, but all its many parts form one body, so it is with Christ."

}, {

    scripture: "Romans 12:12",
    verse: "Be joyful in hope, patient in affliction, faithful in prayer."

}, {

    scripture: "Colossians 3: 12-14",
    verse: "Therefore, as God’s chosen people, holy and dearly loved, clothe yourselves with compassion, kindness, humility, gentleness and patience. Bear with each other and forgive one another if any of you has a grievance against someone. Forgive as the Lord forgave you. And over all these virtues put on love, which binds them all together in perfect unity."

}]


document.querySelector("#gen-quote").onclick = function generateQuote() {

    const genRandom = Math.floor(Math.random() * scripturesNIV.length)
    const genQuote = (genRandom, scripturesNIV[genRandom])
    console.log(genQuote)
    const strArr = JSON.stringify(genQuote, null, 4)
    console.log(strArr)
    const getGenRand = function (scripture) {
        const quoteDOM = document.createElement("h3")
        quoteDOM.innerHTML = `${strArr}`
        return quoteDOM
    }
    console.log(getGenRand(scripturesNIV))
    document.querySelector("#quote-box").innerHTML = ""
    document.querySelector("#quote-box").appendChild(getGenRand(scripturesNIV))

}

