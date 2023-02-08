// (!) Рекурсия – это приём программирования, полезный в ситуациях
// когда задача может быть естественно разделена на несколько аналогичных,
// но более простых задач. Или когда задача может быть упрощена до
// несложных действий плюс простой вариант той же задачи. Или, как мы скоро
// увидим, для работы с определёнными структурами данных;

// Рекурсия что-то описывается через самого себя, содержит себя в своем описании;


// Задача по возведению числа в степень

// Решение через цикл:

function pow(x, n) {
    let result = 1; 

    for (let i=0; i < n; i++) {
        result *= x;
        // result = x * result;
    }

    return result;
}

// Решение через рекурсию:

function pow(x, n) {
    if (n === 1) { // база рекурсии
        return x;
    } else {
        return x * pow(x, n - 1); // шаг рекурсии
    }
}


// глубина рекурсии в данном примере === n.

pow(2, 1);
pow(2, 2);
pow(2, 3);
pow(2, 4);

// База рекурсии - это случай, который приводит к завершению функции (термальный случай);
// Это точка, в которой нужно отановиться. Приводит к завершению функции;

// Шаг рекурсии - запуск вложенной функции с другим значением (углубление);

// Глубина рекурсии - это общее количество вложенных вызовов вместе с самым первым;

// (!) Методы объктов Object.values() (values - значения);

// const object1 = {
//     a: 'somestring',
//     b: 42,
//     c: false
// };

// console.log(Object.values(object1));

// Задача. Необходимо вывести средний показатель прогресса прохождения курсов у всех студентов.

// (!) Метод объектов Array.isArray()
// Метод Array.isArray() возвращает true, если объект является массивом и
// false, если он массивом не является;

// let students = {
//     js: [{
//         name: 'John',
//         progress: 100
//     }, {
//         name: 'Ivan',
//         progress: 60
//     }],

//     html: {
//         basic: [{
//             name: 'Peter',
//             progress: 20
//         }, {
//             name: 'Ann',
//             progress: 18
//         }],

//         pro: [{
//             name: 'Sam',
//             progress: 10
//         }],

//         semi: {
//             students: [{
//                 name: 'Test',
//                 progress: 100
//             }]
//         }
//     }
// };

// function getTotalProgressByIteration(data) {
//     let total = 0;
//     let students = 0;

//     for (let course of Object.values(data)) {
//         if (Array.isArray(course)) {
//             students += course.length;

//             for (let i = 0; i < course.length; i++) {
//                 total += course[i].progress;
//             }
//         } else {
//             for (let subCourse of Object.values(course)) {
//                 students += subCourse.length;
                
//                 for (let i = 0; i < subCourse.length; i++) {
//                     total += subCourse[i].progress;
//                 }
//             }
//         }
//     }

//     return total / students;
// }

// console.log(getTotalProgressByIteration(students));

// Функция ломается, если добавить объекты как sami

// Рекурсия:

// function getTotalProgressByRecursion(data) {
//     if (Array.isArray(data)) {
//         let total = 0;

//         for (let i = 0; i < data.length; i++) {
//             total += data[i].progress;
//         }

//         return [total, data.length];
//     } else {
//         let total = [0, 0];

//         for (let subData of Object.values(data)) {
//             const subDataArr = getTotalProgressByRecursion (subData);
//             total[0] += subDataArr[0];
//             total[1] += subDataArr[1];
//         }

//         return total;
//     }
// }

// const result = getTotalProgressByRecursion(students);

// console.log(result[0]/result[1]);

// Задача 16. Напишите функцию, которая вычисляет факториал.

// n! = n * (n - 1) * (n - 2) * ...*1 - это общая формула

// Примеры значений для разных n:

// 1! = 1
// 2! = 2 * 1 = 2
// 3! = 3 * 2 * 1 = 6
// 4! = 4 * 3 * 2 * 1 = 24
// 5! = 5 * 4 * 3 * 2 * 1 = 120

function factorial(n) {
    if (typeof(n) !== 'number' || !Number.isInteger(n) || n < 0) {
        return "Ошибка, проверьте данные";
    }

    if (n >= 1) {
        return n * factorial(n - 1);
    } else {
        return 1;
    }
}

console.log(factorial(5));

// Number.isInteger - проверка является ли число дробным