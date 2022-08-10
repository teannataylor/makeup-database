// asynchronous event; DOMContentLoaded (1)

const baseURL = "https://makeup-api.herokuapp.com/api/v1/products.json"

document.addEventListener('DOMContentLoaded', () =>{
    //to do when the DOM has loaded, 1st event listener
    getMakeup()

    document.getElementById("products").addEventListener('change', displayProduct)

})

//GET shows from API via function
function getMakeup(){
    const ul = document.getElementById('makeup-list')
    //only need one parameter for Fetch, bc its a GET request; config object is only needed if it's not a GET request
    //fetch allows for the rest of the page to be loaded/execution to continue; allows for asynchronous execution
    // first fetch line, send a GET request, returns a promise object 
    // a promise object has 3 status; fufill, rejected or pending promise. pending turns into resolve or reject/failed
    fetch('https://makeup-api.herokuapp.com/api/v1/products.json')
    .then(res => res.json())
    .then(data => {
        data.forEach(products => {
            ul.innerHTML += `
            <li><a href="#" data-id="${products.id}">${products.name}</a></li>

            `
        })

        attachClicksToLinks()
    })
    
}

const attachClicksToLinks = () => {
    const product = document.querySelectorAll('a')

    product.forEach((products) => {
        products.addEventListener('click', displayProduct)
    })
}



//no default acion on click; only on submit form
//this should display the products that appear in the array
const displayProduct = (event) => {
    //don't use console.log debugger
    console.log(event.target.dataset.id)
    const info =document.getElementById('info')
    const ul = document.getElementById('makeup-list')
    ul.innerHTML = " "
     fetch( `https://makeup-api.herokuapp.com/api/v1/products.json/?product_type=${event.target.value}`)
    .then(res => res.json())
    //iterate
    .then(data => {
        data.forEach(data => {
           info.innerHTML += 
           
          ` <li><a href="#"  data-id=>${data.name}</a></li>`

                

        
        })


    })
}


const attachClicks = () =>{


    displayProduct.forEach((displayProduct) => {
        
        displayProduct.addEventListener('click', displayInfo)
    }
    )

}

const displayInfo = (event) => {
    debugger
    console.log(event.target.dataset.id)
    const info = document.getElementById('info')
    const ul = document.getElementById('makeup-list')
    ul.innerHTML = ' '
    fetch( `https://makeup-api.herokuapp.com/api/v1/products.json/?product_type=${event.target.value}`)
    .then(res => res.json())
    .then(data => {
        console.log(data)
        info.innerHTML = 
        
        `
        <h1>${data.name}</h1><br/>
        <h3> Summary:</h3>
        <p>${data.summary}</p>
        <h3> Tags:</h3>
        <p>${data.tag_list.join(", ")}</p>
        

        `


    })


}

//questions: why won't it open up the summary information?
//how do you change it to where it will allow for you to change options without refreshing the page