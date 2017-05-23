<style>
    .list_teach{
        padding: 10px;
    }
    .list_teach_item{
        margin-bottom: 15px;
        margin-right: 15px;
        float: left;
        width:300px;
        height: 300px;

    }
</style>
<template>
    <div class="list_teach">
            <Card  class="list_teach_item" >
                <div style="text-align:center; overflow: hidden">
                    <img src="/dist/images/default.png" style="max-width: 330px;width: 100%"/>
                    <h3>3D曲面绘制</h3>
                </div>
            </Card>

        <Card class="list_teach_item" >
            <div style="text-align:center">
                <h3>PCM编译码</h3>
            </div>
        </Card>
        <Card class="list_teach_item" >
            <div style="text-align:center">
                <h3>数字调制</h3>
            </div>
        </Card>
        <Card class="list_teach_item" >
            <div style="text-align:center">
                <h3>数字基带信号与AMI/HDB3编译码</h3>
            </div>
        </Card>
        <Card class="list_teach_item" >
            <div style="text-align:center">
                <h3>时分复用2DPSK、2FSK通信系统</h3>
            </div>
        </Card>
    </div>
</template>
<script>
    export default {
        data () {
            return {
            }
        },
        computed: {
        },
        mounted() {
        }
    }
</script>
