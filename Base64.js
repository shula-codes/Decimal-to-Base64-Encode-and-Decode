var OriginalInt = 2017110112000426;
var BinaryString = ''; //Declaring an empty string so we can build our binary

if ((OriginalInt.length % 8) != 0) { //Testing if the length of the original number is a multiple of 8
    BinaryString = BinaryString + 0; //If it is not a multiple of 8, a zero is added
}
do {
   if ((OriginalInt % 2) != 0) {
        BinaryString = "1" + BinaryString; 
   } else {
       BinaryString = "0" + BinaryString; 
   }
   OriginalInt = Math.trunc(OriginalInt / 2);
} 
while (OriginalInt != 0);
//Conversion of a decimal number into binary

console.log(BinaryString);

var length = BinaryString.length;
var NumBits = Math.round(length / 8) * 8;

var k;
var l;
var NewBinaryString = '';

for (k = 0; k <= (NumBits - length); k++) { 
    NewBinaryString = NewBinaryString + "0";
}

for (l = 0; l < length; l++) {
    NewBinaryString = NewBinaryString + BinaryString.substring((l - 1), l);
}
//Adding zeroes before the binary string in order to make it a multiple of 8

do {
    if ((NewBinaryString.length % 6) != 0) {
        NewBinaryString = NewBinaryString + '00000000' + '00000000';
   }
}
while ((NewBinaryString.length % 6) != 0);
//Adding zeroes after the binary string in order to make it a multiple of 6

//console.log(NewBinaryString); - Outputting the binary string to check the values are correct

var BinaryGroupsArray = ["no1", "no2", "no3"]; //declaring a default array for binary in groups of 6
var x;

for (x = 0; x <= (NewBinaryString.length/6); x++) {
    BinaryGroupsArray[x] = NewBinaryString.slice(((x - 1) * 6), ((x - 1) * 6 + 6)); //Sorting the binary into groups of 6
    
}

var y;
var DecimalString = '';
var Base64 = '';

var b64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="; //reference for Base64 conversion

for (y = 1; y <= (NewBinaryString.length/6); y++) {
            var num = parseInt(BinaryGroupsArray[y], 2); //Converting the Binary back into Base10
            DecimalString = DecimalString + ' ' + num;
            if (num != 0) {
                Base64 = Base64 + b64.charAt(num); //Using our reference convert Base10 into Base64
            } else {
                Base64 = Base64 + '='; 
            }     
            

}

console.log(DecimalString);
console.log(Base64);


