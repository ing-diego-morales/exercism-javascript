export const hoursPerDay = 8;
export const numberOfDaysWorking = 22;

export function dayRate (ratePerHour) {
  return ratePerHour * hoursPerDay;
}

export function daysInBudget (budget, ratePerHour) {
  return Math.floor(budget / dayRate(ratePerHour));
}

export function priceWithMonthlyDiscount (ratePerHour, numDays, discount) {
  const fullMonths = Math.floor(numDays / numberOfDaysWorking);
  const remainingDays = numDays % numberOfDaysWorking;

  const discountedRate = dayRate(ratePerHour) * (1 - discount);
  const totalCost = (fullMonths * numberOfDaysWorking * discountedRate) + (remainingDays * dayRate(ratePerHour));
  
  return Math.ceil(totalCost);
}