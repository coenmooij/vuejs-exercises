import Home from "./components/Home.vue";
import Portfolio from "./components/portfolio/Portfolio.vue";
import Stocks from "./components/stocks/Stocks.vue";

export const routes = [
    {path: '/stock-trader/', component: Home},
    {path: '/stock-trader/portfolio', component: Portfolio},
    {path: '/stock-trader/stocks', component: Stocks},
];