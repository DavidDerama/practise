#from file_mock import open
# Mocking file read/write
from browser.local_storage import storage

class File:	

    def __init__(self, name, mode):
        self.name = name
        self.mode = mode
        self.content = ''

    def __enter__(self):
        return self

    def __exit__(self, exc_type, exc_value, tb):
        pass

    def write(self, data):
        if self.mode == "w":
            self.content += data
            storage[self.name] = self.content
        elif self.mode == "a":
            self.content += data
            storage[self.name] += self.content
        else:
            raise IOError("read only")

    def read(self,length = None):
        if self.name in storage:
            return storage[self.name][0:length]
        raise IOError("file not found")
    
    def readlines(self):
        if self.name in storage:
            return storage[self.name].split('\n')
        raise IOError("file not found")
    
    global currentline # for below readline method
    currentline = 0
    
    def readline(self):
        if self.name in storage:
            output = storage[self.name].split('\n')[currentline]
            global currentline
            if currentline < len(output):
                currentline  += 1 
            else: 
                pass
            return output
        raise IOError("file not found")
        
    def close(self):
        pass
      
def open(name, mode="r"):
    if name == 'movies.txt':
        my_file =File(name, mode)
        return my_file
    else:
        return File(name, mode)

# create greeting.txt
msg = 'Hello,\nWelcome to Monty Pythons Flying Circus!'
with open('greeting.txt', 'w') as f:
    f.write(msg)
with open('friends.csv', 'w') as f:
    f.write('John, 1939\nEric, 1943\nMichael, 1943\nGraham, 1941\nTerryG, 1940\nTerryJ, 1942')

# create cart.txt
msg = 'Iphone, 399\nHeadset, 65\nLaptop, 599\n'
with open('cart.txt', 'w') as f:
    f.write(msg)
with open('cart.txt', 'a') as f: #test appending to file
    f.write('display, 139\n')
with open('movies.txt', 'w') as f:
    f.write('Holy Grail, 1975\nLife of Brian, 1979\nMeaning of Life, 1983\n')

#----Code above is to make filehandling work----------------------
#print('** File Read Tutorial **') 








































with open('movies.txt','r') as f:
    #for line in f: #not in scrimba
    for line in f.readlines(): #Scrimba workaround
        print(line)