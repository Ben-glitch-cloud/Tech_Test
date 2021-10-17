const VauleChecker = require('./VauleChecker')  

test('Checking weather all vaules are of string', () => { 
    const vaulechecker = new VauleChecker('abc', 'abc')
    expect(vaulechecker.ValueType()).toEqual("no error")
}) 

test('Checking weather all vaules are of number', () => { 
    const vaulechecker = new VauleChecker(3, 3)
    expect(vaulechecker.ValueType()).toEqual("no error")
}) 

test('Checking weather different data types are cought by an error', () => {
    const vaulechecker = new VauleChecker('abc', 3) 
    expect(vaulechecker.ValueType()).toEqual("Expected type string but found type number")
})

test('Checking weather differnet data vaules of number are cought by an error', () => {
    const vaulechecker = new VauleChecker(1, 2)
    expect(vaulechecker.ValueType()).toEqual("Expected 1 but found 2")
}) 

test('Checking weather differnet data vaules of string are cought by an error', () => { 
    const vaulechecker = new VauleChecker('abc', 'ab')
    expect(vaulechecker.ValueType()).toEqual("Expected abc but found ab")
})  

test('Checking weather arrays have the same length ', () => {
    const vaulechecker = new VauleChecker(['a', 'b', 'c'], ['a', 'b', 'c']) 
    expect(vaulechecker.ValueType()).toEqual("no error")
}) 

test('Checking weather differnet array lengths are cought by an error', () => {
    const vaulechecker = new VauleChecker(['a', 'b', 'c'], ['a', 'b']) 
    expect(vaulechecker.ValueType()).toEqual("Expected array length 3 but found 2")
})


test('Checking weather an error is given if arrays have one different stored vaules', () => {
    const vaulechecker = new VauleChecker(['a', 'b'], ['a', 'd']) 
    expect(vaulechecker.ValueType()).toEqual("Expected b but found d")
}) 

test('Checking weather an error is given if arrays have many different stored vaules', () => {
    const vaulechecker = new VauleChecker(['a', 'b', 'c', 'd'], ['a', 'd', 'r', 'q'])  
    expect(vaulechecker.ValueType()).toEqual("Expected b c d but found d r q")
}) 

test('Testing weather null inputs create an error', () => {
    const vaulechecker = new VauleChecker(null, null)  
    expect(vaulechecker.ValueType()).toEqual("Nothing has been add")
})

test('testing weather Nothing in any input will break', () => {
    const vaulechecker = new VauleChecker()  
    expect(vaulechecker.ValueType()).toEqual("Nothing has been add")
}) 

test('testing weather Nothing and a string in any input will break', () => {
    const vaulechecker = new VauleChecker('a', null)  
    expect(vaulechecker.ValueType()).toEqual("Expected type string but found type object")
}) 


test('testing weather none familiar data type boolean vaule is given an error', () => {
    const vaulechecker = new VauleChecker(true, true)  
    expect(vaulechecker.ValueType()).toEqual("Unexpected data type boolean found, this program can only handle strings, numbers, and arrays")
}) 

test('testing weather none familiar data type undefined vaule is given an error', () => {
    const vaulechecker = new VauleChecker(undefined, undefined)  
    expect(vaulechecker.ValueType()).toEqual("Nothing has been add")
})