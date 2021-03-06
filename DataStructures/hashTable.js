class HashTable {
  constructor(size) {
    this.data = new Array(size)
  }

  _hash(key) {
    let hash = 0
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length
    }
    return hash
  }
  set(key, value) {
    const index = this._hash(key)
    const bucket = [key, value]
    if (!this.data[index]) {
      this.data[index] = []
    }
    this.data[index].push(bucket)
  }
  get(key) {
    const index = this._hash(key)
    const currentBucket = this.data[index]
    if (currentBucket) {
      for (let i = 0; i < currentBucket.length; i++) {
        if (currentBucket[i][0] === key) {
          return currentBucket[i][1]
        }
      }
    }
    return undefined
  }
  keys() {
    const keysArray = []
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i]) {
        if (this.data[i].length > 1) {
          for (let j = 0; j < this.data[i].length; j++) {
            keysArray.push(this.data[i][j][0])
          }
        } else {
          keysArray.push(this.data[i][0][0])
        }
      }
    }
    return keysArray
  }
}

const newTable = new HashTable(50)

newTable.set('grapes', 10000)
newTable.set('apples', 54)
console.log(newTable.keys())
console.log(newTable.get('grapes'))
console.log(newTable.get('apples'))
console.log(newTable)
