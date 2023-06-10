

const createDOM = () => {

    const div = document.createElement("div"),
        img = document.createElement("img")

    const chaki = "/img/chaki.jpg",
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
        if (flash === count) {
            clearInterval(interval)
            flash = 0
            if (img.src.indexOf(whiteFace) > -1) {
                debugger
                setChaki()
            } else {
                debugger
                setWhiteFace()
            }
        }
        toogle()

        ++flash
    }

    let interval = (count) => setInterval(() => flashing(count), 100)

    const setWhiteFace = () => {
        debugger
        img.src = whiteFace
        interval(4)
        // img.style.visibility = "visible"

    }

    const setChaki = () => {
        debugger
        img.src = chaki
        interval(2)
        // img.style.visibility = "visible"

    }

    setWhiteFace()
}



document.addEventListener("DOMContentLoaded", createDOM);