import random



class RandomWord:

    def __init__(self, file):
        self.file=file    
    def open_file(file):    
        file = open("words.txt", 'r')
        x=0
        for line in file:
            x+=1
        return f"num-of_words-read= {x}"

        file.close()

    def random(file):
        list_of_words=[]
        file = open("words.txt", 'r')
        for line in file:
            list_of_words.append(line)
        choice=random.randint(0, len(list_of_words))
        return list_of_words[choice]