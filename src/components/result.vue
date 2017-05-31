<style>
    .result-row-content{
        margin: 20px auto;
    }
</style>
<template>
<div>
    <Row type="flex" justify="center" align="middle"  class="result-row-content">


        <Col span="10" v-for="image in imageList">
        <Card style="width: 350px;height: 300px; margin-bottom: 10px">
            <Spin size="large" fix v-if="spinShow"></Spin>
            <div style="text-align:center; overflow: hidden">
                <img v-bind:src="image" @click="showBigImage" style="max-width: 330px"/>
            </div>
        </Card>
        </Col>

        <Modal
                v-model="bigImageModal"
                title=""
                width="1000">
            <div style="text-align:center; overflow: scroll">
                <img v-bind:src="currentImage"  style="mix-width: 520px; max-width: 1000px"/>
            </div>
            <div slot="footer">
            </div>
        </Modal>
    </Row>
    </div>
</template>
<script>
    export default {
        data () {
            let currentImages = window.localStorage.getItem('current_images');
            let imageList = [];
            if (currentImages) {
                imageList = JSON.parse(currentImages).map(function (item) {
                    return "//simulay.outshine.me/image/" + item;
                });
            }
            return {
                spinShow: true,
                imageList: imageList,
                bigImageModal: false,
                currentImage: ''
            }
        },
        computed: {

        },
        methods: {
            showBigImage(event) {
                let imageSrc = event.target.src;
                this.bigImageModal = true;
                this.currentImage = imageSrc;
            }

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
