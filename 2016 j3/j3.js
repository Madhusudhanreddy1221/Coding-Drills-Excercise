window.onsubmit=function HiddenPalindrome() {

var str1=document.getElementById("user_input_string").value;
//function to split the string into substrings,reverse and join
function is_Palindrome(str1) {
    var rev = str1.split("").reverse().join("");
    return str1 == rev;
}

//function to find the longest plaindrome in a given string
function LongestPlaindrome(str1){

    //intiializing max length to zero
    var maximum_length = 0;

    //for loop to iterate till the "i" matches the length of user entered string is matched
    for(var i=0; i < str1.length; i++)
    {
        //Removing one character from the string each time a for loop is ieterated and storing it in subsstring
        var subsstring = str1.substr(i, str1.length);

        for(var j=subsstring.length; j>=0; j--)
        {
            
            var sub_subs_str = subsstring.substr(0, j);
            //Condition to check if the sub sub string length is less than or equal to 1
            if (sub_subs_str.length <= 1)
                continue;
            //condition to check if the substring is palindrome
            if (is_Palindrome(sub_subs_str))
            {
                //condition to check if substring length is grater than maximum_length defined at the begining
                if (sub_subs_str.length > maximum_length)
                {
                    //overwriting the maximum_length to newest value
                    maximum_length = sub_subs_str.length;
                    console.log(maximum_length);
                    result.innerHTML=maximum_length;

                }
            }
        }
    }
}
console.log(LongestPlaindrome(str1));
return false;
}
