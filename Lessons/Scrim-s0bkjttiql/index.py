print('if elif else - Exercise')
# Create a calculator which handles +,-,*,/ and outputs answer based on the mode/ operator used
# Hint: use 3 separate inputs 
# Bonus: Extend functionality with extra mode so it also does celsius to fahrenheit conversion
# formula is: temp in C*9/5 + 32 = temp in f

operator = input("Give me an operator (+,-,*,/,f) ")

if(operator != "f"):
    first_num = float(input("Give me the first number"))
    second_num = float(input("Give me the second number"))
    if(operator == "+"):
        print(f"The results are: {first_num + second_num}")
    elif(operator == "-"):
        print(f"The results are: {first_num - second_num}")
    elif(operator == "*"):
        print(f"The results are: {first_num * second_num}")
    elif(operator == "/"):
        print(f"The results are: {first_num / second_num}")
    else:
        print("Error")
else:
    first_num = float(input("Give me a celsius
    "))
    print(f"Celsius to fahrenheit: {first_num *  9 / 5 + 2}")
        