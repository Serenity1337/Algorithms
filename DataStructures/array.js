class MyArray {
  constructor() {
    this.length = 0
    this.data = {}
  }

  get(index) {
    return this.data[index]
  }

  push(element) {
    this.data[this.length] = element
    this.length++
  }
  pop() {
    delete this.data[this.length - 1]
    this.length--
  }
  delete(index) {
    for (let i = index; i < this.length; i++) {
      this.data[i] = this.data[i + 1]
    }
    delete this.data[this.length - 1]
    this.length--
  }
}
const newArray = new MyArray()
newArray.push('0')
newArray.push('1')
newArray.push('2')
newArray.push('3')
newArray.push('4')
newArray.delete(2)
console.log(newArray)
