var m = require("mithril")

var User = {
    list: [],
    loadList: function() {
        User.list = [{"id": 1, "name": "name"}]
    }
}

module.exports = User