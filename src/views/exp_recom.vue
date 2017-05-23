<style>
    .exp_list{
        padding: 20px;
        text-align: center;
        align-content: center;
        align-items: center;
    }
    .exp_list_item{
        margin: 10px 15px 10px 15px;
        height: 100px;
    }
    .exp_list_page{
        text-align: center;
        width: 50%;
        margin-left: 35%;
    }
</style>
<template>
    <div class="exp_list">
        <Card  class="exp_list_item" v-for="exp in expList" >
            <div style="text-align:center">
                <h3>{{exp}}</h3>
            </div>
        </Card>
        <div class="exp_list_page">
            <Page :total="100"></Page>
        </div>

    </div>

</template>
<script>
    export default {
        data () {
            return {
                expList : [
                	"CPLD可编程数字信号发生器",
                "模拟信号发生器     ",
                "信宿模块        ",
                "抽样定理与PAM系统实训",
                "PCM编码译码原理实训 ",
                "FSK调制原理及解调原理",
                "PSK调制原理及解调原理",
                "PAM综合设计性实验  ",
                "FSK综合设计性实验  ",
                "PSK综合设计性实验 " ,
            ],
            }
        },
        computed: {
        },
        mounted() {
        }
    }
</script>
