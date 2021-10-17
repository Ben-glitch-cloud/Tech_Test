const VauleChecker = require('./VauleChecker')  

test('Check weather all vaules are of string', () => { 
    const vaulechecker = new VauleChecker('abc', 'abc')
    expect(vaulechecker.VauleType()).toEqual("no error")
}) 

test('checks that the vaules are the same type', () => { 
    const vaulechecker = new VauleChecker(3, 3)
    expect(vaulechecker.VauleType()).toEqual("no error")
}) 

test('checks that the vaules are of a different type', () => {
    const vaulechecker = new VauleChecker('abc', 3) 
    expect(vaulechecker.VauleType()).toEqual("Expected type string but found type number")
})

test('checks weather the vaules are exactly the same', () => {
    const vaulechecker = new VauleChecker(1, 2)
    expect(vaulechecker.VauleType()).toEqual("Expected 1 but found 2")
}) 

test('Checks the string vaule is different', () => { 
    const vaulechecker = new VauleChecker('abc', 'ab')
    expect(vaulechecker.VauleType()).toEqual("Expected abc but found ab")
}) 

test('checks weather the arrays vaules are the same length', () => {
    const vaulechecker = new VauleChecker(['a', 'b', 'c'], ['a', 'b']) 
    expect(vaulechecker.VauleType()).toEqual("Expected array length 3 but found 2")
})

test('checks weather the arrays vaules are not the same length', () => {
    const vaulechecker = new VauleChecker(['a', 'b', 'c'], ['a', 'b', 'c']) 
    expect(vaulechecker.VauleType()).toEqual("no error")
}) 

test('checks weather the arrays vaules are the same length', () => {
    const vaulechecker = new VauleChecker(['a', 'b'], ['a', 'd']) 
    expect(vaulechecker.VauleType()).toEqual("Expected b but found d")
}) 

test('checking weather multiple vaule in an array are not the same', () => {
    const vaulechecker = new VauleChecker(['a', 'b', 'c', 'd'], ['a', 'd', 'r', 'q'])  
    expect(vaulechecker.VauleType()).toEqual("Expected b c d but found d r q")
}) 

// These tests where add to catch null inputs 
test('testing weather null inputs create an error', () => {
    const vaulechecker = new VauleChecker(null, null)  
    expect(vaulechecker.VauleType()).toEqual("Nothing has been add")
})

// These tests where add to catch null inputs 
test('testing weather Nothing in any input will break', () => {
    const vaulechecker = new VauleChecker()  
    expect(vaulechecker.VauleType()).toEqual("Nothing has been add")
}) 

test('testing weather Nothing in any input will break', () => {
    const vaulechecker = new VauleChecker('a', null)  
    expect(vaulechecker.VauleType()).toEqual("Expected type string but found type object")
})