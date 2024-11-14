print('Project - Trading game simulation / pseudo code')
import random 

gold_pieces = 1000


bag_inventory = ("green","green","green","green","green","green","red","red","red","red")

while gold_pieces > 0:
    print(f"You currently have {gold_pieces} pieces of gold.")
    bet_amount = int(input(f"How much are you betting?"))
    random_marble = random.choices(bag_inventory)[0]
    if(random_marble == "green"):
        gold_pieces += bet_amount
        print(f"You got a {random_marble} marble and won {bet_amount} pieces of gold")
    else: 
        gold_pieces -= bet_amount
        print(f"You got a {random_marble} marble and lost {bet_amount} pieces of gold")
    