<template>
    <Card style="width: 100%;">
        <Row type="flex" justify="center">
            <Col span="4">
            <i-circle :percent="percent" :stroke-color="color">
                <Icon v-if="percent == 100" type="ios-checkmark-empty" size="60" style="color:#5cb85c"></Icon>
                <span v-else style="font-size:24px">{{ percent }}%</span>
            </i-circle>
            </Col>
            <Col span="4">
            <i-circle :percent="100" stroke-color="#5cb85c">
                <Icon type="ios-checkmark-empty" size="60" style="color:#5cb85c"></Icon>
            </i-circle>
            </Col>
            <Col span="4">
            <i-circle :percent="35" stroke-color="#ff5500">
        <span class="demo-i-circle-inner">
            <Icon type="ios-close-empty" size="50" style="color:#ff5500"></Icon>
        </span>
            </i-circle>
            </Col>
        </Row>



    </Card>
</template>
<script>
    export default {
        data () {
            return {
                percent: 0
            }
        },
        computed: {
            color () {
                let color = '#2db7f5';
                if (this.percent == 100) {
                    color = '#5cb85c';
                }
                return color;
            }
        },
        methods: {
            add () {
                if (this.percent >= 100) {
                    return false;
                }
                this.percent += 10;
            },
            minus () {
                if (this.percent <= 0) {
                    return false;
                }
                this.percent -= 10;
            }
        },
        beforeDestroy () {
        },
    }
</script>