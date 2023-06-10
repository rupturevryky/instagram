

const createDOM = () => {

    const div = document.createElement("div"),
        img = document.createElement("img")

    const chaki = "/img/chaki.png",
        whiteFace = "/img/whiteFace.png"

    document.body.append(div)
    div.appendChild(img)

    document.body.style.cssText = `
        padding: 0;
        margin: 0;
    `
    div.childNodes[0].style.cssText = `
        position: relative;
        width: 100%;
        visibility: visible;
    `

    const toogle = () => {
        if (img.style.visibility === "hidden") {
            img.style.visibility = "visible"
        } else {
            img.style.visibility = "hidden"
        }
    }

    let flash = 0
    const flashing = (count) => {
        debugger
        if (flash === count) {
            clearInterval(interval);
            debugger
            flash = 0
            if (img.src.indexOf(whiteFace) > -1) {
                setChaki()
            } else {
                setWhiteFace()
            }
        }
        toogle()
        ++flash
    }

    let interval;

    const setWhiteFace = () => {
        debugger
        img.src = whiteFace
        interval = setInterval(() => flashing(16), 90)
    }

    const setChaki = () => {
        debugger
        img.src = chaki
        interval = setInterval(() => flashing(4), 90)
    }

    setWhiteFace()
}



document.addEventListener("DOMContentLoaded", createDOM);