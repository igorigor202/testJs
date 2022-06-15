let courses = [
    { name: "Courses in England", prices: [0, 100] },
    { name: "Courses in Germany", prices: [500, null] },
    { name: "Courses in Italy", prices: [100, 200] },
    { name: "Courses in Russia", prices: [null, 400] },
    { name: "Courses in China", prices: [50, 250] },
    { name: "Courses in USA", prices: [200, null] },
    { name: "Courses in Kazakhstan", prices: [56, 324] },
    { name: "Courses in France", prices: [null, null] },
];


let requiredRange1 = [null, 200];
let requiredRange2 = [100, 350];
let requiredRange3 = [200, null];

// Подходящие курсы для каждого варианта фильтра (крайние значения интервала включены в поиск)
function getCourses(requiredRange){

  function compare(array1, array2){
       // null не встречается ни в одном из массивов
       if ((array1.indexOf(null)== -1) && (array2.indexOf(null)== -1)){
           if (array1[0]>=array2[0] && array1[1]>=array2[1]){
               return true;
           } else {
               return false;
           }
       // null в обоих значениях второго массива
       } else if (array2[0] == null && array2[1] == null) {
           if (array1[0] > 0 ) {
               return false;
           } else {
               return true;
           }
       } else if(array1[0] == null){
            if (array2[0]==null){
                return array1[1] >= array2[1];
            } else if (array2[1]==null){
                return array1[1] >= array2[0];
            } else {
                return array1[1] >= array2[0];
            }
       } else if(array1[1] == null){
           if (array2[0]==null){
                return array1[0] <= array2[1];
            } else if(array2[1]==null){
                return array1[0] <= array2[0];
            } else {
               return array1[0] >= array2[0] && array1[0] <= array2[1];
           }
       } else {
           if (array2[0]==null){
               return array2[1] <= array1[1];
           } else{
               return array2[0] >= array1[0] && array2[0] <= array1[1];
           }
       }
  }

  let results = [];
  courses.forEach((each)=> {
    if (compare(requiredRange, each['prices'])){
        results.push(each);
    }
  })
  return results;
}


console.log (getCourses(requiredRange2));

// сортировка в порядке возрастания учитывая, что null является бесконеностью в конце интервала и 0 в начале
let sortCourses = courses.sort(function(a, b) {
  if (!a.prices[1] && !a.prices[1]) return 1;
  const intA =  a.prices[1]?a.prices[1]:Number.MAX_VALUE - a.prices[0]?a.prices[0]:Number.MIN_VALUE;
  const intB = b.prices[1]?b.prices[1]:Number.MAX_VALUE - b.prices[0]?b.prices[0]:Number.MIN_VALUE;
  return intA - intB;
});

console.log(sortCourses);
