module.exports = function reverse (n) {
        let strNum = n.toString();
        if (strNum[0] === '-') {
            strNum = strNum.slice(1);
        }
        const ReverseNum = +(strNum.split('').reverse().join(''));
        return ReverseNum;
}
