{#if count < 1}
	Shop
	<button on:click={updateShop}>
		Open Shop
	</button>
{/if}
{#each shop as item}
	<div class="item">
		{item.name}
		<button on:click={order(item)}>
			Order Case : {item.caseSize}
		</button>
		{item.currency} €
		{item.price}
		<button on:click={sell(item)}>
			Sell
		</button>
		Stock quantity: {item.quantity}
	</div>
{/each}
<div>
	Stock Total Value: € {total}
</div>


<script>
import axios from 'axios';

let shop = [];
let total = "";
let count = 0;

const updateShop = () => {
	count = 0;
	count ++;
	subTotal();
	axios.get(`http://localhost:8000/stock`).then(res => {
		shop = res.data;
	})
};
const sell = (item) => {
	axios.delete(`http://localhost:8000/${item.id}`).then(
		updateShop()
	);
};
const order = (item) => {
	axios.post(`http://localhost:8000/${item.id}/restock`).then(
		updateShop()
	);
};
const subTotal = () => {
	axios.get(`http://localhost:8000/value`).then(res => {
		total = res.data;
	});
};


</script>

<style>
.item{
	padding: 1rem;
}
</style>