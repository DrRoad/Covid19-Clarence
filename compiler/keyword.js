
function Keyword(name) {
    this.name = function () { return name; }
    
    this.asString = function () { return ':' + name; }

    this.asCode = function () {
        return 'keywords.keyword(' + JSON.stringify(name) + ')'; 
    }
    
    this.equals = function (value) {
        if (value == null)
            return false;
            
        if (!(value instanceof Keyword))
            return false;
            
        return name == value.name();
    }
}

function createKeyword(name) {
    return new Keyword(name);
}

module.exports = {
    keyword: createKeyword,
    isKeyword: function (value) { return value instanceof Keyword; }
};