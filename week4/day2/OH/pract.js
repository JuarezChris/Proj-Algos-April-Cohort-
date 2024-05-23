/**
 * @param {string} val
 * @return {Object}
 */
var expect = function(val) {
    return {
        toBe: (val2) => {
            if(val === val2){
                return true
            }
            else{
                throw new Error('Not Equal')
            }
        },
        notToBe: (val2) => {
            if(val !== val2){
                return true
            }
            else {
                throw new Error('Equal')
            }
        }
    }
};

try {
    expect(5).toBe(5); // Passes
    console.log("5 is equal to 5");
  } catch (error) {
    console.error(error.message);
  }
  
  try {
    expect(5).notToBe(5); // Throws an error
  } catch (error) {
    console.error(error.message); // Fail. Expected 5 to be different from 5
  }

// console.log(expect(5).toBe(5)); // true
// console.log(expect(5).notToBe(5)); // throws "Equal"
