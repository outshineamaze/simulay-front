<template>


        <div class="layout-content">
            <Row>
                <i-col span="5">
                    <Menu :theme="theme" :active-name="activeTab" width="auto" :open-names="['1','2','3']">
                        <Submenu name="1">
                            <template slot="title">
                                <Icon type="ios-analytics"></Icon>
                                在线调试
                            </template>
                            <router-link to="/simulation/ide/edit">
                                <Menu-item name="1">编辑器</Menu-item>
                            </router-link>
                            <router-link to="/simulation/cmd">
                                <Menu-item name="2">命令行</Menu-item>
                            </router-link>
                        </Submenu>

                        <Submenu name="2">
                            <template slot="title">
                                <Icon type="ios-navigate"></Icon>
                                波形仿真
                            </template>
                            <router-link to="/simulation/list/teach">
                                <Menu-item name="3">教学仿真</Menu-item>
                            </router-link>
                            <router-link to="/simulation/list/custom">
                                <Menu-item name="4">自定义仿真</Menu-item>
                            </router-link>
                        </Submenu>
                        <Submenu name="3">
                            <template slot="title">
                                <Icon type="ios-keypad"></Icon>
                                实验
                            </template>
                            <router-link to="/simulation/experiment/recommend">
                                <Menu-item name="5">推荐实验</Menu-item>
                            </router-link>
                            <router-link to="/simulation/experiment/history">
                                <Menu-item name="6">历史实验</Menu-item>
                            </router-link>

                        </Submenu>

                    </Menu>
                </i-col>
                <i-col span="19">
                    <router-view></router-view>
                </i-col>
            </Row>
        </div>



</template>


<script>
    export default {
        data () {
            return {
                theme: 'light',
                activeTab : '1',
                links: [
                    { path: '/simulation/ide/edit' },
                    { path: '/simulation/cmd'},
                    { path: '/simulation/list/teach' },
                    { path: '/simulation/list/custom'},
                    { path: '/simulation/experiment/recommend'},
                    { path: '/simulation/experiment/history'},
                ],

            }
        },
        computed: {
        },
        mounted() {
            let path = window.location.hash;
            for (var i = 0; i < this.links.length; i++) {
                if (('#' + this.links[i].path) == path) {
                    console.log(path);
                    this.activeTab = '' + ++i;
                    break;
                }
            }
        },
    }
</script>
