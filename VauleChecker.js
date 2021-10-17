
class VauleChecker
{   
    constructor(Expected=null, Actual=null)
    {
        this.Expected = Expected 
        this.Actual = Actual
    } 

    // The VauleType() method finds out weather the inputs Expected and Actual vaules are of the same type.

    VauleType() {     

            return typeof this.Expected == typeof this.Actual ? this.ExactType() : `Expected type ${typeof this.Expected} but found type ${typeof this.Actual}`
    }  

    // The ExactType method sort's the vaules into three area's number, string and objects.

    ExactType() {   
       switch (`${typeof this.Expected}`) {
           case 'number': 
           case 'string':
                return this.ExactVaule()
               break; 
            case 'object':   
                return this.ArrayLength()
            break;  
            default:
       }
    }   

    // ExactVaule method finds out weather the two inputs Expected and Actural have the exact same input within string or number.

    ExactVaule()
    {
        return this.Expected == this.Actual ? "no error" : `Expected ${this.Expected} but found ${this.Actual}`
    }
    
    //ArrayLength has two purpues, the first is to catch any object that might not be arrays. The second is to see wether both array are the same length or not.   

    ArrayLength() {  

        if(this.Expected === null) { return 'Nothing has been add' }   

        return this.Expected.length === this.Actual.length ? this.Arraycontent() : `Expected array length ${this.Expected.length} but found ${this.Actual.length}`  
      
    }

    // The Arraycontent method looks through both Expected and Actual to see weather there are any discrepancies.

    Arraycontent()
    {   
        let Expected_array = [];
        let Actual_array = [];

        for (let index = 0; index < this.Expected.length; index++) {
            if(this.Expected[index] !== this.Actual[index])
            {
                Expected_array.push(this.Expected[index])
                Actual_array.push(this.Actual[index])
            }
        }  
        
        return !Expected_array.length ? 'no error' : `Expected ${Expected_array.join(" ")} but found ${Actual_array.join(" ")}`
    } 
}  

module.exports = VauleChecker  





