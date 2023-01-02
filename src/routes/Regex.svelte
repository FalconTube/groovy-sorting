<script>
    import { onMount } from 'svelte';
	import Item from './Item.svelte';
	// import Code from './Code.svelte';
    import { writable } from 'svelte/store';

	let title = 'Groovy sorting';
	const regex = /[a-zA-Z]+\s[A-Za-z0-9]+\([^)]*\)\s+\{/g;
	let groovystring = '';
	let mylist = writable({});
	$mylist = [];
	
	// console.log(matches);

	function listFunc() {
		// Unsorted
		$mylist = [];
		const matches = [...groovystring.matchAll(regex)];

		for (let i = 0; i < matches.length; i++) {
			var l = $mylist.length;
			$mylist[l] = {name: matches[i]};
		}
	};


</script>

<html lang="en-us">
<h1 class="title">
	{title}
</h1>

<div class="outer container">
	<div class="left-column">

		<label for="infile">Groovy source input:</label>
		<!-- <pre id="infile" class="codeblock" contenteditable bind:innerHTML={groovystring}></pre> -->
		<textarea class="codeblock" bind:value={groovystring} on:input={listFunc}></textarea>
		<div id="infile" style="display: none;">{groovystring}</div>
		
		<div class="column">
			<div class="row">
			<button id="button">Sort</button>	
			<div class="middle">
			<p>Sort functions by name, alphabetically ascending.</p>
			<code>Regex: '{regex}'</code><br>
			<code>{`Example: void myFunc(String instring) {...}`}</code>
			</div>
			</div>
		</div>
		
		
		<label for="code">Sorted Groovy file:</label>
		<textarea id="mycode" class="codeblock"></textarea>
		<!-- <Code code=""/> -->
	</div>		
	<div class="right-column">
	<label for="foundlist">Found functions</label>
	<ul class="inlist" id="foundlist">
		{#each $mylist as item, index}
		<svelte:component this={Item} objAttributes={item} delay={index}/>
		{/each}
	</ul>
	</div>		
</div>

<py-script>
from pyodide.ffi import create_proxy
import regex
from js import document, console

def sortkey():
    """Return the basename of function."""
    return lambda n: n.split("(")[0].split(" ")[-1]			
				
def hello_args(self):
	finalreg = r"[a-zA-Z]+\s[A-Za-z0-9]+\([^)]*\)\s*\&#123((?:[^&#123&#125]|\&#123(?1)*\&#125)*)\&#125"
	
	text = document.getElementById("infile").innerHTML
	matches = regex.finditer(finalreg, text)

	# Get all matches as strings in list
	out = []
	for match in matches:
		outstring = "".join(match.group())
		out.append(outstring)

	# Sort by function name before first bracket
	outsort = sorted(out, key=sortkey())

	# Remove all found functions from text and strip trailing whitespace
	for i in outsort:
		text = text.replace(i, "")
	text = text.rstrip({`'<br>'`})
	text = text.strip()


	# Now add them in sorted order
	for i in outsort:
		text += f'\n&#123 i &#125\n'
	document.getElementById("mycode").value = text

Element('button').element.addEventListener("click", create_proxy(hello_args))
</py-script>

</html>
<style>
	html {
		font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
		font-size: 18pt;
		background: linear-gradient(30deg, rgba(2,0,36,1) 0%, rgba(74,188,231,1) 0%, rgba(44,87,103,1) 0%, rgba(66,152,184,1) 100%);
		background-attachment: fixed;
	}
	label {
		/* text-shadow: 1px 1px 3px black; */
		color: #666;
		font-weight: 700;
	}
	.outer{
		height: 80%;
		margin: 0;
		border: 1px solid #e2e2e2; 
		padding: 1em; 
		margin-bottom: 1rem;
		border-radius: 10px;
		background-color: #f2f2f2;

	}
	.inlist {
		flex: 1;
		border: 1px solid #e2e2e2;
		border-radius: 10px;
		padding: 0;
		margin-top: 10px;
		/* padding: 1rem 1rem 1rem 2rem; */
		
	}

	.left-column {
		display: flex;
		flex-direction: column;
		align-items: stretch;
		flex: 3;
		/* border: 3px solid #4298b8; */
		
	}
	.right-column {
		flex-direction: column;
		align-items: center;
		flex: 1;
		overflow-x: hidden;
		/* border: 3px solid #4298b8; */
		
	}
	.row {
		display: flex;
		flex-direction: row;
		flex-flow: wrap;

	}
	.title {
		margin: 0;
		max-width: 100%;
		text-align: center;
		font-size: 40pt;
		color: #f2f2f2;
		text-shadow: 1px 1px 5px black;

	}
	button {
		min-width: 200px;
		margin: 1rem;
		transition-duration: 0.2s;	
		background-color: white; 
		color: black; 
		border: 2px solid rgba(66,152,184,1);
		border-radius: 10px;
			cursor: pointer;

	}
	button:hover {
		background-color: #4298b8; 
		color: white; 
		text-shadow: 1px 1px 2px black;
	}
	p {
		margin: 0;
	}
	.middle {
		border: 2px solid #4298b8;
		border-radius: 10px;
		padding: 2px;
	}
	
		

</style>
