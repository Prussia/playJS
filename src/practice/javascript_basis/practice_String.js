//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Numbers_and_dates
// 'use strict';

console.log("**************************************************************");
console.log("Text formatting");
console.log("**************************************************************");

console.log("~~~String literals");
var foo = "foo";
var bar = new String("bar");

console.log("\"foo\" is " + (typeof foo));
console.log("new String(\"bar\") is " + (typeof bar));
console.log("bar instanceof String is " + (bar instanceof String));

console.log("**************************************************************");
console.log("Internationalization");
console.log("**************************************************************");

console.log("The Intl object is the namespace for the ECMAScript Internationalization API, which provides language sensitive string comparison, number formatting, and date and time formatting. \nThe constructors for Collator, NumberFormat, and DateTimeFormat objects are properties of the Intl object.");
console.log("**************************************************************");
console.log("~~~Number formatting");
var gasPrice = new Intl.NumberFormat("en-US",
                        { style: "currency", currency: "USD",
                          minimumFractionDigits: 3 });
 
console.log(gasPrice.format(5.259)); // $5.259

var hanDecimalRMBInChina = new Intl.NumberFormat("zh-CN-u-nu-hanidec",
                        { style: "currency", currency: "CNY" });
 
console.log(hanDecimalRMBInChina.format(1314.25)); // ￥ 一,三一四.二五
console.log("~~~Collation");
var names = ["Hochberg", "Hönigswald", "Holzman"];
 
var germanPhonebook = new Intl.Collator("de-DE-u-co-phonebk");
 
// as if sorting ["Hochberg", "Hoenigswald", "Holzman"]:
console.log(names.sort(germanPhonebook.compare).join(", "));
// logs "Hochberg, Hönigswald, Holzman"









