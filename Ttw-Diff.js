console.log(1);STtwUtilBuffer.iconv=require("iconv-lite");global.Lib.Ttw.importTll("./node_modules/exes/diff.dll");
//----------------------------------------------------------------------------------------------------;
var fileNm = "Ttw-Diff.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

var r0 = global.Lib.Ttw.diff.extract__Identifier( "./resource/pattern1-a.html", "./resource/pattern1-b.html", "((", "))" );
var r1 = global.Lib.Ttw.diff.extract__Identifier( "./resource/pattern2-a.html", "./resource/pattern2-b.html", "((", "))" );

console.log( r0 );
console.log( r1 );

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;