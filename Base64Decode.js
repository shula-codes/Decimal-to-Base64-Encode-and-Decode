var OriginalBase64 = "ByqNC7LZqg==";
var LoopVariable;
var ReferenceBase64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
var DecimalString = '';
var array = [];

let start = Date.now();

for (LoopVariable = 0; LoopVariable < (OriginalBase64.length); LoopVariable++) {
    let SecondCharacter = OriginalBase64.substring(LoopVariable, (LoopVariable + 1));
    let SecondLoopVariable;

    if (SecondCharacter != '=') {
        
        for (SecondLoopVariable = 0; SecondLoopVariable <= 64; SecondLoopVariable++) {
        let Character = ReferenceBase64.substring(SecondLoopVariable , (SecondLoopVariable + 1));
    


        if (SecondCharacter == Character) {
            array[LoopVariable] = parseInt(SecondLoopVariable);
        }
    }

} else { 
    array[LoopVariable] = 0;
}

}

console.log(array);
let arrayBinary = [];
let Binary24String = '';

for (let ThirdLoopVariable = 0; ThirdLoopVariable < array.length; ThirdLoopVariable++) {
    let BinaryString = '';
    let Value = array[ThirdLoopVariable];

        do { 
                if ((Value % 2) != 0) {
                    BinaryString = "1" + BinaryString; 
                } else {
                     BinaryString = "0" + BinaryString; 
                }
             Value = Math.trunc(Value / 2);
            } 
        while (Value != 0);

     let NewBinaryString = '';

     if (BinaryString.length < 6) {
        let FourthLoopVariable;
    
        let FifthLoopVariable;

         for (FourthLoopVariable = 0; FourthLoopVariable < (6 - BinaryString.length); FourthLoopVariable++) { 
             NewBinaryString = NewBinaryString + "0";
         }

         NewBinaryString = NewBinaryString + BinaryString;
     

     } else {
    
         NewBinaryString = BinaryString;
    
     }
    
    

    Binary24String = Binary24String + NewBinaryString;
    console.log(NewBinaryString)
   //console.log(BinaryString)
    
}

    do {
        let NewLength = Binary24String.length;
        var FinalString = '';
        var Ending = '';
        Ending = Binary24String.slice((NewLength - 8), NewLength);

        if (Ending = '00000000') {
            FinalString = FinalString + Binary24String.substring(0, (NewLength - 8));
        } 
        
        Binary24String = FinalString;
    } 
    while (Binary24String.slice((Binary24String.length - 8), Binary24String) == "00000000");
     

//console.log(Binary24String);
//console.log(FinalString);

console.log(parseInt(FinalString, 2));

console.log(Date.now() - start);

