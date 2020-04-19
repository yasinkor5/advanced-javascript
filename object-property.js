const students = [
    {id: 33, name:'yasin arafat'},
    {id: 44, name:'ih emon'},
    {id: 31, name:'abu taher'},
    {id: 76, name:'nur hossain'},
];
const names = students.map(s => s.name);
const ids = students.map(s => s.id);
const bigger = students.find( s => s.id>40);
console.log(bigger);