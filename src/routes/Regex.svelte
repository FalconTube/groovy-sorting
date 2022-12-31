<script>
	import Code from './Code.svelte';
	let title = 'Groovy sorting';
	let groovystring = '';

</script>

<html lang="en-us">
<h1 class="title">
	{title}
</h1>

<div class="outer">

	<label for="infile">Groovy source input:</label>
	<pre id="infile" contenteditable></pre>
	
	<div class="column">
		<div class="row">
		<button id="button">Sort</button>	
		<button bind:this={Code.button}>Copy to Clipboard</button>
		</div>
	</div>
	
	
	<label for="code">Sorted Groovy file:</label>
	<Code code=""/>
</div>		

<py-script>
from pyodide.ffi import create_proxy
import regex
from js import document

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
	

	# Now add them in sorted order
	for i in outsort:
		text += f'\n&#123 i &#125\n'
	text = text.strip()
	#document.getElementById("outmsg").value = text
	document.getElementById("mycode").innerHTML = text
	console.log(text)

Element('button').element.addEventListener("click", create_proxy(hello_args))
</py-script>

</html>
<style>
	html {
				font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
				font-size: 14pt;
	}
	label {
		color: #666;
		font-weight: 700;
	}
	.outer{
		height: 80%;
		margin: 0;
		display:flex; 
		flex-direction: column;
		border: 1px solid #e2e2e2; 
		padding: 1em; 
		margin-bottom: 1rem;
		border-radius: 4px;
		background-color: #f2f2f2;

	}

	.column {
		display:flex; 
		flex-direction: column;
		align-items: center;
		justify-content: space-around;
		
	}
	.row {
		flex-direction: row;

	}
	.title {
		margin: 0;
		max-width: 100%;
		text-align: center;
	}
		button {
		min-width: 200px;
		margin: 1rem;
		transition-duration: 0.2s;	
		background-color: white; 
		color: black; 
		border: 2px solid #66AFE9;
		border-radius: 4px;
			cursor: pointer;

	}
	button:hover {
		background-color: #66AFE9; 
		color: white; 
	}
		

</style>
