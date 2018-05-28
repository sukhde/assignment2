describe("Shopping", () => {



    it("Should only allow 5 items to be stored", () => {
        const shopping = new Shopping();
        shopping.add(1)
        shopping.add(2)
        shopping.add(3)
        shopping.add(4)
        shopping.add(5)


        expect(shopping.add(6)).toBe("cart is full")
    })
})
it("Should remove the last item in the shopping", () => {
    const shopping = new Shopping();
    shopping.add(1)
    shopping.add(2)
    shopping.add(3)
    shopping.remove()
    
    expect(shopping.remove()).toEqual([1,2])

  })



