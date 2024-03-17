# js-lab-164
### Lab 164 ES6: ฟังก์ชัน topSalaries(salaries)
จงเขียนฟังก์ชัน topSalaries(salaries) เพื่อ return ชื่อคนที่มี salary สูงสุด
- ถ้า salaries เป็น empty object ให้ return null
- ถ้ามีคนที่ได้ salary มากสุดให้ return ชื่อคนใดคนหนึ่ง

```JavaScript
let salaries1 = {
  John: 100,
  Pete: 300,
  Mary: 250
};
console.log(topSalaries(salaries1)); // Pete

let salaries2 = {};
console.log(topSalaries(salaries2)); // null
```
