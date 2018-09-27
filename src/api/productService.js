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
    },
    {
        name: "Spaghetti",
        category: "Food",
        amount: 24,
        price: 80,
        pic:
          "https://img.taste.com.au/O1ofwjUO/w1200-h630-cfill/taste/2016/11/spaghetti-with-meatballs-and-spicy-tomato-sauce-102298-1.jpeg",
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

    deleteProduct(index) {
        return new Promise(function (resolve, reject) {
            setTimeout(() => {
                var deleted = products.splice(index,1)
                if (deleted) {
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