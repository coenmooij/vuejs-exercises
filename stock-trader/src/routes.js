import Home from "./components/Home.vue";
import Portfolio from "./components/portfolio/Portfolio.vue";
import Stocks from "./components/stocks/Stocks.vue";

export const routes = [
    {path: '/vuejs-exercises/stock-trader/', component: Home},
    {path: '/vuejs-exercises/stock-trader/portfolio', component: Portfolio},
    {path: '/vuejs-exercises/stock-trader/stocks', component: Stocks},
];