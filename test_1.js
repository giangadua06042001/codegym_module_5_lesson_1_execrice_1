// function test(x = "hello") {
//     console.log(x)
// }
//
// test('hahahah')
//arrow là :
// __________________________cách tạo arrow;___________________________________________________________________
// let test1 = (x = 'hello') => {
//     console.log(x)
// }
// test1()
//nó không cần xử lí logic
// let check = () => 5;
// console.log(check())
//có thể xử lí một số logic , khi ngoặc nhọn xảy ra thì bắt buộc phải dùng retuen lấy giá trị ra
// let check1=()=>{
//     return 5
// }
//_______________________________ hàm callback___________________________________________________________________
// function doHomework(subject, callback) {
//     console.log(`Bắt đầu làm bài tập ${subject}.`);
//     callback();
// }
//
// doHomework('math', function() {
//     console.log('Làm bài tập xong!');
// });

// function doHomework(subject, callback) {
//     setTimeout(function () {
//         console.log(`Bắt đầu làm bài tập ${subject}.`);
//         callback();
//     }, 5000);
//
// }
//
// function alertFinished() {
//     console.log('Làm bài tập xong!');
// }
//
// doHomework('Toán', alertFinished);
//___________________________destructuring assignment_____________________________________
//cách viết thường
// let x=[1,3,5,22];
// let y=x;
// y.push(25)
// console.log(x)
// console.log(y)
//cách viết của destructuring assignment
// let b=[1,3,5,22];
// let a=[...b,25]
// let c=b
// c.push(15);
// console.log(b);
// console.log(a)
// console.log(c)
//cách viết thường
// let obj = {
//     name: "Cong",
//     age: 26,
//     salary: 5000
// }
// let obj1 = obj;
// obj1.age = 20;
// console.log(obj)
// console.log(obj1)
//cách viết của destructuring assignment
// let obj2 = {
//     name: "Cong",
//     age: 26,
//     salary: 5000
// }
// //tránh tham chiếu
// let obj3={...obj2,age:22,address:'bac giang'}
// console.log(obj2)
// console.log(obj3)
// let {salary}=obj2;
// console.log(salary)
//______________________________Xử lí bất đồng bộ____________________________________________________________
//cách 1
// console.log('Hung dao nay hoi luoi');
// setTimeout(() => {
//     console.log('Hung luc truoc cham lam')
//     console.log('Hy vong Hung se cham hon')
// }, 5000)
//cách 2
console.log('Cho làm quen ')
let prom = new Promise((resolve,reject)=> {
    //reject xử lí lỗi khi xảy ra
  setTimeout(()=>{
      console.log("Chưa đủ trình")
      resolve()

  },5000)
})
prom.then(()=>{
    console.log("Vậy cũng nói được")
})

