import * as types from '../mutations_types/mutations_type.js';
export default  {
    addGoods: ({
        commit
    }) => {
        commit(types.ADDGOODS);
    },
    delGoods: ({
        commit
    }) => {
        commit(types.DELGOODS);
    },
    changeGoods: ({
        commit
    }) => {
        commit(types.CHANGEGOODS);
    },
    all: ({
        commit
    }) => {
        commit(types.ALL);
    },
    render: ({
        commit
    },value) => {
        commit(types.RANDER,value);
    },
     save: ({
        commit
    },value) => {
        commit(types.SAVE,value);
    },
    doSearch: ({
        commit
    },value) => {
        commit(types.DOSEARCH,value);
    },
     checkLogin: ({
        commit
    },value) => {
        commit(types.CHECKLOGIN,value);
    },
    buyupdata:({
        commit
    },value) => {
        commit(types.BUYERDATA,value);
    },
    addBuy:({
        commit
    }) => {
        commit(types.ADDBUY);
    },
     userData:({
        commit
    }) =>{
        commit(types.USERDATA);
    },
    useradd:({
        commit
    },value) =>{
        commit(types.USERADD,value);
    },
    userdel:({
        commit
    }) =>{
        commit(types.USERDEL);
    }
};

