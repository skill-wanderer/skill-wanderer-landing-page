<script setup lang="ts">
const route = useRoute()
const slug = route.params.slug

// You can now use 'slug' to fetch data or render content dynamically
</script>

<template>

    {{ slug }}

</template>