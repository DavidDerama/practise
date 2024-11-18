print('python101 - Enumerate')
friends = ['Brian', 'Judith', 'Reg', 'Loretta', 'Colin']
efriends = [(51,'Brian'), (52,'Judith'), (53,'Reg'), (54,'Loretta'), (55,'Colin')]

#i = 51
#for friend in friends:
#    print(i, friend)
#    i = i +1 # += 1
for num, friend in enumerate(friends,51):
    print(num, friend)
for friend in enumerate(friends,51):
    print(friend)
for friend in enumerate(enumerate(friends,51),-100):
    print(friend)   
for num, letter in enumerate('python',start = 5):
    print(num, letter)
print(type(enumerate(friends)))
print(list(enumerate(friends)))