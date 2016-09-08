function pokemonGear(name, size, color, stock, image){
	this.name = name
	this.size = size
	this.color = color
	this.stock = stock
	this.image = image
}

var clothesArray = []


var instinct = new pokemonGear('Instinct Shirt', "medium", "black", 225, "img/instinctShirt.jpg")
var fullSet = new pokemonGear('Instinct Hoody', "large", "green/white/red", 85, "img/instinctHood.png")
var mystic = new pokemonGear('Mystic Shirt', "large", "black", 125, "img/mysticShirt.jpg")
var valor = new pokemonGear('Valor Shirt', "medium", "black", 225, "img/valorShirt.jpg")
var watch = new pokemonGear('Mystic Hoody', "medium", "only one color", 55, "img/mysticHood.jpg")
var ashCap = new pokemonGear("Valor Hoody", "small", "only one color", 79, "img/valorHood.jpg")

clothesArray.push(instinct)
clothesArray.push(fullSet)
clothesArray.push(mystic)
clothesArray.push(valor)
clothesArray.push(watch)
clothesArray.push(ashCap)


for(i = 0; i < clothesArray.length; i++) {
	var tName = document.createTextNode(clothesArray[i].name)
	var tSize = document.createTextNode("Available size: " + clothesArray[i].size)
	var tColor = document.createTextNode("Color: " + clothesArray[i].color)
	var tStock = document.createTextNode("In stock: " + clothesArray[i].stock)
	var tButton = document.createTextNode("Buy Now!")
	var tImage = clothesArray[i].image

	var newCol= document.createElement("div")
	var newDiv = document.createElement("div")
	var nameH1 = document.createElement("h1")
	var sizeH4 = document.createElement("h4")
	var colorH4 = document.createElement("h4")
	var stockH4 = document.createElement("h4")
	var buyNow = document.createElement("button")
	var image = document.createElement("img")

	nameH1.appendChild(tName)
	sizeH4.appendChild(tSize)
	colorH4.appendChild(tColor)
	stockH4.appendChild(tStock)
	buyNow.appendChild(tButton)
	buyNow.className = "btn btn-primary btn-lg"
	image.src = tImage
	image.className = "img-responsive"

	newCol.className = "col-sm-4"
	newDiv.className = "tshirt shirtName" + i + " thumbnail"
	newDiv.appendChild(nameH1)
	newDiv.appendChild(image)
	newDiv.appendChild(sizeH4)
	newDiv.appendChild(colorH4)
	newDiv.appendChild(stockH4)
	newDiv.appendChild(buyNow)
	newCol.appendChild(newDiv)

	document.getElementById("shirts").appendChild(newCol)
}
