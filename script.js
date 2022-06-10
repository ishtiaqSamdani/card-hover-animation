let comp = document.querySelector(".card_container");

const propSetFunc = (e, comp) => {
    let x = e.offsetX;
    let y = e.offsetY;

    if (x < 145 && y > 200) {
        x = x;
        y = y;
    }
    else if (x > 145 && y > 200) {
        x = x;
        y *= -1
    }
    else if (x > 145 && y < 200) {
        x *= -1
        y *= -1
    }
    else if (x < 145 && y < 200) {
        x = x;
        y = y;
    }

    comp.style.setProperty('--x', x)
    comp.style.setProperty('--y', y)
}

comp.addEventListener("mousemove", (e) => {
    propSetFunc(e, comp);
})