// // Number
// var num: number = 1
// console.log('num', num)
// //  除了支持十进制和十六进制字面量，TypeScript还支持ECMAScript 2015中引入的二进制和八进制字面量。
// var num1: number = 10 // 10进制
// var num2: number = 0x000a // 16进制
// var num3: number = 0b1010 // 2进制
// var num4: number = 0o0012 //  8进制
// console.log(num1, num2, num3, num4) // 10 10 10 10
// // Boolean
// var b: boolean = false
// console.log('b', b)
// // String
// var personName: string = 'Cloud'
// //使用typescript 点方法时可以给出字符串方法的提示
// // toLowerCase() 会将调用该方法的字符串值转为小写形式，并返回
// var lowerCaseName: string = personName.toLowerCase()
// // 同样在typescript中可以使用模板字符串
// 它可以定义多行文本和内嵌表达式。 这种字符串是被反引号包围（`），并且以${ expr }这种形式嵌入表达式
// var introduce: string = `my name is ${personName}`
// console.log('personName', personName, lowerCaseName, introduce) // cloud
// // 数组
// // 有两种方式可以定义数组。
// // 第一种，可以在元素类型后面接上[]，表示由此类型元素组成的一个数组：
// var arr: number[] = [1, 3, 5]
// // 第二种方式是使用数组泛型，Array<元素类型>：
// var arr1: Array<number> = [2, 4, 6]
// console.log('arr', arr, arr1)
// // 元组 Tuple
// // var arr: number[] = [1, 3, 5]  数组中元素类型要都时number类型
// // 而元组类型表示一个已经元素数量和类型的数组,各元素的类型可以不同
// var tup: [string, number] = ['cloud', 18]
// // tup = [10,"cloud"] // error 报错
// 枚举
// enum ColorType {
//   Red,
//   Green = 3,
//   Blue
// }
// var c: ColorType = ColorType.Red  // 0
// var c: ColorType = ColorType.Blue  // 4
// console.log(c)
// 枚举类型提供的一个便利是你可以由枚举的值得到它的名字。 例如，我们知道数值为2，但是不确定它映射到Color里的哪个名字，我们可以查找相应的名字：
// enum Color {
//   Red = 1,
//   Green,
//   Blue
// }
// var colorName: string = Color[2]
// console.log(colorName) // 显示'Green'因为上面代码里它的值是2
// 任意值 any
// var a: any = 1
// a = "cloud"
// a = false
// 在对现有代码进行改写的时候，any类型是十分有用的，它允许你在编译时可选择地包含或移除类型检查。
// // 当你只知道一部分数据的类型时，any类型也是有用的。 比如，你有一个数组，它包含了不同的类型的数据：
// let list: any[] = [1, false, 'cloud']
// console.log(list[1])
// // 空值
// // 某种程度上来说，void类型像是与any类型相反，它表示没有任何类型。 当一个函数没有返回值时，你通常会见到其返回值类型是void：
// function func(): void {
//   console.log('hello')
// }
// // 声明一个void类型的变量没有什么大用，因为你只能为它赋予undefined和null：
// let unusable: void = null
// // Null 和 Undefined
// // TypeScript里，undefined和null两者各自有自己的类型分别叫做undefined和null。 和void相似，它们的本身的类型用处不是很大：
// let u: undefined = undefined
// let n: null = null
// 类型断言
// 类型断言有两种形式。 其一是“尖括号”语法：
// let str1: any = 'hello world'
// let strLength: number = (<string>str1).length
// console.log(strLength)
// 另一个为as语法：
// let str2: any = 'hello world'
// let strLength1: number = (str2 as string).length
// console.log(strLength1)
// 两种形式是等价的。 至于使用哪个大多数情况下是凭个人喜好；然而，当你在TypeScript里使用JSX时，只有as语法断言是被允许的。
// 对象解构情况下的变量赋值
function add(_a) {
    var first = _a.first, second = _a.second;
    return first + second;
}
var total = add({ first: 1, second: 2 });
console.log('total', total);
