<template>

    <div class="layout-content">
        <Row>
            <i-col span="5">
        <Menu :theme="light" active-name="1">
            <Menu-group title="API管理">
                <Menu-item name="1">
                    <Icon type="document-text"></Icon>
                    API 列表
                </Menu-item>
                <Menu-item name="2">
                    <Icon type="chatbubbles"></Icon>
                    统计分析
                </Menu-item>
            </Menu-group>
            <Menu-group title="用户管理">
                <Menu-item name="3">
                    <Icon type="heart"></Icon>
                    用户列表
                </Menu-item>
                <Menu-item name="4">
                    <Icon type="heart-broken"></Icon>
                    待审核用户
                </Menu-item>
            </Menu-group>
        </Menu>
                </i-col>

            <i-col span="19">
                <Table border :columns="columns4" :data="data1"></Table>
            </i-col>
        </Row>

        </div>





</template>
<script>
    export default {
        data () {
            return {
                columns4: [
                    {
                        type: 'selection',
                        width: 60,
                        align: 'center'
                    },
                    {
                        title: 'action',
                        key: 'action'
                    },
                    {
                        title: 'method',
                        key: 'method'
                    },
                    {
                        title: 'route',
                        key: 'route'
                    },
                    {
                        title: 'require',
                        key: 'require'
                    }

                ],
                data1: [
                    {
                        action: "List Runner",
                        method: "GET",
                        route:"/runner",
                        require: "Optional"
                    },
                    {
                        action: "GET Runner",
                        method: "GET",
                        route:"//runner/:id",
                        require: "Optional"
                    },
                    {
                        action: "Update  runner ",
                        method: "GET",
                        route:"//runner/:id",
                        require: "Optional"
                    },
                    {
                        action: "delete Runner",
                        method: "GET",
                        route:"/runner",
                        require: "Optional"
                    },
                    {
                        action: "Get result",
                        method: "GET",
                        route:"//runner/:id",
                        require: "Optional"
                    },
                ]
            }
        }
    }
</script>
