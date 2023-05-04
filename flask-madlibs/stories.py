"""Madlibs Stories."""
from flask import Flask, request, render_template

app = Flask(__name__)


class Story:
    """Madlibs story.

    To  make a story, pass a list of prompts, and the text
    of the template.

        >>> s = Story(["noun", "verb"],
        ...     "I love to {verb} a good {noun}.")

    To generate text from a story, pass in a dictionary-like thing
    of {prompt: answer, promp:answer):

        >>> ans = {"verb": "eat", "noun": "mango"}
        >>> s.generate(ans)
        'I love to eat a good mango.'
    """
    



    def __init__(self, words, text):
        """Create story with words and template text."""

        self.prompts = words
        self.template = text
        text = """Once upon a time in a long-ago {{place}}, there lived a
       large {{adjective}} {{noun}}. It loved to {{verb}} {{plural_noun}}."""
        
    def generate(self, answers):
        """Substitute answers into text."""
  
        
        
        
        text = self.template

        for (key, val) in answers.items():
            text = text.replace("{" + key + "}", val)

        return text
    

       
        
        


# Here's a story to get you started


# story = Story(
#     text= """Once upon a time in a long-ago {{place}}, there lived a large {{adjective}} {{noun}}. It loved to {{verb}} {{plural_noun}}.""",
#     words= {"place": request.args('place'), 'noun': request.args('noun'), "verb":request.args("verb"), "adjective": request.args("adjective"), "plural_noun": request.args("plural_noun")}
# )

@app.route('/')
def start_page():
    return render_template('madlibs.html')



@app.route('/story')
def madlibs():
    place=request.args["place"]
    noun=request.args["noun"]
    verb=request.args["verb"]
    adjective=request.args["adjective"]
    plural_noun=request.args["plural_noun"]
    return render_template('answers.html', place=place, noun=noun, verb=verb, adjective=adjective, plural_noun=plural_noun)
    