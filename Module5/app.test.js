const request = require('supertest');
const app = require('./app');

describe('Calculator Routes', () => {
    // generate some random numbers to test the calculator
    let number1 = Math.floor(Math.random() * 10);
    let number2 = Math.floor(Math.random() * 10);
    test('GET /calculator/add => sum of numbers', () => {
        return request(app)
            .get(`/calculator/add?num1=${number1}&num2=${number2}`)
            .expect('Content-Type', /json/)
            .expect(200)
            .then((response) => {
                expect(response.body).toEqual({
                    res: (number1 + number2)
                });
            });
    });

    test('GET /calculator/Multiply => Multiplication of numbers', () => {
        return request(app)
            .get(`/calculator/Multiply?num1=${number1}&num2=${number2}`)
            .expect('Content-Type', /json/)
            .expect(200)
            .then((response) => {
                expect(response.body).toEqual({
                    res: (number1 * number2)
                });
            });
    });

});