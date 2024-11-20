import timeit

print('Performance and Timeit module')
# Experiment with sieve of Eratosthenes
print([x for x in range(1, 151) if not any([x % y == 0 for y in range(2, x)]) and not x == 1])
print([x for x in range(2, 151) if not any([x % y == 0 for y in range(2, x)])])

# Initialize a list
primes = []
for possiblePrime in range(2, 151):
# Assume number is prime until shown it is not.
   isPrime = True
   for num in range(2, int(possiblePrime ** 0.5) + 1):
       if possiblePrime % num == 0:
           isPrime = False
           break
   if isPrime:
       primes.append(possiblePrime)
print(primes)
