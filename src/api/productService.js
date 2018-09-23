const products = [
    {
        name: "Padthai",
        category: "Food",
        amount: 9,
        price: 35,
        pic:
          "https://d3cizcpymoenau.cloudfront.net/images/32489/SFS_pad_thai-44.jpg",
    },
    {
        name: "Men's shirt",
        category: "Fashion",
        amount: 10,
        price: 500,
        pic:
          "https://rukminim1.flixcart.com/image/832/832/shirt/s/h/y/46-bfrybluesht02-being-fab-original-imaekjr8ymhnxznp.jpeg?q=70"
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
    },

    updateProductAmount(name, amount, type) {
        return new Promise(function(resolve) {
            let product = products.find(prod => {
                return prod.name === name
            })

            if(product){
                if(type === 'DECREASE') {
                    product.amount -= amount
                }else if(type === 'INCREASE') {
                    product.amount += amount
                }
                
            }
            console.log(product)
        })
    }
}