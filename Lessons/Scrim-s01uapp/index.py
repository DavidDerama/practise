

def price_calc(start,hourly_rate):
    return lambda hours: start + hourly_rate * hours
    
walkin_cost = price_calc(10,30)
premium_cost = price_calc(1,25)
print(walkin_cost(2))
print(premium_cost(2))