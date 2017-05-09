<style>
    .result-row-content{
        margin: 20px auto;
    }
</style>
<template>
<div>
    <Row type="flex" justify="center" align="middle"  class="result-row-content">
        <Col span="10">
        <Card style="width: 350px;">
            <Spin size="large" fix v-if="spinShow"></Spin>

            <div style="text-align:center; overflow: hidden">
                <img src="/dist/logo.png" style="max-width: 330px"/>
                <h3>logo</h3>
            </div>
        </Card>
        </Col>
        <Col span="10">
        <Card style="width: 350px;height: 300px">
            <Spin size="large" fix v-if="spinShow"></Spin>
        </Card>
        </Col>
    </Row>
    <Row type="flex" justify="center" align="middle" class="result-row-content">
        <Col span="10"><Card style="width: 350px;height: 300px">
        <Spin size="large" fix v-if="spinShow"></Spin>
    </Card>
        </Col>
        <Col span="10">
        <Card style="width: 350px;height: 350px">
        <Spin size="large" fix v-if="spinShow"></Spin>
    </Card>
        </Col>
    </Row>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                spinShow: true
            }
        },
        computed: {

        },
        methods: {

        },
        mounted() {
            setTimeout(()=>{
                this.spinShow = false;
    },500)
        },
        beforeDestroy () {
        },
    }
</script>