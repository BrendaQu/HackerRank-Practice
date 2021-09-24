/*Solve Me First*/
function solveMeFirst(a, b) {  
    return a+b;
  }

  /*Simple Array Sum*/
  function simpleArraySum(ar) {
    // Write your code here
    var sum = 0;
    const n = ar.length;
    for (let i=0; i < n; i++) {
        sum += ar[i];
    }
    return sum;
}

/*Compare the Triplets*/
function compareTriplets(a, b) {
    // Write your code here
    const n = a.length;
    var asum = 0;
    var bsum = 0;
    
    for (var i = 0; i < n; i++) {
        if(a[i] > b[i]){
            asum++;
        }
        
        else if (a[i] < b[i]) {
            bsum++;
        }
        
    }
    return [asum, bsum];
}

/*A Very Big Sum*/
function aVeryBigSum(ar) {
    // Write your code here
    const n = ar.length;
    var sum = 0;
    
    for(var i = 0; i < n; i++) {
        sum += ar[i];
    }
    
    return sum;
}

/*Diagonal Difference*/
function diagonalDifference(arr) {
    // Write your code here
    const n = arr.length;
    var num1 = 0;
    var num2 =0;
    
    for(var i=0; i<n; i++) {  
        num1 += arr[i][i];
    }
    
    for(var i=0; i<n; i++) {
        num2 += arr[i][n-1-i];
    }
    
    return Math.abs(num1-num2);
}

/*Staircase*/
function staircase(n) {
    // Write your code here
    let string = "";
    let a = n - 1;
    for(let i = 0; i < n; i++) {
        string += " ";
    }
    for(let i = a; i >= 0; i--) {
        var arr = string.split("");
        arr[i] = "#";
        string = arr.join("");
        
        console.log(string);
    }
}

/*Mini-Max Sum*/
function miniMaxSum(arr) {
    // Write your code here
    var n_min_sum = 0;
    var n_max_sum = 0;
    
    arr.sort();

    
    for (var i = 0; i < 4; i++) {
            n_min_sum += arr[i];
    }
    
    for (var i = 1; i < 5; i++) {
            n_max_sum += arr[i];
    }
    
    return console.log(n_min_sum, n_max_sum);
}

/*Birthday Cake Candles*/
function birthdayCakeCandles(candles) {
    // Write your code here
    const n = candles.length;
    let counter = 0;
    var max = 0;
    for(let i = 0; i < n; i++) {
        if (max < candles[i]) {
            max = candles[i];
        }
    }
    
    for(let i =0; i < n; i++) {
        if(max == candles[i]) {
            counter++;
        }
    }
    return counter;   
}

/*Time Conversion*/
function timeConversion(s) {
    // Write your code here
    let s_arr = s.split("");
    if(s_arr[8] == "A") {
            s_arr.pop();
            s_arr.pop();
        if((s_arr[0] == "1") && (s_arr[1] == "2")) {
            s_arr[0] = "0";
            s_arr[1] = "0";
            console.log(s_arr[0]);
            return s_arr.join("");
        } else {
            return s_arr.join("");
        }
        
    } else {
            s_arr.pop();
            s_arr.pop();
        if((s_arr[0] == "1") && (s_arr[1] == "2")) {
            return s_arr.join("");
        } else {
            let num = s_arr[0] + s_arr[1];
            num = Number(num) + 12;
            num = num.toString();
            let a_num = num.split("");
            s_arr[0] = a_num[0];                                       
            s_arr[1] = a_num[1];
            return s_arr.join("");
        }
    }
}

/*Grading Students*/
function gradingStudents(grades) {
    // Write your code here
    let n = grades.length;
    let arr = [];
    
    for(let i = 0; i < n; i++) {
        if(grades[i] < 38) {
            arr.push(grades[i]);
        }
        else{
            let num = grades[i]%5;
            let dif = 5 - num;
            if(dif < 3) {
                arr.push(grades[i] + dif);
            } else {
                arr.push(grades[i]);
            }
        }
    }
    return arr;
}   

/*Apple and Orange*/
function countApplesAndOranges(s, t, a, b, apples, oranges) {
    // Write your code here
    let m = apples.length;
    let n = oranges.length;
    let counter_a = 0;
    let counter_o = 0;
    
    for(let i = 0; i < m; i++) {
        let test = apples[i] + a;
        if(test >= s && test <= t) {
            counter_a++;
        }
    }
    for(let i = 0; i < n; i++) {
        let test = oranges[i] + b;
        if(test >= s && test <= t){
            counter_o++;
        }
    }
    
    console.log(counter_a);
    console.log(counter_o);
}

/*Number Line Jumps*/
function kangaroo(x1, v1, x2, v2) {
    // Write your code here
    for(let i = 0; i < 10000; i++) {
        if(x1+v1*i == x2+v2*i){
            return "YES";
        }
    }

    return "NO";
}

/*Breaking the Records*/
function breakingRecords(scores) {
    // Write your code here
    var n = scores.length;
    let max = scores[0];
    let min = scores[0];
    let max_counter = 0;
    let min_counter = 0;
    
    scores.forEach((element) => {
        if(max<element) {
            max = element;
            max_counter++;
        } else if (min > element) {
            min = element;
            min_counter++;
        }
    });
    return[max_counter,min_counter];
}

/*Subarray Division*/
function birthday(s, d, m) {
    // Write your code here
    let counter = 0;
    const n = s.length;
    
    for(let i = 0; i < n; i++) {
        let sum = 0;
        for(let j = 0; j < m; j++) {
            sum += s[i+j];
        }
        if(sum==d){
            counter++;
        }
    }
    return counter;
}

/*Divisible Sum Pairs*/
function divisibleSumPairs(n, k, ar) {
    // Write your code here
    let counter = 0;
    for(let i = 0; i < n ; i++) {
        let sum = 0;
        for(let j = (i+1); j < n; j++){
            sum = ar[i] + ar[j];
            if(sum%k == 0){
                counter++;
            }
        }
    }
    return counter;
}

/*Migratory Birds*/
function migratoryBirds(arr) {
    // Write your code here
    let type_arr = [0,0,0,0,0];
    let max = 0;
    let max_type = 0;
    const n = arr.length;
    
    arr.forEach((element) => {
        if(element == 1) {
            type_arr[0]++;
        } else if (element == 2) {
            type_arr[1]++;
        } else if (element == 3) {
            type_arr[2]++;
        } else if (element == 4) {
            type_arr[3]++;
        } else if (element == 5) {
            type_arr[4]++;
        }
    })
    
    for(let i = 0; i < n; i++) {
        if(max < type_arr[i]){
            max = type_arr[i];
            max_type = i+1;
        }
    }
    
    return max_type;
    
}

/*Day of teh Programmer*/
function dayOfProgrammer(year) {
    // Write your code here
    let num = Number(year);
    if (num == 1918) {
        return "26.09." + year;
    } else if(num <= 1917 && num >= 1700 && num%4 == 0) {
        return "12.09." + year;
    } else if ((num > 1918 && num <=2700) && 
    (num%400 == 0 || (num%4==0 && !(num%100==0)))){
        return "12.09." + year;
    } else {
        return "13.09." + year;
    }
}

/*Bill Division*/
function bonAppetit(bill, k, b) {
    // Write your code here
    const n = bill.length;
    let calc_total = 0;
    
    for(let i = 0; i < n; i++) {
        if(i==k){
            calc_total = calc_total + 0;
        } else {
            calc_total = calc_total + bill[i];
        }
    }
    
    if ((calc_total/2) == b) {
        return "Bon Appetit";
    } else {
        return b - calc_total/2;
    }
}


/*Sales by Match*/
function sockMerchant(n, ar) {
    // Write your code here
    for(let i = 0; i < n; i++) {
        for (let j = i+1; j < n; j++) {
            if(ar[i] == ar[j]) {
                ar.splice(j,1);
                break;
            }
        }
    }
    return n - ar.length;
}

/*Drawing Book*/
function pageCount(n, p) {
    // Write your code here
    let book = [];
    let front_count = 0;
    let back_count = 0;
    
    for(let i = 0; i < n+1; i++) {
        book[i] = i;
    }
    
    for(let i = 0; i < n+1; i++) {
        if(book[i] == p) {
            break;
        } else {
            front_count++;
        }
    }
    
    for(let i = n; i >= 0; i--) {
        if(book[i] == p) {
            break;
        } else {
            back_count++;
        }
    }
    console.log(front_count);
    console.log(back_count);
    
    if(front_count <= back_count) {
        return Math.floor(front_count/2);
    } else {
        if(n%2==0 && back_count==1) {
            return back_count;
        }
        else{
            return Math.floor(back_count/2);
        }
    }
}

/*Counting Valleys*/
function countingValleys(steps, path) {
    // Write your code here
    let valley = 0;
    let sealevel = 0;
    let currentlevel = 0;
    
    for(let i = 0; i < steps; i++) {
        if(path[i] == "U") {
            currentlevel++;
        } else {
            currentlevel--;
        }
        if(currentlevel == sealevel && path[i]== "U"){
            valley++;
        }
    }
    
    return valley;
}

/*Cat and a Mouse*/
function catAndMouse(x, y, z) {
    let cat_a = Math.abs(z-x);
    let cat_b = Math.abs(z-y);
    
    if(cat_a == cat_b) {
        return "Mouse C";
    } else if (cat_a < cat_b) {
        return "Cat A";
    } else {
        return "Cat B";
    }
}

/*Electronics Shop*/
function getMoneySpent(keyboards, drives, b) {
    /*
     * Write your code here.
     */
    let max_b = -1;
    const k_n = keyboards.length;
    const d_n = drives.length;
    keyboards.reverse();
    drives.sort();
    
    for(let i = 0; i < k_n; i++) {
        for(let j = 0; j < d_n; j++) {
            let temp = keyboards[i] + drives[j];
            if(temp > b) {
                break;
            }
            if(temp > max_b) {
                max_b = temp;
            } 
        }
    }
    
    return max_b;

}
