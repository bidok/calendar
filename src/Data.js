export const years = [2017, 2018, 2019, 2020, 2021, 2022];
const months = [
    "Січень",
    "Лютий",
    "Березень",
    "Квітень",
    "Травень",
    "Червень",
    "Липень",
    "Серпень",
    "Вересень",
    "Жовтень",
    "Листопад",
    "Грудень",
];
const weekDays = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Нд"];

const monthDays = [
    [
        new Date(),
        new Date(),
        new Date(),
        new Date(),
        new Date(),
        new Date(),
        new Date(),
    ],
    [
        new Date(),
        new Date(),
        new Date(),
        new Date(),
        new Date(),
        new Date(),
        new Date(),
    ],
    [
        new Date(),
        new Date(),
        new Date(),
        new Date(),
        new Date(),
        new Date(),
        new Date(),
    ],
    [
        new Date(),
        new Date(),
        new Date(),
        new Date(),
        new Date(),
        new Date(),
        new Date(),
    ],
    [
        new Date(),
        new Date(),
        new Date(),
        new Date(),
        new Date(),
        new Date(),
        new Date(),
    ],
];
export function getYears(){
    return years;
}
export function getMonths(){
    return months;
}
export function getWeekDays(){
    return weekDays;
}
export function getMonthDays(){
    return monthDays;
}
