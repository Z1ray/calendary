const dayWeek = document.querySelector('.thead')
const btnNext = document.querySelector('.btn-next')
const btnBack = document.querySelector('.btn-back')
const btnAdd = document.querySelector('.btn-add')
const centralYear = document.querySelector('.year')
const centralMonth = document.querySelector('.month')
const tbody = document.querySelector('.tbody')
const arrowLeft = document.querySelector('.arrow-left')
const arrowRight = document.querySelector('.arrow-right')
const inputData = document.querySelector('.input-data')
const affer = document.querySelector('.affer')
const today = new Date()

let year = today.getFullYear()
let month = today.getMonth()

const linkDay = {'1': 'Пн', '2': 'Вт', '3': 'Ср', '4': 'Чт', '5': 'Пт', '6': 'Сб', '7': 'Вс', }
const linkMonth = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь']

centralYear.textContent = year
centralMonth.textContent = linkMonth[month]

function daysCount(y, m) {
    let day1 = new Date(y, m)
    let day2 = new Date(y, m+1)
    let newD = Math.round((day2 - day1) / 1000 / 3600 / 24)
    return newD
}

function week () {
    Object.keys(linkDay).forEach(key => {
        dayWeek.innerHTML += `<td data-day="${key}">${linkDay[key]}</td>`
    })
}

week()

function deleteBlue(){
    let dateDel = document.querySelectorAll(".date");
    for(let date of dateDel){
        date.classList.remove('add')
    }
}

function daysInMonth(count, firstDay) {
    let f = 0
    let j = 0

    function addTd(d, count, f, j) {
        let c = d + 7
        const tr = document.querySelectorAll('.tr')
        if (f == 0){
            let g = 1
            for (g; g < firstDay; g++){
                tr[f].innerHTML += `<td></td>`
            }
            let l = c - (g - 1)
            for (let i = d; i <= count && i < l; i++){
                tr[f].innerHTML += `<td class="date">${i}</td>`
            }
            return l
        }

        if (j - c !== -7) {
            c = j + 7
            for (let i = j; i <= count && i < c; i++){
                tr[f].innerHTML += `<td class="date">${i}</td>`
            }
            return c
        }

        for (let i = j; i <= count && i < c; i++){
            tr[f].innerHTML += `<td class="date">${i}</td>`
        }
        return d + 7
    }

    async function addCheck() {
      await addTd();
      let dateAdd = document.querySelectorAll(".date");
      for (let add of dateAdd) {
        add.addEventListener("click", () => {
          add.classList.toggle("add");
        });
      }
    }

    addCheck();

    for (let d = 1; d <= 40; d += 7){
        tbody.innerHTML += `<tr class="tr"></tr>`;
        let a = addTd(d, count, f, j)
        j = a
        f += 1;
    }

    async function addBd(){
        await addTd()
        let dateAdd = document.querySelectorAll(".date");
        btnAdd.addEventListener('click', () => {
            for(let date of dateAdd){
                if(date.classList.contains('add')){
                    const dateObject = new Object()
                    dateObject['da'] = date.textContent
                    dateObject['text'] = inputData.value
                    dateObject['mo'] = month+1
                    dateObject['ye'] = year
                    const dateText = JSON.stringify(dateObject)
                    fetch('add.php', {
                        method: 'POST',
                        headers: {'Content-type': 'application/json'},
                        body: dateText
                    })
                }
            }
        })
    }
    
    addBd()
}

function affairs(month2, year2){
    month2 += 1
    fetch('linkAffairs.php')
        .then(res => res.json())
        .then(res => {
            for(let result of res){
                if (result.mon == month2 && result.yeas == year2){
                    affer.innerHTML +=`
                        <div class="affer-tr">
                            <div class="affer-date">${result.daa}-${result.mon}-${result.yeas}</div>
                            <div class="affer-text">${result.text}</div>
                            <div class="affer-delete" id="${result.id}"><img src="images/delete.png" class="img-del"></div>
                        </div>
                    `
                }
            }
        })
        // .then(res => {
        //     const affDelete = document.querySelectorAll('.affer-delete')
        //     for (let del of affDelete){
        //         del.addEventListener('click', () => {
        //             res
        //             fetch('delete.php', {
                        
        //             })
        //         })
        //     }
        // })
}

let firstDay = new Date(year, month).getDay()
daysInMonth(daysCount(year, month), firstDay)
affairs(month, year)

function dateСhange(){
    affer.innerHTML = ''
    tbody.innerHTML = ''
    let firstDay = new Date(year, month).getDay()
    if (firstDay == 0){
        firstDay = 7
    }
    let c = daysCount(year, month)
    daysInMonth(c, firstDay)
}

arrowLeft.addEventListener('click', () => {
    deleteBlue()
    tbody.innerHTML = ''
    year -= 1
    dateСhange()
    centralYear.textContent = year
    affairs(month, year)
})

arrowRight.addEventListener('click', () => {
    deleteBlue()
    tbody.innerHTML = ''
    year += 1
    dateСhange()
    centralYear.textContent = year
    affairs(month, year)
})

btnNext.addEventListener('click', () => {
    deleteBlue()
    tbody.innerHTML = ''
    if (!(month == 11)){
        month += 1
        dateСhange()
        centralMonth.textContent = linkMonth[month]
        affairs(month, year)
    } else {
        month = 0
        year += 1
        dateСhange()
        centralMonth.textContent = linkMonth[month]
        centralYear.textContent = year
        affairs(month, year)
    }
})

btnBack.addEventListener('click', () => {
    deleteBlue()
    tbody.innerHTML = ''
    if (!(month == 0)){
        month -= 1
        dateСhange()
        centralMonth.textContent = linkMonth[month]
        affairs(month, year)
    } else {
        month = 11
        year -= 1
        dateСhange()
        centralMonth.textContent = linkMonth[month]
        centralYear.textContent = year
        affairs(month, year)
    }
})