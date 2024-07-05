// จงเขียนฟังก์ชัน topSalaries(salaries) เพื่อ return ชื่อคนที่มี salary สูงสุด

// ถ้า salaries เป็น empty object ให้ return null
// ถ้ามีคนที่ได้ salary มากสุดให้ return ชื่อคนใดคนหนึ่ง

function topSalaries(salaries) {
  salaryValue = Object.values(salaries);
  if (salaryValue.length === 0) {
    return null;
  }

  let topSalary = Math.max(...salaryValue);
  let topName = null;
  for (let [name, salary] of Object.entries(salaries)) {
    if (salary === topSalary) {
      topSalary = salary;
      topName = name;
    }
  }
  return topName;
}

let salaries1 = {
  John: 100,
  Pete: 300,
  Mary: 250,
};
console.log(topSalaries(salaries1)); // Pete

let salaries2 = {};
console.log(topSalaries(salaries2)); // null
