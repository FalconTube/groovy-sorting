<script>
	import RegexTester from "./Regex.svelte";
</script>

<head>
	<link rel="stylesheet" href="https://pyscript.net/latest/pyscript.css" />
	<script defer src="https://pyscript.net/latest/pyscript.js"></script>
	<py-config> packages=['regex',] </py-config>
</head>

<RegexTester />
