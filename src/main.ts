import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import { SimplePay, Network } from './SimplePay';

export const simplePay: SimplePay = new SimplePay({
    primaryAddress: "49ouNFXbQxj72FYjEgRjVTa35dHVrSL118vNFhxDvQWHJYpZp523EckbrqiSjM6Vb1H6Ap43qYpNRHBaVS9oBFtZUeTaH88",
    secretViewKey: "9fb781ad709a41bd651f92c2e380813b9ca8abfb7e733105202e1d9f12799c03",
    network: Network.mainnet,
    defaultConfirmations: 0,
    monerodUsername: "",
    monerodPassword: "",
    monerodUri: "https://community.organic-meatballs.duckdns.org:443",
});


createApp(App).use(router).mount('#app')
