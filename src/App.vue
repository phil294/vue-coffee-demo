<template>
<div id="app">
	{{ greeting }}
</div>
</template>

<script lang="coffee">
# No intellisense in this script section :(
# If you open up main.coffee, you'll see that it works there (go to etc)

# Also syntax highlighting is completely broken in coffee script sections.
# It is fine with Vetur, I think, that's why I normally use that instead.
# But Vetur also doesn't support coffee language features of course.

# To receive full editor support, one can do
# <script lang="coffee" src="./App.coffee"/>
# instead and externalize the script. That works really great, but obviously kills
# the point of SFCs.

import { ref } from 'vue'

export default
	# <script setup> doesn't seem to work with CoffeeScript too but afaik this is not fixable
	# as ts macros don't work (?)
	setup: ->
		greeting: ref 'hii'
</script>

<style scoped>
#app {
	font-size: 72px;
}
</style>