function getGrade(score)
{
    if (score >= 0 && score <= 39) return 'C';
    else if (score <= 59) return 'B';
    else if (score <= 69) return 'A-';
    else if (score <= 79) return 'A';
    else if (score <= 100) return 'A+';
    else return 'Invalid score';
}

console.log(getGrade(85));
