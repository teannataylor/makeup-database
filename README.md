# Makeup Database 


# Introduction 
This is a Single Page Application that integrates Javascript and an external API: https://makeup-api.herokuapp.com/api/v1/products.json5

The 3 event listeners in this project are DOMContentLoaded, change and a click event. This also contains three fetch requests that integrate the forEach() method to iterate through arrays to manipulate the API data to produce specific results.


## Repo URL

Github Repo URL: https://github.com/ttaylor95/makeup-database



## Deliverables 

- This project is a blend of HTML/CSS/JS frontend that accesses data from a public API.

- It runs on a single page and all interactions between the client and API are handled asynchronously while using JSON as the communication format.

- This application works in a simple way:

1. It uses a fetch request to GET a list of Makeup to display.

2. Using the drop-down, you can filter by a specific product type. This functionality has a change event listener. 

3. After the drop-down is utilized, product displayed should be whicever was chosen under product type. 

4. Once the new list is rendered, you can click on one of the items, it will send another fetch request to GET the information related to the item in terms of name and product description. 
