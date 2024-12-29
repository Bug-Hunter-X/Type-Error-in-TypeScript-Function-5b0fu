function add(a: number, b: number): number {
  return a + b;
}

function isNumber(value: any): value is number {
  return typeof value === 'number';
}

function addSafe(a: number, b: any): number {
  if (isNumber(b)) {
    return a + b;
  } else {
    return a; // or throw an error, handle appropriately 
  }
}

let result1 = add(1, 2); // Correct: 3
let result2 = addSafe(1, "2"); // Safe handling: 1
let result3 = addSafe(1, 2); // Safe handling: 3