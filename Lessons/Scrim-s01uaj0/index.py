
monty_python = ['John Marwood Cleese','Eric Idle','Michael Edward Palin','Terrence Vance Gilliam','Terry Graham Perry Jones', 'Graham Arthur Chapman']
def sort_names(name):
    return name.split(' ')
monty_python.sort(key = lambda name:name.split(' ')[-1])
print(monty_python)
monty_python.sort(key= sort_names)
print(monty_python)
