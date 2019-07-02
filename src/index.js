// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    if(currency<=0)
        return {};
    if(currency > 10000)
        return {error: "You are rich, my friend! We don't have so much coins for exchange"};
    var banknotes = {H:50,Q:25,D:10,N:5,P:1};
    var result = {};
    for (var key in banknotes) {
        if(currency > 0) {
            var b = banknotes[key];
            var c = Math.floor(currency/b);
            if(c > 0) {
                result[key] = c;
                currency -= b*c;
            }
        }
    }
    return result;
};
