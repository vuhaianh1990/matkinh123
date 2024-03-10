<script>
	let name = 'Svelte';
	let count = 0;

  console.log(`${name}: The initial count is ${count}.`);

	function increment() {
		count += 1;
    console.log(`${name}: The initial count is ${count}.`);
	}
</script>

<div>
  <p>{name} component:
  <button on:click={increment}>
    Clicked {count}
    {count === 1 ? 'time' : 'times'}
  </button></p>
</div>
