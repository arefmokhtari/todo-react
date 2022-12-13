

export const random = new class{
    randint = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
    choice = iter => iter[this.randint(0, iter.length - 1)];
    select = (... iter) => this.choice(iter);
}();

export const getNewId = (products, step = 1) => {
    const id = products.length + step;
    if(products.find(v => v.id == id))
        return getNewId(products, step + 1);
    return id;
}