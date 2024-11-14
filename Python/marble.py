print('Project - Trading game simulation / pseudo code')
import random 

start_gold = 1000
gold_pieces = start_gold
bag_inventory = ("green","green","green","green","black","green","red","red","red","white")
rounds = 3
marble = "none"

for i in range(1, rounds + 1):
    print(f"Round {i}")
    print(f"Last draw you got a {marble} marble. You currently have {gold_pieces} pieces of gold.")
    bet_amount = int(input(f"How much are you betting?"))
    marble = random.choices(bag_inventory)[0]
    if(marble == "green"):
            gold_pieces += bet_amount
            print(f"You got a {marble} marble and won {bet_amount} pieces of gold")
    elif(marble == "black"):
            gold_pieces += bet_amount * 10
            print(f"You got a {marble} marble and won {bet_amount} pieces of gold")
    elif(marble == "white"):
            gold_pieces -= bet_amount * 5
            print(f"You got a {marble} marble and lost {bet_amount} pieces of gold")
    elif(marble == "red"): 
            gold_pieces -= bet_amount
            print(f"You got a {marble} marble and lost {bet_amount} pieces of gold")

    if gold_pieces < 0.5 * start_gold:
        print("You lost the game")
        break

print("Starting/Ending Gold:", start_gold, "/", gold_pieces)
print("Gain/Loss", ((gold_pieces / start_gold) * 100), "%" )
    