<style>
    .terminal {
        display: block;
        position: relative;
        width: 100%;
        height: 500px;
        background-color: black;
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
            console.log('inti socket');
            this.socket = initSocket();
            console.log('inti socket end');
        },
        destroyed() {
            this.socket.emit('disconnect');
            console.log('disconnect');
        }
    }
</script>
