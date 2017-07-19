const state = {
    funds: 10000,
    stocks: [],
};

const mutations = {
    'BUY_STOCK'(state, {id, amount, price}){
        const record = state.stocks.find(stock => {
            return stock.id === id
        });
        if (record) {
            record.amount += parseInt(amount);
        } else {
            state.stocks.push({id: id, amount: parseInt(amount)});
        }
        state.funds -= (price * parseInt(amount));
    },
    'SELL_STOCK'(state, {id, amount, price}){
        const record = state.stocks.find(stock => {
            return stock.id === id
        });
        if (record.amount > parseInt(amount)) {
            record.amount -= parseInt(amount);
        } else {
            state.stocks.splice(state.stocks.indexOf(record), 1);
        }
        state.funds += (price * parseInt(amount));
    },
    'SET_PORTFOLIO'(state, {funds, stockPortfolio}){
        state.funds = funds;
        state.stocks = stockPortfolio ? stockPortfolio : [];
    }
};

const actions = {
    sellStock({commit}, order){
        commit('SELL_STOCK', order);
    }
};

const getters = {
    stockPortfolio(state, getters){
        return state.stocks.map(stock => {
            const record = getters.getStocks.find(element => {
                return element.id === stock.id;
            });
            return {
                id: stock.id,
                amount: stock.amount,
                name: record.name,
                price: record.price,
            };
        });
    },
    funds(state){
        return state.funds;
    }
};

export default {
    state, mutations, actions, getters
}