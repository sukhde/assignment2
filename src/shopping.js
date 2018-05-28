class Shopping {
    constructor(items) {
        if (items) {
            this.items = items.slice(0, 5)
        } else {
            this.items = []
        }
    }

    add(value) {
        if (this.items.length < 5) {
            this.items.push(value)
        } else {
            return "cart is full"
        }
    }


 remove() {
    if (this.items.length < 1) {
      return "cart is empty"
    } else {
      this.items.pop()
    }
  }
}











