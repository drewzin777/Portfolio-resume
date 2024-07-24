function calculateLifetimeSupply(currentAge, bagPerDay) {
    const maxAge = 85; 
    if (currentAge >= maxAge) {
        console.log("You are already 85 or older. No more snack!");
        
    }
    let yearsRemaining = maxAge - currentAge;
    let daysRemaining = yearsRemaining * 365;
    let totalAmountNeeded = daysRemaining * bagPerDay;
    console.log(`You will need ${totalAmountNeeded} amount to last you until the age of 85.`);
}

calculateLifetimeSupply(15, 2); 
calculateLifetimeSupply(53, 1);
calculateLifetimeSupply(29, 3);

