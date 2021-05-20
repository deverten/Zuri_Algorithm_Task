const convertFahrToCelcius = function (parameter) { 
    let numberCheck = Number(parameter);
    if (isNaN(numberCheck)) {
        let stringifyVal = JSON.stringify(parameter);
        let toStringCall = Object.prototype.toString.call(parameter);
        return `${stringifyVal} is not a valid number but a/an ${toStringCall}`;
    } 
    else if (typeof numberCheck == 'number') {
      let celciusConv = (numberCheck- 32) * 5 / 9;
      let celcius = celciusConv.toFixed(4);
      return celcius;
        
    }
    else {
        return `${JSON.stringify(parameter)} is not a valid number but a/an ${typeof parameter}.`
              
    }
    }
 

 console.log(convertFahrToCelcius());

 function checkYuGiOh(n) {
    try {
        let arr = [...new Array(Number(n))].map((_value, index) => {
        
          index++;
          
          const [x, y, z] = ["yu", "gi", "oh"];
          //check for all
          if (index % 2 === 0 && index % 3 === 0 && index % 5 === 0)
            return x + "-" + y + "-" + z;
          
          else if (index % 2 === 0 && index % 3 == 0) return x + "-" + y;
          else if (index % 2 === 0 && index % 5 === 0) return x + "-" + z;
          else if (index % 3 === 0 && index % 5 === 0) return y + "-" + z;
        
          else if (index % 2 === 0) return x;
          else if (index % 3 === 0) return y;
          else if (index % 5 === 0) return z;
          
          return index;
        });
        return arr;
      } catch (err) {
        return `'${n}' is an invalid parameter`;
      }
    }

    console.log(checkYuGiOh(100));