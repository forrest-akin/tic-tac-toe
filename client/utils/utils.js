// returns a function that takes two items and return one based on some predicate
export function createBinaryComporator (predicate, keys) {
  return (a, b) => predicate(get(a, keys), get(b, keys)) ? a : b
}

// recursively access an arbitrarily nested item
export function get (collection, [key, ...keys] = []) {
  const item = collection[key]
  if (!keys.length) return item
  return item && get(item, keys)
}

// set an arbitrarily nested item's value
export function set (collection, keys, value) {
  const keysCopy = keys.slice()
  const key = keysCopy.pop()
  const container = get(collection, keysCopy)
  if (container) return container[key] = value
}

// returns a random item in an array
export function getRandomItem (arr) {
  return arr[Math.floor(Math.random() * arr.length)]
}

export function isGreaterThan (a, b) {
  return a > b
}

export function isLessThan (a, b) {
  return a < b
}

export function nestedUpdate (arr, [idx, ...indexes], item) {
  if (idx === undefined) return item
  return updateItem(arr, idx, nestedUpdate(arr[idx], indexes, item))
}

export function updateItem (arr, idx, item) {
  const copy = [...arr]
  copy.splice(idx, 1, item)
  return copy
}
