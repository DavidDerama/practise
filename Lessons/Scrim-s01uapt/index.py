import random, string

smallcaps = 'abcdefghijklmnopqrstuvwxyz'
largecaps = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
digits = '0123456789'
letters_numbers = string.ascii_letters + string.digits
word = ''
for i in range(7):
    word += random.choice(letters_numbers)
word1 = ''.join(random.sample(letters_numbers,7))
word = random.choices(letter_numbers, k=7)    
print(word)
print(word1)