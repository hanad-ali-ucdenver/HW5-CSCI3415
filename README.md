# TinyMart Product Catalog System

A JavaScript implementation of a product catalog and shopping cart system supporting multiple product types through inheritance.

## Overview

The TinyMart Product Catalog System is an object-oriented JavaScript application that models a company's product catalog with inheritance hierarchies. It includes:

- Abstract `Product` class with common product attributes and behaviors
- Derived product classes: `AudioProduct`, `VideoProduct`, and `BookProduct`
- Specialized book types: `EBook` and `PaperBook`
- Shopping cart functionality with `Cart` class

## Requirements

- Node.js (v12.0.0 or later)
- Text editor or IDE of your choice (VSCode recommended)

## Build and Run Instructions

### Option 1: Running with Node.js

1. Clone or download this repository to your local machine
2. Navigate to the project directory in your terminal
3. Run the application:

```bash
node tinymart.js
```

### Option 2: Running in a browser

1. Clone or download this repository to your local machine
2. Create a simple HTML file (index.html) with the following content:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>TinyMart Product Catalog</title>
</head>
<body>
    <h1>TinyMart Product Catalog</h1>
    <p>Open the browser console (F12) to see the output.</p>
    
    <script src="tinymart.js"></script>
</body>
</html>
```

3. Open the HTML file in a modern web browser
4. Check the browser console (F12) to see the output

## Project Structure

```
tinymart/
│
├── tinymart.js         # Main application file with all classes and implementation
├── index.html          # Optional HTML file for browser-based execution
└── README.md           # This file
```

## Usage Example

The main function in `tinymart.js` demonstrates how to:
- Create instances of different product types
- Add products to a shopping cart
- Remove products from a cart
- Display cart contents and summary

You can modify the `main()` function in `tinymart.js` to create different products or test different cart operations.

## Class Hierarchy

```
Product (Abstract)
├── AudioProduct
├── VideoProduct
└── BookProduct (Abstract)
    ├── EBook
    └── PaperBook
```

Additional supporting classes:
- `NameType`: For storing first and last names
- `Cart`: For managing collections of products
- Enums: `GenreType` and `FilmRateType`

## Customization

- To add new product types, create a new class that extends the appropriate base class
- To modify product attributes, update the corresponding class properties and methods
- To change cart behavior, modify the `Cart` class implementation

## Testing

The system includes a built-in test suite in the `main()` function. It tests:
- Creating different types of products
- Adding products to a cart
- Testing cart capacity limits
- Removing items from a cart
- Displaying cart contents

Run the application as described above to execute these tests.

## License

This project is available for educational purposes.
