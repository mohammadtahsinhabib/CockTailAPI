function monthlySavings(income,living_cost)
{
    let savings = 0;
    income.forEach(element => {
        if (element >= 3000)
            savings += element * 0.8;
        else savings += element;
    });
    savings -= living_cost;

    if (savings >= 0) return savings;
    return "Earn More";
}


let income = [1000, 2000, 3000];
let living_cost = 5400;
console.log(monthlySavings(income, living_cost));