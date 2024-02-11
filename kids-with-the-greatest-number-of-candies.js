var kidsWithCandies = function(candies, extraCandies) {
    const mostCandies = Math.max(...candies);
    return candies.map((candyAmount) => candyAmount + extraCandies >= mostCandies)
};