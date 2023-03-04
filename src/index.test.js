
import { describe } from "node:test";
import { countDown } from "../src/index.js";

describe('Проверка числа 3', ()=>{
    it("Отсчёт в обратном порядке с числа 3", () => expect(countDown(3)).toBe("321"));
})
describe('Проверка числа 10', ()=>{
    it("Отсчёт в обратном порядке с числа 10", () => expect(countDown(10)).toBe("10987654321"));
})
describe('Проверка на число меньше единицы', ()=>{
    it("Число меньше единицы", () => expect(countDown(0)).toBe("Число не может быть меньше единицы."));
})
describe('Проверка на число больше ста', ()=>{
    it("Число больше ста", () => expect(countDown(101)).toBe("Число не может быть больше ста."));
})
describe('Проверка на целое число', ()=>{
    it("Ввод нецелого числа", () => expect(countDown(1.23)).toBe("Ожидается целое число."));
})