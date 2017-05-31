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
    <div>
    <div class="exp_list" v-for="exp in expList">
        <router-link  :to='{ path: "/simulation/ide/" + exp._id + "/edit" }' >
        <Card  class="exp_list_item" >
            <div style="text-align:center">
                <h3>{{exp._id}}</h3>
                <h5>{{exp.date}}</h5>
            </div>
        </Card>
        </router-link>
    </div>

        <!--<div class="exp_list_page">-->
            <!--<Page :total="100"></Page>-->
        <!--</div>-->
    </div>

</template>
<script>
    import codeService from '../services/code.js'
    export default {
        data () {
            return {
                expList: []
            }
        },
        computed: {
        },
        mounted() {
            let that = this;
            codeService.pullHistory({page: 1, pageSize: 10}).then(
                    function (result) {
                        that.expList = result;
                        console.log(that.expList)
            });
        }
    }
</script>
