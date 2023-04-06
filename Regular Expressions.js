// // Regular expressions are patterns used to match character combinations in strings. In JavaScript, regular expressions are also objects

// // These patterns are used with the exec() and test() methods of RegExp, and with the match(), matchAll(), replace(), replaceAll(), search(), and split() methods of String

// // the test keyword picks out exact matches in a page or string
// const str =
//   "I love JavaScript These patterns are used with the exec() and test() methods of RegExp, RegExp and with the match(), matchAll(), replace(), replaceAll(), search(), and split() methods of String love is good ";
// const pattern = /RegExp/;
// const patternl = new RegExp("love is good");
// const nio = "malizah";
// const result = patternl.test(str);
// console.log(result);

// let patterno = "lovef";
// let flag = "love";
// let regEx = /z*j/;
// const hoikl = regEx.test(str);
// console.log(hoikl);

// // Here are some ponits to note yiu canb create a regular expresion in two ways 1) by using the new keyword eg const pattern = new RegExp('love') this will help us find the word love inside a string. Another way to create a regular expression is by using the /   / symbols eg const pattern = /love/. Creating a regular expression means creatting some characters or strings that can be searched in another string or page.

// // let gok =
// //   "my name is tope i am 29 yers 29 old. i will be 30 soon fact and figures js and content writing is myu job";

// // const sercher = /29/;

// // let kilo = sercher.match(gok);
// // console.log(kilo);

// // The match() keyword, this returns serch matches as an array
// const strk =
//   "love love love love love love love love love love love love love love love JavaScript";
// const patternlo = /lo/;
// const resultoi = strk.match(patternlo);
// console.log(resultoi);

// //The search() keyword
// // this keyword is used to know if a word matches with page or text. It will return the index of the first time the search is found if the text is found. Otherwise, if the text is not found, it will return -1
// const st =
//   "love love love love love love love love love love love love love love love JavaScript";
// const patte = /JavaScjj/;
// const resul = st.search(patte);
// console.log(resul);

// const txt =
//   "Python is the most beautiful language that a human begin has ever created.  I recommend python for a first programming language";

// matchReplaced = txt.replace(/Python| python|ever/g, "JavaScript");
// console.log(matchReplaced);

const replacer = "tope is a boy in jss  1 c he is tall and a lover of  jehovah";

const seeHowToReplace = replacer.replace(
  /he|tope|boy|in|jss|tall|lover|jehovah| tall|1|of|is|and |a| is| c /,
  "Victor"
);

// the use of g here creates a better search

console.log(seeHowToReplace);
