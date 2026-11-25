/* MODULE 1: data - the workers list and categories */
const WORKERS = [
  {id:1, name:"Maria Santos", role:"Math & Physics Tutor", cat:"Tutors", rating:5, reviews:48, price:"₱250", unit:"hour", verified:true},
  {id:2, name:"Jarel Cruz", role:"Logo & Poster Designer", cat:"Designers", rating:5, reviews:31, price:"₱400", unit:"design", verified:true},
  {id:3, name:"Angela Reyes", role:"Java & Python Programmer", cat:"Programmers", rating:4, reviews:22, price:"₱500", unit:"project", verified:true},
  {id:4, name:"Paolo Garcia", role:"English Essay Editor", cat:"Tutors", rating:4, reviews:15, price:"₱150", unit:"page", verified:false},
  {id:5, name:"Kim Dela Cruz", role:"Video & Photo Editor", cat:"Designers", rating:5, reviews:19, price:"₱350", unit:"edit", verified:true},
  {id:6, name:"Rico Mendoza", role:"Web Developer", cat:"Programmers", rating:4, reviews:9, price:"₱800", unit:"page", verified:false},
  {id:7, name:"Lea Bautista", role:"Printing & Binding", cat:"Others", rating:5, reviews:27, price:"₱5", unit:"page", verified:true}
];
const CATEGORIES = ["All","Tutors","Designers","Programmers","Others"];