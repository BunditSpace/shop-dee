const productCategories = [
    {
        name: 'Food'
    },
    {
        name: 'Fashion'
    }
]

export default {
    getAll() {
        return new Promise(function (resolve, reject) {
            setTimeout(() => {
                resolve(productCategories)
            }, 1000);
        })
    },

    addCategory(item) {
        return new Promise(function (resolve, reject) {
            setTimeout(() => {
                var found = productCategories.find(function (category) {
                    return category.name == item.name;
                });
                if (found) {
                    resolve(false)
                }else {
                    resolve(true)
                    productCategories.push({...item})
                }
                    

            }, 1000)
        })
    },

    deleteCategory(item) {
        return new Promise(function (resolve, reject) {
            setTimeout(() => {
                var index =-1
                var found = productCategories.find(function (category) {
                    index++
                    return category.name == item.name;
                });
                if (found) {
                    productCategories.splice(index,1)
                    resolve(true)
                }else {
                    resolve(false)
                }
            }, 1000);
        }) 
    }
}