<template>
    <div>
                        <Menu mode="horizontal" theme="light" :active-name="activeTab">
                        <div v-for="(link, index) in links" >
                            <router-link :to="link.path">
                                <Menu-item :name="index">
                                    <Icon :type="link.ico_class"></Icon>
                                    {{link.name}}
                                </Menu-item>
                            </router-link>

                            </div>
                        </Menu>
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
                activeTab : '',
                links: [
                        { path: '/simulation/ide/edit', name: '代码编辑', ico_class: 'ios-paper' },
                        { path: '/simulation/ide/result', name: '仿真结果', ico_class: 'arrow-right-b'},
                        { path: '/simulation/ide/analysis', name: '统计分析', ico_class: 'stats-bars' },
                        { path: '/simulation/ide/setting', name: '综合设置', ico_class: 'settings'},
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
                    this.activeTab = i;
                    break;
                }
            }
        },
    }
</script>
