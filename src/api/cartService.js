

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
          },
          {
            name: "Spaghetti",
            category: "Food",
            amount: 1,
            price: 80,
            pic:
             "https://img.taste.com.au/O1ofwjUO/w1200-h630-cfill/taste/2016/11/spaghetti-with-meatballs-and-spicy-tomato-sauce-102298-1.jpeg",
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
               
                let cate = carts.find(prod => {
                    return prod.category === product.category
                })
                if(cate){
                    let prod = cate.items.find(pro => {
                        return pro.name === product.name
                    })
                    if(prod){
                        prod.amount += product.amount
                    }else
                        cate.items.push(product)
                }else{
                    carts.push({category: product.category, items: [ product ]})
                }

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
                    var index =cart.items.indexOf(existingItem)   
             
                    cart.items.splice(index,1)
                }
                if(cart.items.length === 0) {
                    var index =carts.indexOf(cart);
                    carts.splice(index,1)
                }
            }
            resolve()
        })
    },
    checkOutItems()
    { 
        return new Promise(function(resolve) {
            carts.splice(0,carts.length)
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