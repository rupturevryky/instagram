const createDOM = () => {
    document.body.removeEventListener("click", createDOM)    // удаление действия, которое активироало страницу для звука
    document.querySelector(".startDiv").remove()


    const div = document.createElement("div"),                  // блок, в котором будет хранится изображение
        img = document.createElement("img")

    let chaki, whiteFace;                                       // переменные, хранящие путь к картинкам
    const mediaQuery = window.matchMedia('(max-width: 450px)')  // медиазапрос для выбора размера картинок
    if (mediaQuery.matches) {
        chaki = "./img/chakiMobil.png"
        whiteFace = "./img/whiteFaceMobil.png"
    } else {
        chaki = "./img/chaki.png"
        whiteFace = "./img/whiteFace.png"
    }

    const voise1 = new Audio("./mp3/voice1.mp3"),                  // загрузка звуков
        voise2 = new Audio("./mp3/voice2.mp3"),
        voise3 = new Audio("./mp3/voice3.mp3")

    document.body.append(div)                                       // внедрение в документ блока div и картинки в него
    div.appendChild(img)

    voise1.volume = 1                                               // микшер громкости
    voise2.volume = 1
    voise3.volume = 1

    voise2.play()                                                   // запуск звука2

    document.body.style.cssText = `
        padding: 0;
        margin: 0;
    `
    div.childNodes[0].style.width = "100%"

    const toggle = () => {                                          // функция при вызове скрывает или открывает изображение
        if (img.style.visibility === "hidden") {
            img.style.visibility = "visible"
        } else {
            img.style.visibility = "hidden"
        }
    }

    let flash = 0
    const flashing = (count) => {                                   // функция вызывается интервалом и определённое число раз вызывает toggle
        voise1.play()                                               // вызов звука1
        if (flash === count) {
            clearInterval(interval);                                // заканчивает интервал и стирает его
            flash = 0
            if (img.src.indexOf("whiteFace") > -1) {                // вызывает следующую картинку
                voise3.play()
                setChaki()
            } else {
                setWhiteFace()
            }
        }
        toggle()                                                    // сам вызов toggle-а
        ++flash
    }

    let interval;                                                   // в переменную записывается интервал, чтобы потом его стереть

    const setWhiteFace = () => {                                    // функция вызывает whiteFace.png и запускает мерцания через setInterval
        voise2.play()
        img.src = whiteFace
        interval = setInterval(() => flashing(16), 90)
    }

    const setChaki = () => {                                        // функция вызывает chaki.png и запускает мерцания через setInterval
        img.src = chaki
        interval = setInterval(() => flashing(4), 90)
    }

    setTimeout(setWhiteFace, 90)                                    // в звуке есть задержка, поэтому первую картинку я вызываю с аналогичной задержкой 
}

const start = () => {                                               // блок необходим, чтобы пользователь кликнул на экран, инче js не будет запускать звук
    const startDiv = document.createElement("div")
    startDiv.setAttribute("class", "startDiv")
    startDiv.textContent = "Нажмите на страницу, чтобы продолжить"
    document.body.append(startDiv)
    document.body.style.height = "100vh"
    document.body.addEventListener("click", createDOM)
}

document.addEventListener("DOMContentLoaded", start);