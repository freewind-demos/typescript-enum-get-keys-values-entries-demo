enum MyEnum {
  aaa = 111,
  bbb = 'BBB',
  C00 = ''
}

const keys: string[] = Object.keys(MyEnum).filter(key => isNaN(Number(key)));
const values = keys.map(key => MyEnum[key as keyof MyEnum])
const entries = keys.map(key => [key, MyEnum[key as keyof MyEnum]])

console.log("### keys", keys);
console.log("### values", values);
console.log("### entries", entries);
