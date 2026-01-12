let i;
function countdown(i) {
   

 if (i <= 0) {       // уберём условие, и будет бесконечное время выполнения
       return (i);   //
    } else           //
   {
       console.log(i);
    return ( countdown (i - 1))
    }
}

console.log(countdown(10))





















