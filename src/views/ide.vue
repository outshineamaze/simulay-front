<template>
    <div>
                        <Menu mode="horizontal" :theme="theme1" active-name="1">
                            <router-link to="/simulation/ide/edit">
                                <Menu-item name="1">
                                    <Icon type="ios-paper"></Icon>
                                    代码编辑
                                </Menu-item>
                            </router-link>
                            <router-link to="/simulation/ide/result">
                                <Menu-item name="2">
                                    <Icon type="arrow-right-b"></Icon>
                                    仿真结果
                                </Menu-item>
                            </router-link>
                            <router-link to="/simulation/ide/analysis">
                                <Menu-item name="3">

                                    <Icon type="stats-bars"></Icon>
                                    统计分析

                                </Menu-item>
                            </router-link>
                            <router-link to="/simulation/ide/setting">
                                <Menu-item name="4">
                                    <Icon type="settings"></Icon>
                                    综合设置
                                </Menu-item>
                            </router-link>
                        </Menu>
                        <br>

                    <div class="layout-content-main">
                        <router-view></router-view>
        </div>
        <div class="layout-copy">
            2011-2017 &copy;laynezhou
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
            console.log(this.$route.params.simulationId)
            }
    }
</script>
