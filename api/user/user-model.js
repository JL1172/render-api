const { data, genId } = require("../../data/mockDB.js");

module.exports = {
    async findAll(query) {
        const { limit = 1, limitPerPage = 5, page = 1, sortdir = "asc", sortby = "id" } = query;
        if (page === "all") {
            if (sortdir === "asc") {
                return data.sort((a, b) => {
                    return a[sortby] < b[sortby] ? -1 : 1;
                })
            } else if (sortdir === "desc") {
                return data.sort((a, b) => {
                    return a[sortby] > b[sortby] ? -1 : 1;
                })
            }
        } else {
            //pagination algo
            const pagination = [];
            for (let i = 0; i < data.length; i += limitPerPage) {
                pagination.push(data.slice(i, i + limitPerPage))
            }
            //pagination algo

            //sortbykeyfinder
            let sortbyBool;
            for (let i = 0; i < data.length; i++) {
                if (sortby in data[i]) {
                    sortbyBool = true;
                } else {
                    sortbyBool = false
                }
            }
            //sortbykeyfinder

            if (page > pagination.length || limit > limitPerPage || !sortbyBool) return null

            const arrayAtPage = pagination[page - 1];
            let sliceArray = arrayAtPage.slice(0, limit);
            if (limit === "all") sliceArray = arrayAtPage;
            if (sortdir === "asc") {
                return sliceArray.sort((a, b) => {
                    return a[sortby] < b[sortby] ? -1 : 1;
                })
            } else if (sortdir === "desc") {
                return sliceArray.sort((a, b) => {
                    return a[sortby] > b[sortby] ? -1 : 1;
                })
            }
        }
    },
    async findId(id) {
        let found = data.find(n => n.id === Number(id))
        if (!found) return null;
        return found;
    },
    async insert(newUser) {
        let finalCopy = { ...newUser, id: genId() };
        data.push(finalCopy);
        return finalCopy;
    }
}