//https://github.com/ShahadatHossain2/Assignment

function kilometerToMeter(kilometer) {
    if (typeof (kilometer) == "number") {
        if (kilometer >= 0) {
            let result = kilometer * 1000;
            return result;
        }
        else {
            return "Distance can't be negative!";
        }
    }
    else {
        return "Sorry! Distance can't be a string."
    }
}

function budgetCalculator(watch, phone, lapetop) {
    if (typeof (watch) == "number" && typeof (phone) == "number" && typeof (lapetop) == "number") {
        if (watch >= 0 && phone >= 0 && lapetop >= 0) {
            let watchBudget = watch * 50;
            let phoneBudget = phone * 100;
            let lapetopBudget = lapetop * 500;

            let totalBudget = watchBudget + phoneBudget + lapetopBudget;

            return totalBudget;
        }
        else {
            return "Number of any electronics can't be negative!";
        }
    }
    else {
        return "Number of any electronics can't be a string!";
    }
}

function hotelCost(days) {
    if (typeof (days) == "number") {
        if (days >= 0) {
            let cost = 0;
            if (days <= 10) {
                cost = days * 100;
            }
            else if (days <= 20) {
                let firstCost = 10 * 100;
                let remaining = days - 10;
                let secoondCost = remaining * 80;
                cost = firstCost + secoondCost;
            }
            else {
                let firstCost = 10 * 100;
                let secoondCost = 10 * 80;
                let remaining = days - 20;
                let thirdCost = remaining * 50;
                cost = firstCost + secoondCost + thirdCost;
            }

            return cost;
        }
        else {
            return "Number of days can't be negative!";
        }
    }
    else {
        return "Sorry! Number of days can't be a string.";
    }
}

function megaFriend(friends) {
    if (friends != undefined) {
        if (friends.length != 0) {
            let maxLength = friends[0].length;
            let friendName = friends[0];
            for (let i = 0; i < friends.length; i++) {
                if (typeof (friends[i]) == "number") {
                    return "Sorry! Name can't be a number.";
                }
                else if (maxLength < friends[i].length) {
                    maxLength = friends[i].length;
                    friendName = friends[i];
                }
            }
            return friendName;
        }
        else {
            return "Please! input names."
        }
    }
    else {
        return "Please! input names."
    }
}

// console.log(kilometerToMeter(80));
// console.log(budgetCalculator(6, 7, 8));
// console.log(hotelCost(50));
// console.log(megaFriend(['Shahadat Hossain','Ehtasham','Junayed Abdullahs','Abir Shanto']));