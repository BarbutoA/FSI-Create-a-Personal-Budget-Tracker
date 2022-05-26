let weeklyExpenses = 0
let monthlyExpenses = 0
let annualExpenses = 0

// Your Code Here
console.log(weeklyExpensesQuestions)

for(let i = 0; i < weeklyExpensesQuestions.length; i++){
    let answer = window.prompt(weeklyExpensesQuestions[i]);
    console.log(answer);
    weeklyExpenses = weeklyExpenses + answer
}