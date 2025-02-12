// footer info

const date = new Date();
let year = date.getFullYear();
const formattedDate = date.toLocaleString('en-US', {timeZoneName: 'short'});
document.getElementById('year').innerHTML = year
document.getElementById('lastModified').innerHTML = formattedDate

// array for product dropdown
const products = [
    {
      id: "fc-1888",
      name: "flux capacitor",
      averagerating: 4.5
    },
    {
      id: "fc-2050",
      name: "power laces",
      averagerating: 4.7
    },
    {
      id: "fs-1987",
      name: "time circuits",
      averagerating: 3.5
    },
    {
      id: "ac-2000",
      name: "low voltage reactor",
      averagerating: 3.9
    },
    {
      id: "jj-1969",
      name: "warp equalizer",
      averagerating: 5.0
    }
];

// function for creating product dropdown list
function productList(products) {
    const list = document.getElementById("product");
    
    products.forEach(product => {
        const name = document.createElement("option");
        name.textContent = product.name;
        name.value = name;
        
        list.appendChild(name);
    })
}

productList(products);