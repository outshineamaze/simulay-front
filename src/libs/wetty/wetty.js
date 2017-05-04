import { lib, hterm } from './hterm_all.js'
import io from './socket.io.js'
function initSocket() {
var term;
var socket = io('127.0.0.1:3000', {path: '/wetty/socket.io'});
var buf = '';
function Wetty(argv) {
    this.argv_ = argv;
    this.io = null;
    this.pid_ = -1;
}

Wetty.prototype.run = function() {
    this.io = this.argv_.io.push();

    this.io.onVTKeystroke = this.sendString_.bind(this);
    this.io.sendString = this.sendString_.bind(this);
    this.io.onTerminalResize = this.onTerminalResize.bind(this);
}

Wetty.prototype.sendString_ = function(str) {
    socket.emit('input', str);
};

Wetty.prototype.onTerminalResize = function(col, row) {
    socket.emit('resize', { col: col, row: row });
};

    socket.on('connect', function() {
        lib.init(function() {
            hterm.defaultStorage = new lib.Storage.Local();
            console.log('new lib storrage')
            term = new hterm.Terminal();
            window.term = term;
            console.log('new term')

            term.decorate(document.getElementById('terminal'));

            term.setCursorPosition(0, 0);
            term.setCursorVisible(true);
            term.prefs_.set('ctrl-c-copy', true);
            term.prefs_.set('ctrl-v-paste', true);
            term.prefs_.set('use-default-window-copy', true);

            term.runCommandClass(Wetty, document.location.hash.substr(1));
            socket.emit('resize', {
                col: term.screenSize.width,
                row: term.screenSize.height
            });

            if (buf && buf != '')
            {
                term.io.writeUTF16(buf);
                buf = '';
            }
        });
    });

    socket.on('output', function(data) {
        if (!term) {
            buf += data;
            return;
        }
        term.io.writeUTF16(data);
    });

    socket.on('disconnect', function() {
        console.log("Socket.io connection closed");
    });
    return socket;
}
export default initSocket