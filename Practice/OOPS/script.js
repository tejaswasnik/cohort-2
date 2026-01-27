class Kitaab {
    constructor(name,pages,color,price) {
        this.name = name,
        this.pages = pages,
        this.color = color,
        this.price = price
    }
    open() {}
    close() {}
}

let k1 = new Kitaab("Harry Potter", 486, "blue", 590);
let k2 = new Kitaab("IT", 862, "red", 1199)
let k3 = new Kitaab("The lord of the rings", 1036,"yellow", 1599)