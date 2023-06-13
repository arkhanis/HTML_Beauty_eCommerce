// Creo la estructura que tendrá el array de todos los PRODUCTOS de la tienda
class Products {
    constructor(id, name, category, img, price, stock) {
        this.id       = id.toUpperCase();
        this.name     = name.toUpperCase();
        this.category = category.toUpperCase();
        this.img      = "";
        this.price    = parseFloat(price);
        this.stock    = parseInt(stock);
    }
}

// Creo el array de todos los productos de la tienda
let products = [];
products.push(new Products("ID: 1", "Wax Cubes", "Hard Wax", "./img/prod1.webp",44.9, 59));
products.push(new Products("ID: 2", "Pre Depilatory Cleansing Lotion", "Skin Care", "./img/prod12.webp", 17.0, 32));
products.push(new Products("ID: 3", "Post Depilatory Body Lotion", "Skin Care", "./img/prod11.webp",15.0, 24));
products.push(new Products("ID: 4", "Medium Spatulas - Box of 500 pcs", "Professional Supplies", "./img/prod3.webp",11.9, 64));
products.push(new Products("ID: 5", "Post Depilatory Oil", "Skin Care", "./img/prod2.webp", 16.9, 21));
products.push(new Products("ID: 6", "Post Depilatory Gel", "Skin Care", "./img/prod10.webp", 16.9, 43));
products.push(new Products("ID: 7", "Large Spatulas - Box of 200 pcs", "Professional Supplies", "./img/prod8.webp", 24.9, 34));
products.push(new Products("ID: 8", "Facial Sticks - Box of 500 pcs","Professional Supplies", "./img/prod15.webp", 12.9, 27));
products.push(new Products("ID: 9", "Cotton Roll - 1.1 lbs.","Professional Supplies", "./img/prod13.webp", 8.0, 41));
products.push(new Products("ID: 10", "Cornstarch Powder 3.52 oz.", "Professional Supplies", "./img/prod9.webp", 3.9, 22));
products.push(new Products("ID: 11", "Gloves - Box of 100 pcs", "Professional Supplies", "./img/prod14.webp", 7.9, 35));
products.push(new Products("ID: 12", "Small Wax Warmer", "Professional Supplies", "./img/prod4.webp", 45.0, 14));
products.push(new Products("ID: 13", "Medium Wax Warmer", "Professional Supplies", "./img/prod5.webp", 319.9, 8));
products.push(new Products("ID: 14", "Large Wax Warmer", "Professional Supplies", "./img/prod5.webp", 16.9, 7));
products.push(new Products("ID: 15", "Bed Paper Roll 21 x 225 Smooth Paper - Box of 12 rolls","Professional Supplies", "./img/prod6.webp", 49.9, 19));
products.push(new Products("ID: 16", "Bed Paper Roll 27 x 225 High Quality Tissue Paper - Box of 12 rolls", "Professional Supplies", "./img/prod6.webp", 69.9, 17));
products.push(new Products("ID: 17", "Professional Starter Waxing Kit", "Professional Supplies", "./img/prod16.webp", 469.9, 9));
products.push(new Products("ID: 18", "Esthetician Apron", "Professional Supplies", "./img/prod7.webp", 16.9, 7));

