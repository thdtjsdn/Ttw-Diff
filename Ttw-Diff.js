console.log(1);STtwUtilBuffer.iconv=require("iconv-lite");global.Lib.Ttw.importTll("./native_modules/Diff.dll");
//----------------------------------------------------------------------------------------------------;
var fileNm = "Ttw-Diff.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/*/
var r0 = global.differ.extract__Identifier__FilePath( "./resource/pattern1-a.html", "./resource/pattern1-b.html", "((", "))" );
var r1 = global.differ.extract__Identifier__FilePath( "./resource/pattern2-a.html", "./resource/pattern2-b.html", "((", "))" );
var r2 = global.differ.extract__Identifier( SUtilFsReadStream.getFile( "./resource/pattern1-a.html" ).toString(), SUtilFsReadStream.getFile( "./resource/pattern1-b.html" ).toString(), "((", "))" );
var r3 = global.differ.extract__Identifier( SUtilFsReadStream.getFile( "./resource/pattern2-a.html" ).toString(), SUtilFsReadStream.getFile( "./resource/pattern2-b.html" ).toString(), "((", "))" );

console.log( r0 );
console.log( r1 );
console.log( r2 );
console.log( r3 );
//*/

var s0 = SUtilFsReadStream.getFile( "./taobao/template.html" ).toString( "UTF8" ).trim();
var s1 = SUtilFsReadStream.getFile( "./taobao/1.html" ).toString( "UTF8" ).trim();
debugger;
var r4 = global.differ.extract__Identifier( s0, s1, "（（", "））" );
console.log( r4 );

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;