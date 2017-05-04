<style scoped>
    @import 'styles/common.css';
</style>
<template>
    <div class="layout">
        <Menu mode="horizontal"  theme="dark" active-name="1">
            <div class="layout-logo"></div>
            <div class="layout-nav">
                <a  href="/#/simulation/ide/edit">
                    <Menu-item name="1">
                        <Icon type="ios-navigate"></Icon>
                        线上仿真平台
                    </Menu-item>
                </a>
                <a href="/api">
                    <Menu-item name="2">
                        <Icon type="ios-keypad"></Icon>
                        数据API
                    </Menu-item>
                </a>
                <a href="/container">
                    <Menu-item name="3">
                        <Icon type="ios-analytics"></Icon>
                        容器管理系统
                    </Menu-item>
                </a>
            </div>

            <div class="layout-login">
                <Row type="flex" justify="end" class="code-row-bg">
                    <Col span="8">

                    <Poptip placement="bottom" trigger="hover" width="300">
                        <Badge dot>
                            <Icon type="ios-bell-outline" size="26"></Icon>
                        </Badge>

                        <div class="api" slot="content">
                            消息提示
                        </div>
                    </Poptip>
                    </Col>
                    <Col span="16">
                    <Dropdown>
                        <a href="javascript:void(0)">
                            laynezhou
                            <Icon type="arrow-down-b"></Icon>
                        </a>
                        <Dropdown-menu slot="list">
                            <Dropdown-item>个人资料</Dropdown-item>
                            <Dropdown-item>消息设置</Dropdown-item>
                            <Dropdown-item>系统设置</Dropdown-item>
                            <Dropdown-item divided>退出</Dropdown-item>
                        </Dropdown-menu>
                    </Dropdown>
                    </Col>
                </Row>
            </div>
        </Menu>

        <div class="layout-content">
            <Row>
                <i-col span="5">
                    <Menu active-name="1-2" width="auto" :open-names="['1','2','3']">
                        <Submenu name="1">
                            <template slot="title">
                                <Icon type="ios-analytics"></Icon>
                                在线调试
                            </template>
                            <router-link to="/simulation/ide/edit">
                                <Menu-item name="3-1">编辑器</Menu-item>
                            </router-link>
                            <router-link to="/simulation/cmd">
                            <Menu-item name="3-2">命令行</Menu-item>
                            </router-link>
                        </Submenu>

                        <Submenu name="2">
                            <template slot="title">
                                <Icon type="ios-navigate"></Icon>
                                波形仿真
                            </template>
                            <router-link to="/simulation/list/teach">
                                <Menu-item name="1-1">教学仿真</Menu-item>
                            </router-link>
                            <router-link to="/simulation/list/custom">
                                <Menu-item name="1-2">自定义仿真</Menu-item>
                            </router-link>
                        </Submenu>
                        <Submenu name="3">
                            <template slot="title">
                                <Icon type="ios-keypad"></Icon>
                                实验
                            </template>
                            <router-link to="/simulation/experiment/recommend">
                                <Menu-item name="2-2">推荐实验</Menu-item>
                            </router-link>
                            <router-link to="/simulation/experiment/history">
                                 <Menu-item name="2-1">历史实验</Menu-item>
                            </router-link>

                        </Submenu>

                    </Menu>
                </i-col>
                <i-col span="19">
                        <router-view></router-view>
                </i-col>
            </Row>
        </div>
        <div class="layout-copy">
            2011-2017 &copy;laynezhou
        </div>
    </div>


</template>
<script>
    export default {
        data () {
            return {}
        },
        mounted () {

        },
        beforeDestroy () {

        },
        methods: {

        }
    }
</script>
