// The Challenge

// The aim of this exercise is to demonstrate your problem solving and understanding of JavaScript by implementing something found in every unit testing tool - an "assertEquals" method. 

// Notes: This project has an add funaction to find and call out inputs that are not familiar to the program. 


class VauleChecker
{   
    constructor(Expected=null, Actual=null)
    {
        this.Expected = Expected 
        this.Actual = Actual
    } 

    // The ValueType() method finds out weather the inputs Expected and Actual vaules are of the same type.

    ValueType() {     

            return typeof this.Expected == typeof this.Actual ? this.ExactType() : `Expected type ${typeof this.Expected} but found type ${typeof this.Actual}`
    }  

    // The ExactType method sort's the vaules into three area's number, string and objects.

    ExactType() {   
       switch (`${typeof this.Expected}`) {
           case 'number': 
           case 'string':
                return this.ExactValue()
               break; 
            case 'object':   
                return this.ArrayLength()
            break;   
            default: 
                return `Unexpected data type ${typeof this.Expected} found, this program can only handle strings, numbers, and arrays`
       }
    }   

    // ExactVaule method finds out weather the two inputs Expected and Actural have the exact same input within string or number.

    ExactValue()
    {
        return this.Expected == this.Actual ? "no error" : `Expected ${this.Expected} but found ${this.Actual}`
    }
    
    //ArrayLength has two purpues, the first is to catch any object that might not be arrays. The second is to see wether both array are the same length or not.   

    ArrayLength() {  

        if(this.Expected === null) { return 'Nothing has been add' }   

        return this.Expected.length === this.Actual.length ? this.ArrayContent() : `Expected array length ${this.Expected.length} but found ${this.Actual.length}`  
      
    }

    // The Arraycontent method looks through both Expected and Actual to see weather there are any discrepancies.

    ArrayContent()
    {   
        let ExpectedArray = [];
        let ActualArray = [];

        for (let index = 0; index < this.Expected.length; index++) {
            if(this.Expected[index] !== this.Actual[index])
            {
                ExpectedArray.push(this.Expected[index])
                ActualArray.push(this.Actual[index])
            }
        }  
        
        return !ExpectedArray.length ? 'no error' : `Expected ${ExpectedArray.join(" ")} but found ${ActualArray.join(" ")}`
    } 
}  

module.exports = VauleChecker  





