const ages = [12, 74, 28, 29, 38];
const ages2 = [38, 29, 47, 27];
const ages3 = [338, 29, 47, 27];
const allAges = ages.concat(ages2).concat([5]).concat(ages3);
const allAges2 = [...ages, ...ages2, 5, ...ages3];
console.log(allAges2);