const articles = document.querySelector(".posts-list")
const rem = parseInt(getComputedStyle(document.body).fontSize)

function setOrder() {
    let firstColumnHeight = 0
    let secondColumnHeight = 0
    let order = 0
    let secondColumn = new Array();
    articles.querySelectorAll(".card").forEach(element => {
        if (firstColumnHeight <= secondColumnHeight) {
            element.style.order = order
            firstColumnHeight += element.getBoundingClientRect().height + rem
            order++
        } else {
            secondColumn.push(element)
            secondColumnHeight += element.getBoundingClientRect().height + rem
        }
    })
    secondColumn.forEach((element, index) => {
        element.style.order = order + index
    })
    articles.style.height = (firstColumnHeight > secondColumnHeight ? firstColumnHeight : secondColumnHeight) + "px"
}

setOrder()
