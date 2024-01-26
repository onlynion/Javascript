/**
 * 1. No keyword can be use as a variable name
 * Example : var false = 45 ; var var = 50 ; ===> Those are invalid
 */

/**
 * 2. There can not be any space of gap in variable name
 * Example: var is happy = false ; ===> This is invalid
 *          var ishappy = false ; ===> This is valid
 */

/** 3. There can not be any quotation in variable name
 * Example: var "address" = "kochukhet" ===> This is invalid
 *          var address = "kochukhet"   ===> This is valid
 */

/** 4. Variable name can not be start with a number
 * Example: var 3money = 55 ; ===> This is invalid 
 *          var money3 = 55 ; ===> This is valid
 */

/** 5. Variable name is case sensitive
 * Example: var address = "dhaka" ;
 *          var Address = "dhaka" ;
 *          var ADDRESS = "dhaka" ;
 *          var addRess = "dhaka" ;
 *          var ADDress = "dhaka" ;
 * those all variable names are same in above but they are different variable because their's variable name spelling are different
 */

/** 6. How to write a long variable name
 * var my current address = "khulna" ; ===> This is invalid
 * var mycurrentaddress = "khulna" ; ===> This is not easy to understand 
 * var my_current_address = "khulna" ; ===> This is valid and it is called snake case 
 * var myCurrentAddress = "khulna" ; ===> This is valid and it is called camel case >>>> This is preferable
 * var MyCurrentAddress = "khulna" ; ===> This is valid and it is called pascal case
 */

/** 7. There are some words that can not use as a variable name in javascript and those words are called keyword
 *  javascript keywords :
 * ==> keywords are a set of reserved words
 * ==> can not be used as names of functions, labels, or variables
 * ==> visit https://www.w3schools.com/js/js_reserved.asp to see more
 * ==> keywords are case sensitive you can not write it in capital letter
 */