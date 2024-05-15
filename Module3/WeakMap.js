const weakMap = new WeakMap()
let princess = { name: 'Belle' }
weakMap.set(princess, 'Beauty and the Beast')
princess = null // no longer a reference to princess1 in memory, so weakMap is now empty
// BUT there’s no way to check because we can’t do .size, .values() or .keys() on a WeakMap
//weakMap.set('Cinderella', 'Cinderella') // TypeError: Invalid value used as weak map key
console.log(weakMap.get(princess))