<template>
	<div class="item" v-for="(item, i) in shop" :key="i">
		{{item.name}}
		<button v-on:click="order(item)"
		> 
			Order Case : {{item.caseSize}}
		</button>
		{{item.currency}} €
		{{item.price}}
		<button v-on:click="sell(item)"
		>
			Sell
		</button>
		Stock quantity: {{item.quantity}}
	</div>
<button v-if="count < 1" v-on:click="updateShop()"
>
	Open Shop
</button>
Stock Total Value : € {{total}}
</template>

<script>
import axios from 'axios';

export default {
	name: "App",
	methods: {
		updateShop() {
			this.count ++;
			this.subTotal();
			axios.get(`http://localhost:5000/stock`).then(res => {
				res.data.data.forEach((e)=> {
					this.shop.push(e);
				});
			});
		},
		sell(e) {
			axios.delete(`http://localhost:5000/${e.id}`).then(res => {
				this.shop = [];
				res.data.data.forEach((e)=> {
					this.shop.push(e);
				});
			});
		},
		order(e) {
			axios.post(`http://localhost:5000/${e.id}/restock`).then(res => {
				this.shop = [];
				res.data.data.forEach((e) => {
					this.shop.push(e);
				});
			});
		},
		subTotal() {
			axios.get(`http://localhost:5000/value`).then(res => {
				this.total = res.data.data;
			});
		}
	},
	data() {
		return {
			count: 0,
			shop: [],
			total: ""
		};
	},
	watch: {
		shop() {
			this.subTotal();
		}
	}
}
</script>

<style>
.item {
  padding: 1rem;
}
</style>
