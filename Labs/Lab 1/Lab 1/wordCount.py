import string
def main():

    word = input("Enter a word: ").lower() # allows the user to input a word but makes it lower case.
    count = 0
    with open('C:\CSE106\Labs\Lab 1\Lab 1\PythonSummary.txt', 'r') as file: # opens the file and refers to it as file
   # content = f.read()
        for line in file:
            line = line.strip() # removes leading and trailing characters, whitespaces, and symbols
            line = line.lower() # converts strings to lowercase
            line = line.translate(line.maketrans("", "", string.punctuation)) #removes the punctuation marks attached to the word
            words = line.split(" ") # splits a string into a list, each word gets split by the white spaces.

            for j in words:
                if(word in j):
                    count = count + 1
    print("The word", word, "occurs", count, "times")

if __name__ == "__main__":
    main()