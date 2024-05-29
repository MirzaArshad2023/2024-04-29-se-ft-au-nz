function Add(req, res)
{
    let number1 = parseInt(req.query.num1);
    let number2 = parseInt(req.query.num2);
    let result = number1 + number2;
    res.status(200)
    res.send({res: result})
}
function Multiply(req, res)
{
    let number1 = parseInt(req.query.num1);
    let number2 = parseInt(req.query.num2);
    let result = number1 * number2;
    res.status(200)
    res.send({res: result})
}

module.exports = {Add, Multiply}