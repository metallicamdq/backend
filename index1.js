class ProductManager {
    constructor() {
        this.products = [];
        this.id = 0;
    }

    getProducts() {
        return this.products;
    }

    getProductById(id) {
        let producto = this.products.find((product) => product.id == id);
        if(producto) return producto; else return 'Producto no encontrado';
    }

    addProduct( {title, description, price, thumbnail, code, stock} ) {
        if( title && description && price && thumbnail && code && stock ) {
            const product = {
                id: this.id,
                title: title,
                description: description,
                price: price,
                thumbnail: thumbnail,
                code: code,
                stock: stock,
            }

            const productExist = this.products.find((p) => p.code == product.code);

            if(!productExist) {
                this.id++;
                this.products.push(product);
                return 'Producto añadido de forma exitosa';
            } else {
                return `Ya existe un producto con el código ${productExist.code}`;
            }
        } else {
            return 'Todos los campos son requeridos';
        }
    }
}


const productManager = new ProductManager();


let newProduct = {
    title: 'Producto 3',
    description: 'Descripcion del producto 3',
    price: 40,
    thumbnail: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.elgrafico.com.ar%2Fcategoria%2F1116%2Fseleccion-argentina&psig=AOvVaw08r2aFv2B0EOXWPkTjri6F&ust=1671575535318000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCJjloKLehvwCFQAAAAAdAAAAABAJ',
    code: 'BGFF45h',
    stock: 6,
};
let newProduct2 = {
    title: 'Producto 3',
    description: 'Descripcion del producto 3',
    price: 40,
    thumbnail: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.elgrafico.com.ar%2Fcategoria%2F1116%2Fseleccion-argentina&psig=AOvVaw08r2aFv2B0EOXWPkTjri6F&ust=1671575535318000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCJjloKLehvwCFQAAAAAdAAAAABAJ',
    code: 'BGFF452',
    stock: 6,
};
let newProduct3 = {
    title: 'Producto 3',
    description: 'Descripcion del producto 3',
    price: 40,
    thumbnail: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.elgrafico.com.ar%2Fcategoria%2F1116%2Fseleccion-argentina&psig=AOvVaw08r2aFv2B0EOXWPkTjri6F&ust=1671575535318000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCJjloKLehvwCFQAAAAAdAAAAABAJ',
    code: 'BGFF453',
    stock: 6,
};

console.log('Get productos Inicio: ',productManager.getProducts());
console.log(productManager.addProduct(newProduct));
console.log(productManager.addProduct(newProduct2));
console.log(productManager.addProduct(newProduct));
console.log(productManager.addProduct(newProduct3));
console.log('Get productos Fin: ',productManager.getProducts());
console.log('Get producto by id: ',productManager.getProductById(2));