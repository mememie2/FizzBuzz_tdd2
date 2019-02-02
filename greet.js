function greet(name) {

    if(name == null){
        return 'Hello, my friend.';

    }else if(name.constructor == Array){
        if(name.length > 2){
            return "Hello " + name.slice(0,name.length - 1).join(", ") + ", and " + name.slice(name.length-1) + ".";
        }else{
            return "Hello " + name.join(" and ") + ".";
        }
    }else if(name.constructor !== Array && name == name.toUpperCase()){
        if (name == name.toUpperCase()){
            return `HELLO ${name}!`;
        }
    }else{
        return "Hello, " + name + ".";
    }
    }

module.exports = greet;