// Базовый класс "Фигура"// полиморфизм
class Shape {
    constructor() {}

    // Метод для вычисления площади фигуры
    calculateArea() {
        // Реализация по умолчанию для базового класса
        return 0;
    }
}

// Подкласс "Прямоугольник", наследуется от "Фигуры"
class Rectangle extends Shape {
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }

    // Переопределение метода calculateArea() для прямоугольника
    calculateArea() {
        return this.width * this.height;
    }
}

// Подкласс "Круг", наследуется от "Фигуры"
class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }

    // Переопределение метода calculateArea() для круга
    calculateArea() {
        return Math.PI * this.radius ** 2;
    }
}

// Создаем экземпляры объектов различных типов
const rectangle = new Rectangle(5, 10);
const circle = new Circle(7);

// Вызываем метод calculateArea() для каждого объекта
console.log(rectangle.calculateArea()); // Output: 50 (5 * 10)
console.log(circle.calculateArea()); // Output: ~153.94 (pi * 7^2)
console.log(circle.__proto__); //
