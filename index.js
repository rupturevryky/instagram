const createDOM = () => {
    document.body.removeEventListener("click", createDOM)
    document.querySelector(".startDiv").remove()


    const div = document.createElement("div"),
        img = document.createElement("img")

    const chaki = "/img/chaki.png",
        whiteFace = "/img/whiteFace.png"

    const voise1 = new Audio("./mp3/voice1.mp3"),
        voise2 = new Audio("./mp3/voice2.mp3"),
        voise3 = new Audio("./mp3/voice3.mp3")

    document.body.append(div)
    div.appendChild(img)

    voise1.volume = 1
    voise2.volume = 1
    voise3.volume = 1

    voise2.play()

    document.body.style.cssText = `
        padding: 0;
        margin: 0;
    `
    div.childNodes[0].style.width = "100%"

    const toggle = () => {
        if (img.style.visibility === "hidden") {
            img.style.visibility = "visible"
        } else {
            img.style.visibility = "hidden"
        }
    }

    let flash = 0
    const flashing = (count) => {
        voise1.play()
        if (flash === count) {
            clearInterval(interval);
            flash = 0
            if (img.src.indexOf(whiteFace) > -1) {
                voise3.play()
                setChaki()
            } else {
                setWhiteFace()
            }
        }
        toggle()
        ++flash
    }

    let interval;

    const setWhiteFace = () => {
        voise2.play()
        img.src = whiteFace
        interval = setInterval(() => flashing(16), 90)
    }

    const setChaki = () => {

        img.src = chaki
        interval = setInterval(() => flashing(4), 90)
    }

    setTimeout(setWhiteFace, 600)
}

const start = () => {
    const startDiv = document.createElement("div")
    startDiv.setAttribute("class", "startDiv")
    startDiv.textContent = "Нажмите на страницу, чтобы продолжить"
    document.body.append(startDiv)
    document.body.style.height = "100vh"
    document.body.addEventListener("click", createDOM)
}

document.addEventListener("DOMContentLoaded", start);