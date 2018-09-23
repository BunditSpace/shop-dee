const products = [
    {
        name: 'Cat',
        category: 'Food',
        amount: 10,
        price: 50,
        pic: 'https://cdn.vuetifyjs.com/images/cards/foster.jpg'
    }
]
export default {
    getAll() {
        return new Promise(function(resolve, reject) {
            setTimeout(() => {
                resolve(products)
            }, 1000);
        })
    },

    addProduct(product) {
        return new Promise(function(resolve, reject) {
            setTimeout(() => {
                var found =products.find((p) => {
                    return p.name == product.name;
                })
                if(found){
                    resolve(false)
                }else {
                    products.push({...product})
                    resolve(true)
                }
               
            }, 1000);
        })
    },

    deleteProduct(item) {
        return new Promise(function (resolve, reject) {
            setTimeout(() => {
                var found = products.find(function (product) {
                    return product.name == item.name;
                });
                if (found) {
                    products.splice(found,1)
                    resolve(true)
                }else {
                    resolve(false)
                }
            }, 1000);
        }) 
    }
}