// Day 2 if-else

function getGrade(Score) 
{
  if (Score>25 && Score<=30) {

      return 'A';

  } else if(Score>20 && Score<=25) 
  {

      return 'B';

  }  else if (Score>15 && Score<=20)
  {

        return 'C';

  }  else if (Score>10 && Score<=15)
  {

        return 'D';

  }  else if (Score>5 && Score<=10)
  {

        return 'E';

  }  else if (Score>=0 && Score<=5)
  {

        return 'F';

  }
}



    var Score = 11;
    var grade = getGrade(Score);
    console.log(grade);

