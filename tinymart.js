// Define the NameType "struct"
// This class serves as a data structure for storing first and last names
class NameType {
  constructor(firstName = "", lastName = "") {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  // Method to combine first and last name with proper formatting
  getFullName() {
    return `${this.firstName} ${this.lastName}`.trim();
  }
}

// Define enum types
// JavaScript doesn't have built-in enums, so we use objects with fixed values
// GenreType contains the possible music genres
const GenreType = {
  Blues: "Blues",
  Classical: "Classical",
  Country: "Country",
  Folk: "Folk",
  Jazz: "Jazz",
  Metal: "Metal",
  Pop: "Pop",
  RnB: "RnB",
  Rock: "Rock"
};

// FilmRateType contains the possible movie ratings
const FilmRateType = {
  NotRated: "Not Rated",
  G: "G",
  PG: "PG",
  PG_13: "PG-13",
  R: "R",
  NC_17: "NC-17"
};

// Base Product class (Abstract)
// This serves as the parent class for all product types
class Product {
  // Static property to track the next available ID
  static nextID = 1;

  constructor(productName = "", price = 0.0) {
    this.productID = Product.createNewID();
    this.setProductName(productName);
    this.setPrice(price);
    this.reviewRate = 0.0;
  }

  // Static method for ID generation
  // Increments the ID counter to ensure unique IDs
  static createNewID() {
    return Product.nextID++;
  }

  // Getters
  // These methods provide access to private properties
  getProductID() {
    return this.productID;
  }

  getProductName() {
    return this.productName;
  }

  getPrice() {
    return this.price;
  }

  getReviewRate() {
    return this.reviewRate;
  }

  // Setters
  // These methods provide controlled ways to modify properties
  setProductID(id) {
    this.productID = id;
  }

  // Sets product name with validation - if empty, uses a default value
  setProductName(name) {
    this.productName = name && name.trim() !== "" ? name : "!No Name Product!";
  }

  // Sets price with range validation (0.01-999.99)
  // If out of range, adjusts to nearest valid value and warns
  setPrice(price) {
    if (price > 0.0 && price < 1000.00) {
      this.price = price;
    } else {
      this.price = price <= 0.0 ? 0.01 : 999.99;
      console.warn(`Price adjusted to ${this.price} (must be between 0.01 and 999.99)`);
    }
  }

  setReviewRate(rate) {
    this.reviewRate = rate;
  }

  // Abstract methods
  // These methods must be implemented by child classes
  // In JavaScript, we simulate abstract methods by throwing errors
  getProdTypeStr() {
    throw new Error("Method 'getProdTypeStr()' must be implemented");
  }

  displayContentsInfo() {
    throw new Error("Method 'displayContentsInfo()' must be implemented");
  }

  // Displays the common product information and calls the subclass-specific method
  displayProdInfo() {
    console.log(`\n[${this.getProdTypeStr()}] Product ID: ${this.productID} Product Name: ${this.productName}`);
    console.log(`Price: $${this.price} Product Review Rate: ${this.reviewRate}`);
    this.displayContentsInfo();
  }
}

// AudioProduct class
// Extends the base Product class for music products
class AudioProduct extends Product {
  constructor(productName = "", price = 0.0, singer = new NameType()) {
    super(productName, price);
    this.singer = singer;
    this.genre = GenreType.Pop; // Default genre
  }

  // Getters
  getSinger() {
    return this.singer;
  }

  getGenre() {
    return this.genre;
  }

  // Setters
  setSinger(singer) {
    this.singer = singer;
  }

  setGenre(genre) {
    this.genre = genre;
  }

  // Implementation of abstract methods from Product class
  // Returns the product type string for display
  getProdTypeStr() {
    return "Music";
  }

  // Displays the music-specific information
  displayContentsInfo() {
    console.log(`Singer Name: ${this.singer.getFullName()}`);
    console.log(`Genre: ${this.genre}`);
  }
}

// VideoProduct class
// Extends the base Product class for movie products
class VideoProduct extends Product {
  constructor(productName = "", price = 0.0, director = new NameType(), releaseYear = 0, runTime = 0) {
    super(productName, price);
    this.director = director;
    this.filmRate = FilmRateType.NotRated; // Default film rating
    this.releaseYear = releaseYear;
    this.runTime = runTime;
  }

  // Getters
  getDirector() {
    return this.director;
  }

  getFilmRate() {
    return this.filmRate;
  }

  getReleaseYear() {
    return this.releaseYear;
  }

  getRunTime() {
    return this.runTime;
  }

  // Setters
  setDirector(director) {
    this.director = director;
  }

  setFilmRate(rate) {
    this.filmRate = rate;
  }

  setReleaseYear(year) {
    this.releaseYear = year;
  }

  setRunTime(time) {
    this.runTime = time;
  }

  // Additional methods specific to videos
  // Checks if the movie is a new release based on provided year
  isNewRelease(theYear) {
    return this.releaseYear >= theYear;
  }

  // Implementation of abstract methods from Product class
  getProdTypeStr() {
    return "Movie";
  }

  // Displays the movie-specific information
  displayContentsInfo() {
    console.log(`Release Year: ${this.releaseYear}`);
    console.log(`Film Rating: ${this.filmRate}`);
    console.log(`Runtime: ${this.runTime}`);
    console.log(`Director Name: ${this.director.getFullName()}`);
  }
}

// BookProduct abstract class
// Extends Product but is also abstract itself
// Serves as a base class for different book types
class BookProduct extends Product {
  constructor(productName = "", price = 0.0, author = new NameType(), pages = 0) {
    super(productName, price);
    this.author = author;
    this.pages = pages;
  }

  // Getters
  getAuthor() {
    return this.author;
  }

  getPages() {
    return this.pages;
  }

  // Setters
  setAuthor(author) {
    this.author = author;
  }

  setPages(pages) {
    this.pages = pages;
  }

  // Abstract method - must be implemented by subclasses
  // BookProduct is also abstract, so we keep this as an abstract method
  getProdTypeStr() {
    throw new Error("Method 'getProdTypeStr()' must be implemented by subclass");
  }

  // Displays the common book information
  // This implementation is shared by all book types
  displayContentsInfo() {
    console.log(`Author : ${this.author.getFullName()}`);
    console.log(`Pages: ${this.pages}`);
  }
}

// EBook class
// Concrete implementation of BookProduct for electronic books
class EBook extends BookProduct {
  constructor(productName = "", price = 0.0, author = new NameType(), pages = 0) {
    super(productName, price, author, pages);
  }

  // Implementation of the abstract method from BookProduct
  getProdTypeStr() {
    return "E-Book";
  }
}

// PaperBook class
// Concrete implementation of BookProduct for physical books
class PaperBook extends BookProduct {
  constructor(productName = "", price = 0.0, author = new NameType(), pages = 0) {
    super(productName, price, author, pages);
  }

  // Implementation of the abstract method from BookProduct
  getProdTypeStr() {
    return "Paper Book";
  }
}

// Cart class
// Manages a collection of products that a user wants to purchase
class Cart {
  constructor(owner = new NameType()) {
    this.MAX_ITEMS = 7;          // Maximum number of items allowed in cart
    this.itemNum = 0;            // Current number of items in cart
    this.owner = owner;          // Owner of the cart
    this.purchasedItems = [];    // Array to store the products
  }

  // Getters
  getItemNum() {
    return this.itemNum;
  }

  getOwner() {
    return this.owner;
  }

  getPurchasedItems() {
    return this.purchasedItems;
  }

  // Setters
  setOwner(owner) {
    this.owner = owner;
  }

  // Helper method to check if cart is full
  // Returns true if the cart has reached maximum capacity
  isCartFull() {
    return this.itemNum >= this.MAX_ITEMS;
  }

  // Add item to cart
  // Returns true if successful, false if cart is full
  addItem(product) {
    if (this.isCartFull()) {
      console.log("Cart is full. Cannot add more items.");
      return false;
    }
    
    this.purchasedItems.push(product);
    this.itemNum++;
    return true;
  }

  // Remove item from cart by product ID
  // Returns true if successful, false if item not found or cart empty
  removeItem(productID) {
    if (this.itemNum === 0) {
      console.log("Cart is empty. No items to remove.");
      return false;
    }

    // Find the index of the product with the matching ID
    const index = this.purchasedItems.findIndex(item => item.getProductID() === productID);
    
    if (index === -1) {
      console.log(`Product with ID ${productID} not found in cart.`);
      return false;
    }

    // Remove the item and update count
    this.purchasedItems.splice(index, 1);
    this.itemNum--;
    return true;
  }

  // Display cart contents
  // Shows all items, calculates total and average costs
  displayCart() {
    console.log("\nMy Cart");
    console.log("======");
    console.log(`Cart Owner: ${this.owner.getFullName()}`);
    
    let totalAmount = 0;
    
    // Display each item and accumulate the total cost
    for (const item of this.purchasedItems) {
      item.displayProdInfo();
      totalAmount += item.getPrice();
    }
    
    // Display summary information
    console.log("\n===== Summary of Purchase ======");
    console.log(`Total number of purchases: ${this.itemNum}`);
    console.log(`Total purchasing amount: $${totalAmount.toFixed(2)}`);
    
    // Calculate and display average cost, avoiding division by zero
    const averageCost = this.itemNum > 0 ? totalAmount / this.itemNum : 0;
    console.log(`Average cost: $${averageCost.toFixed(2)}`);
  }
}

// Test driver (main function)
// Creates sample products and demonstrates cart functionality
function main() {
  // Create AudioProduct objects
  const beatles = new NameType("Beatles", "");
  const music1 = new AudioProduct("Yesterday", 16.50, beatles);
  music1.setGenre(GenreType.Pop);
  music1.setReviewRate(9.8);

  const madonna = new NameType("Madonna", "");
  const music2 = new AudioProduct("Like a Prayer", 14.99, madonna);
  music2.setGenre(GenreType.Pop);
  music2.setReviewRate(8.9);

  const mjackson = new NameType("Michael", "Jackson");
  const music3 = new AudioProduct("We are the World", 13.75, mjackson);
  music3.setGenre(GenreType.Country);
  music3.setReviewRate(9.1);

  // Create VideoProduct objects
  const rwise = new NameType("Robert", "Wise");
  const video1 = new VideoProduct("Sound of Music", 22, rwise, 1965, 175);
  video1.setFilmRate(FilmRateType.G);
  video1.setReviewRate(9.2);

  const glucas = new NameType("George", "Lucas");
  const video2 = new VideoProduct("Star Wars", 22, glucas, 1977, 120);
  video2.setFilmRate(FilmRateType.PG);
  video2.setReviewRate(8.5);

  // Create EBook object
  const hemingway = new NameType("Ernest", "Hemmingway");
  const ebook1 = new EBook("The old Man and the Sea", 8.3, hemingway, 127);
  ebook1.setReviewRate(9.5);

  // Create PaperBook object
  const tolkien = new NameType("J.R.R.", "Tolkien");
  const pbook1 = new PaperBook("The Hobbit", 12.99, tolkien, 320);
  pbook1.setReviewRate(9.7);

  // Create an extra product
  const rowling = new NameType("J.K.", "Rowling");
  const pbook2 = new PaperBook("Harry Potter", 24.99, rowling, 450);
  pbook2.setReviewRate(9.8);

  // Create a cart
  const johnSmith = new NameType("John", "Smith");
  const myCart = new Cart(johnSmith);

  // Add items to cart
  myCart.addItem(music1);
  myCart.addItem(video1);
  myCart.addItem(music3);
  myCart.addItem(pbook2);
  myCart.addItem(ebook1);
  myCart.addItem(video2);
  myCart.addItem(music2);
  
  // Try adding one more item - this will fail because cart is full (MAX_ITEMS is 7)
  // Print message indicating whether the add was successful
  const success = myCart.addItem(pbook1);
  console.log(`Adding 8th item successful? ${success}`);

  // Remove items from cart
  myCart.removeItem(pbook2.getProductID());
  myCart.removeItem(music2.getProductID());

  // Display the cart contents and summary
  myCart.displayCart();
}

// Run the main function
main();
