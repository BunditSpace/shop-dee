

import categoryService from '@/api/productCategoryService'

const type = {
    requestCategories: 'PRODUCT_CATEGORY_REQUEST_CATEGORIES',
    requestAddCategory: 'PRODUCT_CATEGORY_ADD_CATEGORY',
    requestRemoveCategory: 'PRODUCT_CATEGORY_REMOVE_CATEGORY',
}

const state = {
    categories: [],
    isAddSuccess : true,
    isDeleted : false
}

const getters = { 
    
}

const actions = {
    async requestCategories({state, commit}) {
        let response = await categoryService.getAll()
        commit(type.requestCategories, response)
    },
    async addCategory({state, commit, dispatch}, category){
        let response = await categoryService.addCategory(category)
        //dispatch('requestCategories')
        commit(type.requestAddCategory, response)      
    },
    async deleteCategory({state, commit, dispatch}, category){
        let response = await categoryService.deleteCategory(category)
        commit(type.requestRemoveCategory, response)      
    }
}

const mutations = {
    [type.requestCategories](state, items) {
        state.categories = items
    },
    [type.requestAddCategory](state, isAdd) {
        state.isAddSuccess = isAdd
    },
    [type.requestRemoveCategory](state, isDeleted) {
        state.isDeleted = isDeleted
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}