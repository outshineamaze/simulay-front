<template>
    <div>
            <Card  dis-hover="false" padding=0 >
                <p slot="title">
                    <Icon type="document-text"></Icon>
                    TEXT/OCTAVE（MATLAB）
                </p>
                <a href="#" slot="extra" @click.prevent="codeCopy">
                    <Icon type="code"></Icon>
                    复制
                </a>
                <!-- codemirror -->
                <codemirror v-model="code" 
                            :options="editorOption" 
                            @change="onEditorCodeChange"></codemirror>
            </Card>
    <br>
    <Row type="flex" justify="end" class="code-row-bg">
        <Col span="2" >
        <Button type="primary" @click="saveCode">保存</Button>
        </Col>
        <Col span="2" >
        <Button type="primary" @click="runCode">运行</Button>
        </Col>
    </Row>
    </div>
</template>

<script>

    // styleSelectedText
    require('codemirror/addon/selection/mark-selection.js')
    require('codemirror/addon/search/searchcursor.js')

    // hint
    require('codemirror/addon/hint/show-hint.js')
    require('codemirror/addon/hint/show-hint.css')
    require('codemirror/addon/selection/active-line.js')

    // highlightSelectionMatches
    require('codemirror/addon/scroll/annotatescrollbar.js')
    require('codemirror/addon/search/matchesonscrollbar.js')
    require('codemirror/addon/search/searchcursor.js')
    require('codemirror/addon/search/match-highlighter.js')

    // keyMap
    require('codemirror/mode/clike/clike.js')
    require('codemirror/addon/edit/matchbrackets.js')
    require('codemirror/addon/comment/comment.js')
    require('codemirror/addon/dialog/dialog.js')
    require('codemirror/addon/dialog/dialog.css')
    require('codemirror/addon/search/searchcursor.js')
    require('codemirror/addon/search/search.js')
    require('codemirror/keymap/sublime.js')

    // foldGutter
    require('codemirror/addon/fold/foldgutter.css')
    require('codemirror/addon/fold/brace-fold.js')
    require('codemirror/addon/fold/comment-fold.js')
    require('codemirror/addon/fold/foldcode.js')
    require('codemirror/addon/fold/foldgutter.js')
    require('codemirror/addon/fold/indent-fold.js')
    require('codemirror/addon/fold/markdown-fold.js')
    require('codemirror/addon/fold/xml-fold.js')

    const saveCode = (that) => {
        window.localStorage.setItem('current_code', that.code);
        that.$Message.info('代码已经保存');
    }

    const getCodeFromStorage = () => {
        return window.localStorage.getItem('current_code');
    }

    export default {
        data() {
            var defaultCode =
                        `%numbers
[1234 1234i 1234j]
[.234 .234j 2.23i]
[23e2 12E1j 123D-4 0x234]
%strings
'asda''a'
"asda""a"
    `
            var currentCode = getCodeFromStorage()
            return {
                code : currentCode === null ? defaultCode : currentCode,
                editorOption: {
                    tabSize: 4,
                    styleActiveLine: true,
                    lineNumbers: true,
                    line: true,
                    foldGutter: true,
                    styleSelectedText: true,
                    gutters: ["CodeMirror-linenumbers", "CodeMirror-foldgutter"],
                    highlightSelectionMatches: { showToken: /\w/, annotateScrollbar: true },
                    mode: 'text/x-octave',
                    // hint.js options
                    hintOptions:{
                        // 当匹配只有一项的时候是否自动补全
                        completeSingle: false
                    },
                    //快捷键 可提供三种模式 sublime、emacs、vim
                    keyMap: "sublime",
                    matchBrackets: true,
                    showCursorWhenSelecting: true,
                    theme: "base16-light",
                    extraKeys: { "Ctrl": "autocomplete" }
                }
            }
        },
        methods: {
            codeCopy: function() {
                this.$Message.info('代码已经复制到粘贴板');
            },
            saveCode: function() {
                saveCode(this);
            },
            runCode: function() {
                this. saveCode();
                this.$Message.info('正在运行。。。');
            },
            onEditorCodeChange: function (newCode) {
                //window.localStorage.setItem('code_temp', newCode);
            }
        },
        mounted() {
            setTimeout(() => {
                this.editorOption.lineNumbers = true
            this.editorOption.styleActiveLine = true
        }, 3000)
        },
        beforeDestroy () {
            if (this.code !== window.localStorage.getItem('current_code')) {
                this.$Modal.confirm({
                            title: '',
                            content: '是否保存代码',
                            onOk: () => {
                                window.localStorage.setItem('current_code', this.code);
                                this.$Message.info('保存成功');
                            },
            });
            }
            window.localStorage.removeItem('code_temp');
        },
    }
</script>

<style>
    .CodeMirror-focused .cm-matchhighlight {
        background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAACCAYAAABytg0kAAAAFklEQVQI12NgYGBgkKzc8x9CMDAwAAAmhwSbidEoSQAAAABJRU5ErkJggg==);
        background-position: bottom;
        background-repeat: repeat-x;
    }
    .cm-matchhighlight {background-color: lightgreen}
    .CodeMirror-selection-highlight-scrollbar {background-color: green}


</style></script>