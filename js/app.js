// *first

let select = document.querySelector(`.select`)

let plsBtn = document.querySelector(`.plus_btn`)

let minusBtn = document.querySelector(`.minus_btn`)

let x = Number(select.value)

plsBtn.addEventListener("click", function(){
    x = x + 1
    select.value = x
    select.style = `background-color:white;`
})
minusBtn.addEventListener("click", function(){
    if (x > 1) {
        x = x - 1
        select.value = x
    }else{
        select.style = `background-color:red;`
    }
    console.log(x)
})



// *secend

let value = document.querySelector(`.value`)

let range = document.querySelector(`.range`)

range.addEventListener("input", function(){
    let x = range.value
    value.innerHTML = x
})

// *third

let colorChangeBtn = document.querySelector(`.colorChangeBtn`)

let colorChange = document.querySelector(`.color_change`)

colorChangeBtn.addEventListener("click", function(){
    let x = Math.floor(Math.random() * 256)

    let y = Math.floor(Math.random() * 256)

    let z = Math.floor(Math.random() * 256)
    
    colorChange.style = `background-color: rgb(${x}, ${y}, ${z});`
})