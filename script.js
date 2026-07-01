
const tab = document.querySelectorAll(`.tab`)
const listcategory = document.querySelectorAll(`.listCart`)
const listtab = document.querySelectorAll(`.listtab`)
const itemList = document.getElementById('itemList')
const souplist = document.getElementById(`soupList`)
const leftArrow = document.getElementById('leftarrow')
const rightArrow = document.getElementById('rightarrow')
const soupRight = document.getElementById('soupright')
const soupLeft = document.getElementById('soupleft')
const arrowFlow = document.querySelectorAll(`.arrow-service`)
const buttons = document.querySelectorAll(`.cta`)
const ctaBtn = document.querySelectorAll(`.whatSappBtn`)
console.log(ctaBtn)
const whatsappNumber = `+18329989237`


// RIGHT BUTTON
rightArrow.addEventListener(`click`, () => {
    itemList.scrollBy({
        left: 320,
        behavior: 'smooth'
    })
} )
leftArrow.addEventListener(`click`, () => {
    itemList.scrollBy({
        left: -320,
        behavior: 'smooth'
    })
})

soupRight.addEventListener(`click`, () => {
    souplist.scrollBy({
        left: 320,
        behavior: 'smooth'
    })
} )
soupLeft.addEventListener(`click`, () => {
    souplist.scrollBy({
        left: -320,
        behavior: 'smooth'
    })
} )

listcategory.forEach((list, index) => {
    list.addEventListener(`click`, () => {
        removeactive()
        removeactivetab()
        list.classList.add(`active`)
        listtab[index].classList.add(`showtab`)
    })
})

function removeactive() {
    listcategory.forEach((event) => {
        event.classList.remove(`active`)
    })
}
function removeactivetab() {
    listtab.forEach((event) => {
        event.classList.remove(`showtab`)
    })
}

buttons.forEach((buttonClicked) => {
    buttonClicked.addEventListener(`click`, () => {
        window.open(
            `https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d390046.0011888388!2d-95.62992310106132!3d29.658272787357763!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1s9220%20B%20Huston%20Texas%206%20HWY%2FBissonnet%20Huston%2C%20TX%2077083!5e0!3m2!1sen!2sng!4v1781960189240!5m2!1sen!2sng`,
            "_blank"
          );
    })
})

ctaBtn.forEach((button) => {
    button.addEventListener(`click`, () => {
        window.open(
            `https://wa.me/${whatsappNumber}`,
            "_blank"
          );
    })
})








