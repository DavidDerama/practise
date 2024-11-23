#project Euler #4 - largest palindrome of two 3 - digit numbers 
# a palindrome is a number that is the same backwards and forwards, like 101 or 990099

import time

def is_palindrome(val):
    val = str(val)
    if val == val[::-1]:
        return(True)
    else:
        return(False)
#def is_palindrome(val):
 #   return str(val) == str(val)[::-1]
 
def palindrome():
    start_time = time.time()
    palindromes_list=[]
    debug_list=[]
    low_val =900
    high_val = 999
    iterations = 0
    
    for num1 in range(low_val,high_val):
        for num2 in range(low_val,high_val):
            iterations += 1
            #print(num1,num2)
            if is_palindrome(num1*num2):
                palindromes_list.append(num1*num2)
                debug_list.append([num1,num2,num1*num2])
            if num1 == num2:
                break
    print('print of palindromes:',palindromes_list, num1, num2)
    print('debug_list:', debug_list)
    print('Iterations:' , iterations)
    print('Largest palindrome:', max(palindromes_list))
    print('Runtime:', time.time()-start_time)
    print('---------End Run--------') #110 seconds, 55 secs
    
def palindrome_back():
    start_time = time.time()
    palindromes_list=[]
    debug_list=[]
    low_val =500
    high_val = 2000
    iterations = 0
    low_num2_val =500
    
    for num1 in range(high_val,low_val,-1):
        if num1 < low_val:
            break
        for num2 in range(high_val,low_num2_val,-1):
            iterations += 1
            #print(num1,num2)
            if is_palindrome(num1*num2):
                palindromes_list.append(num1*num2)
                low_val = max((num1*num2)/high_val,low_val)
                low_num2_val = num2
                debug_list.append([num1,num2,(num1*num2)/high_val,low_val])
            if num1 == num2:
                break
    print('print of palindromes:',palindromes_list, num1, num2)
    print('debug_list:', debug_list)
    print('Iterations:' , iterations)
    print('Largest palindrome:', max(palindromes_list))
    print('Runtime:', time.time()-start_time)
    print('---------End Run--------') 

    #110 seconds, 55 secs, 0.6 sec ver 1, 1.5 and 2
def palindrome_create():
    nums=('9','8','7','6','5','4','3','2','1','0') # we create a list of the strings we will use
    iterations = 0 # we bring along our trusty iterator
    
    for dig1 in range(10):
        for dig2 in range(10):
            for dig3 in range(10):
                #we create the palindrome string by slicing using the iterators
                pal_str = nums[dig1] + nums[dig2] + nums[dig3] + nums[dig3] + nums[dig2] +nums[dig1]  
                palindrome = int(pal_str) # typecast string into an integer
                # print(pal_str, palindrome) #debug to check palindromes tested
                
                #lowest number to check against that can generate a higher 
                low_val = int(palindrome/999) # or //999 floor div gives int as answer 
                # highest possible factor to check, one factor must be lower than this
                high_val = int(palindrome**0.5) + 1 # **0.5 is "the square root" of palindrome 
                
                # check if palindrome divisible by any of the numbers between min and max
                for digit in range(low_val,high_val):
                    iterations += 1
                    if palindrome % digit == 0: #check for divisibility, since we are stepping through palindromes in order, as soon as we find one: we are Done! 
                       
                        return 'palindrome:', palindrome, 'digit:',digit, 'palindrome/digit:', palindrome/digit ,'iterations:',iterations #gives nicer close out of loops

palindrome()
palindrome_back()
palindrome_create()