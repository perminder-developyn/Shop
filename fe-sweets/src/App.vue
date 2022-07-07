<template>
	<div class="item" v-for="(item, i) in shop" :key="i">
		{{item.name}}
		<button v-on:click="order(item)"
		> 
			Order Case : {{item.casesize}}
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
<div v-if="shop.length > 1">
	Stock Total Value : € {{total}}
</div>
</template>

<script>
import axios from 'axios';

export default {
	name: "App",
	methods: {
		updateShop() {
			this.shop = [];
			this.count = 0;
			this.count ++;
			this.subTotal();
			axios.get(`http://18.132.16.240:8080/stock`).then(res => {
				console.log(res)
				res.data.data.forEach((item)=> {
					this.shop.push(item);
				});
			});
		},
		sell(item) {
			axios.delete(`http://18.132.16.240:8080/${item.id}`).then(
				this.updateShop()
			);
		},
		order(item) {
			axios.post(`http://18.132.16.240:8080/${item.id}/restock`).then(
				this.updateShop()
			);
		},
		subTotal() {
			axios.get(`http://18.132.16.240:8080/value`).then(res => {
				this.total = res.data;
			});
		}
	},
	data() {
		return {
			count: 0,
			shop: [],
			total: ""
		};
	}
}
</script>

<style>
.item {
  padding: 1rem;
}
</style>
