<template>
    <div class="layout">
        <Affix>
            <Menu mode="horizontal"  theme="dark" active-name="2">
                <div class="layout-logo"></div>
                <div class="layout-nav">
                    <router-link to="/code">
                        <Menu-item name="1">
                            <Icon type="ios-navigate"></Icon>
                            线上仿真平台
                        </Menu-item>
                    </router-link>
                    <router-link to="/api">
                        <Menu-item name="2">
                            <Icon type="ios-keypad"></Icon>
                            数据API
                        </Menu-item>
                    </router-link>
                    <router-link to="/container">
                        <Menu-item name="3">
                            <Icon type="ios-analytics"></Icon>
                            容器管理系统
                        </Menu-item>
                    </router-link>
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

        </Affix>
        <div class="layout-content">
            API
        </div>
    </div>
</template>
<script>
    export default {
        data () {

        },
        computed: {

        },
        mounted() {

        }
    }
</script>
