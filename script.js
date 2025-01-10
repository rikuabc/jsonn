console.log("読み込みテスト");

fetch("test.txt")
    .then((data)=>data.test())
    .then((res)=>console.log(res));