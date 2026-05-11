<script setup>
    
    import { computed, ref } from 'vue';
    
    import { useRoute } from 'vue-router';

    const route = useRoute();

    const id = computed(() => route.params.id) ;

</script>

<template>
    <div>
        <h1>about</h1>
        <h1>Id: {{ id }}</h1>

        
    </div>
</template>