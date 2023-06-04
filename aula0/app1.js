const random = ({min = 0, max = 1000}) => {
    const n = Math.random() * (max - min) + min;
    return Math.floor(n);
};

const obj = new Object();
obj['min'] = 12;
obj.max = 26;

for(let key in obj) {
    console.log(obj[key])
}