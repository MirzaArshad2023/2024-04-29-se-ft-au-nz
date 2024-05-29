const { Add } = require('./sum')

test('Add 2 and 5 to get 7', ()=>{
    expect(Add(3, 5)).toBe(18);
});