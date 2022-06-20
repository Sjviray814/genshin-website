function averageDamage(high, low, cr){
    let sum = 0;
    let tries = 1000;
    
    for(let i = 0; i < tries; i++){
    if(Math.random() < cr) {
        sum += high;
    }
    else{
        sum += low;
    }
    }
    //console.log(sum/tries);
    return([sum/tries, sum]);
}


function damageCompare(high1, low1, cr1, high2, low2, cr2){
    let wins1 = 0;
    let wins2 = 0;
    let sum1 = 0;
    let sum2 = 0;
    for(let i = 0; i < 1000; i++){
        let average = averageDamage(high1, low1, cr1);
        let average2 = averageDamage(high2, low2, cr2);
        average[0] > average2[0] ? wins1++ : wins2++;
        sum1 += average[1];
        sum2 += average2[1];
    }
    let percentage = sum1 > sum2 ? (sum1-sum2)/sum2 : (sum2-sum1)/sum1;

    //returns wins for build 1, wins for build 2, how much better the better build is
    return([wins1, wins2, percentage]);
}








// Crit Stat comparer:
function averageCrit(cr, cd){
    let sum = 0;
    let tries = 1000;
    for(let i = 0; i < tries; i++){
        Math.random() < cr ? sum += 1 + (1*cd) : sum += 1;
    }
    return([sum/tries, sum]);
}

function critCompare(cr1, cd1, cr2, cd2){
    let wins1 = 0;
    let wins2 = 0;
    let sum1 = 0;
    let sum2 = 0;
    for(let i = 0; i < 1000; i++){
        let crit1 = averageCrit(cr1, cd1);
        let crit2 = averageCrit(cr2, cd2)
        crit1[0] > crit2[0] ? wins1++ : wins2++;
        sum1 += crit1[1];
        sum2 += crit2[1];
    }
    let percentage = sum1 > sum2 ? (sum1-sum2)/sum2 : (sum2-sum1)/sum1;
    return([wins1, wins2, percentage]);
}











// Crit Converter
function calculate(cr, cd){
    let sum = 0;
    let tries = 10000;
    for(let i = 0; i < tries; i++){
        Math.random() < cr ? sum += 1 + (1*cd) : sum += 1;
    }
    return(sum);
}


function normalize(cr, cd){
    let closest = [0, 0, 1];
    let calculated = calculate(cr, cd);

    for(let crTest = 0; crTest <= 1; crTest += .005){
        // calculates the error value for this tested cr
        let error = Math.abs(calculated - calculate(crTest, 2*crTest)) / calculated;
        
        //finds smaller error value and puts the variables into closest
        if(error < closest[2]) closest = [crTest, crTest * 2, error];
    }
    
    if(closest[2] <= 0.01){
        // rounds the values:
        let newCr = Math.round(1000*closest[0])/10;
        let newCd = Math.round(1000*closest[1])/10;
        return [newCr, newCd, closest[2]];
         //return closest;
    }
    else{
        return normalize2(cr, cd, closest[2]);
    }

   
}


//  Normalizes if ratio is better than 100/200:
function normalize2(cr, cd, error){
    let newClosest = [cr, cd, error];
    let newCalculated = calculate(cr, cd);
    for(let cdTest = 1.95; cdTest <= 10; cdTest += .01){
        // calculates the error value for this tested cr
        let error = Math.abs(newCalculated - calculate(1, cdTest)) / newCalculated;
        
        //finds smallest error value and puts the variables into closest
        if(error < newClosest[2]) newClosest = [100, cdTest*100, error];
    }
    // rounds the values:
    let newNewCd = Math.round(1000*newClosest[1])/1000;
    return([100, newNewCd, newClosest[2]]);
}





export {averageDamage, damageCompare, averageCrit, critCompare, calculate, normalize, normalize2}