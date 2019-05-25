// the items catalog to display on the store
var items = [{
    title: "Keybord",
    description: "Really nice and loud keyboard",
    price: "34.89",
    catagory: "Keyboards",
    image: "images/k1.jpg"
},
{
    title: "Mouse",
    description: "Small travel mouse",
    price: "14.89",
    catagory: "Mouse",
    image: "images/travelMouse.jpg"
},
{
    title: "Travel Keyboard",
    description: "Small travel keyboard",
    price: "24.89",
    catagory: "Keyboards",
    image: "images/travelKeyboard.jpg"
},
{
    title: "Alienware",
    description: "Super duper laptop",
    price: "2984.89",
    catagory: "Laptop",
    image: "images/alienware.jpg"
},
{
    title: "Dell XPS",
    description: "A not so expensive laptop",
    price: "1232.41",
    catagory: "Laptop",
    image: "images/dell.jpg"
},
];

function displayCatalog() {
    // travel the array, and display each item on the page

    for (var i = 0; i < items.length; i++) {
        var item = items[i];
        displayProduct(item);
    }
}

function displayProduct(item) {
    var divContainer = $("#catalog");
    var syntax =
        `<div class='item'>  
            <img src="${ item.image}">
            <h5>${ item.title}</h5>
            <label>${ item.description}</label>
            <br>
            <h6>$ ${ item.price}</h6>
            <button class="btn btn-sm btn-info"> Add to Cart</button>
        </div>`;

    divContainer.append(syntax);
}

function search() {
    var text = $("#txtSearch").val();
    console.log("Searching for: " + text);

    // clear previous results
    $("#catalog").html("");

    // check on each product
    // if the title or the description
    // contains the search text 
    for (var i = 0; i < items.length; i++) {
        var item = items[i];

        if (item.title.indexOf(text) >= 0) {
            // text its on the title
            displayProduct(item);
        }
    }
}

function init() {

    // click event to search button
    $("#btnSearch").click(search);


    displayCatalog();
}




window.onload = init;