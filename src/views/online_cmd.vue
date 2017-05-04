<style>
    .terminal {
        display: block;
        position: relative;
        width: 100%;
        height: 100%;
    }
</style>
<template>
    <div>
        <div class="terminal" id="terminal"></div>
    </div>
</template>
<script>
    import initSocket from '../libs/wetty/wetty'

    export default {
        data () {
            return {
            }
        },
        computed: {
        },
        mounted() {
            initSocket();
        }
    }
</script>
