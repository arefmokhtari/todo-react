

export const random = new class{
    randint = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
    choice = iter => iter[this.randint(0, iter.length - 1)];
    select = (... iter) => this.choice(iter);
}();

export const getProducts = (num = 10) => {
    let arr = [],i=0;
    while(i++<num)
        arr.push({id: i, title: random.select('mobile', 'laptop'), content: `product ${i}`});
    return arr;
}


export const setDataNav = (value, setData, name, callback) => {
    const newData = callback(... value.trim().split(' '));
    setData({
        name: name,
        val: newData
    });
}
