function ArrayChallenge(arr) {

    var maxProfit = 0;
    
    var minPrice = arr[0];
    
    for (var i = 1; i < arr.length; i++) {
    
    if (arr[i] < minPrice) {
    
    minPrice = arr[i];
    
    }
    
    if (arr[i] — minPrice > maxProfit) {
    
    maxProfit = arr[i] — minPrice;
    
    }
    
    }
    
    return maxProfit;
    
    }