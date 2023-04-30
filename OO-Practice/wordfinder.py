"""Word Finder: finds random words from a dictionary."""
import random

class WordFinder:
    def __init__(self, file):
        self.file= file
        
        
    def SpecialWordFinder(file):    
        file = open("words.txt", 'r')
        list_of_words=[]
        for line in file:
            if line.startswith('#') | line.startswith(" ") == True:
                continue
            else:
                list_of_words.append(line[:-2])
        choice=random.randint(0, len(list_of_words))
        
        return list_of_words[choice]
