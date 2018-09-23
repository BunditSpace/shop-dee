

const carts = [
    {
        category: "Food",
        items: [
          {
            name: "Padthai",
            category: "Food",
            amount: 1,
            price: 35,
            pic:
              "https://d3cizcpymoenau.cloudfront.net/images/32489/SFS_pad_thai-44.jpg",
          }
        ]
      },
      {
        category: "Fashion",
        items: [
          {
            name: "Men's shirt",
            category: "Fashion",
            amount: 10,
            price: 500,
            pic:
              "https://rukminim1.flixcart.com/image/832/832/shirt/s/h/y/46-bfrybluesht02-being-fab-original-imaekjr8ymhnxznp.jpeg?q=70"
          }
        ]
      }
];
// cart = {category,  [{name, amount, price}]}
export default {
    getAll() {
        return new Promise(function(resolve) {
            resolve(carts)
        })
    },

    addCart(product) {
        return new Promise(function(resolve) {
            setTimeout(() => {
                carts.push(product)
            }, 1000);
        })
    },

    removeItemCart(item) {
        return new Promise(function(resolve) {
            let cart = carts.find(c => {
                return c.category === item.category;
            })
            
            if(cart) {
                let existingItem = cart.items.find(i => {
                    return i.name === item.name
                })

                if(existingItem) {
                    carts.splice(existingItem,1)
                }
            }
            resolve()
        })
    },

    clearCart() {
        return new Promise(function(resolve){
            setTimeout(() => {
                carts = []
                resolve()
            },1000)
        })
    }
}