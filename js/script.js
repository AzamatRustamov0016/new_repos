const elForm = selectElem(".form")
const elList = selectElem(".films__card-wrapper")
const elTemplate = selectElem("#template").content
const elFilmsSelect = selectElem(".films__select", elForm)
const elFilmSearch = selectElem(".films__input-serach", elForm)
    
elForm.addEventListener("submit", (e) => {
    e.preventDefault()
    let regex = new RegExp(elFilmSearch.value.trim(), "gi")
    let filteredArr = films.filter(film => film.title.match(regex))
    elFilmSearch.value = null
    renderArr(filteredArr, elList)
})

function renderGenres(arr, list) {
    let uniqueGenres = []

    arr.forEach(item => {
        item.genres.forEach(genres => {
            if (!uniqueGenres.includes(genres)) {
                uniqueGenres.push(genres)
            }
        })
    })

    uniqueGenres.forEach(item => {
        let newOption = createElem("option")
        newOption.textContent = item

        list.appendChild(newOption)
    })

    
}
renderGenres(films, elFilmsSelect)
function renderArr(arr, list) {
    list.innerHTML = null
    arr?.forEach(item => {
        let cloneTemplate = elTemplate.cloneNode(true)
        selectElem(".films__img", cloneTemplate).src = item.poster
        selectElem(".films__card-title", cloneTemplate).textContent = item.title
        selectElem(".films__release-date", cloneTemplate).textContent = normaliazeDate(item.release_date)
        list.appendChild(cloneTemplate)
    })
}

renderArr(films, elList)                                  
    

