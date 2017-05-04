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
        <Card  class="exp_list_item" >
            <div style="text-align:center">
                <h3>仿真</h3>
            </div>
        </Card>

        <Card class="exp_list_item" >
            <div style="text-align:center">
                <h3>仿真</h3>
            </div>
        </Card>
        <Card class="exp_list_item" >
            <div style="text-align:center">
                <h3>仿真</h3>
            </div>
        </Card>
        <Card class="exp_list_item" >
            <div style="text-align:center">
                <h3>仿真</h3>
            </div>
        </Card>
        <Card class="exp_list_item" >
            <div style="text-align:center">
                <h3>仿真</h3>
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
            }
        },
        computed: {
        },
        mounted() {
        }
    }
</script>
