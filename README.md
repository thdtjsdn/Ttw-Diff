# Ttw-Diff
===================

* 기본 Diff 기능
* 템플릿문서 기반의 데이터 추출을 위한 유틸

-------------
Example
-------------

> **Note:**
>
> var r0 = global.Lib.Ttw.diff.extract__Identifier( "./resource/pattern1-a.html", "./resource/pattern1-b.html", "((", "))" );
> var r1 = global.Lib.Ttw.diff.extract__Identifier( "./resource/pattern2-a.html", "./resource/pattern2-b.html", "((", "))" );
>
> console.log( r0 );
>	Object {web.asd: "job"}
>
> console.log( r1 );
>	Object {twitter.message: "네이버 메인에서 다양한 정보와 유용한 컨텐츠를 만나 보세요", web.asd: "job"}
>
