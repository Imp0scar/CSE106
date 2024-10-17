
def main():
    sentence = input("Enter the punishment sentence: ")
    num = int(input("Enter the number of times you want the sentence repeated: "))
    f = open(r'C:\CSE106\Labs\Lab 1\Lab 1\CompletedPunishment.txt', 'w') # opens the file and has it set to write mode

    for i in range(num):
        f.write(sentence)
        f.write("\n")
   # content = f.read()
   # print(content)
    f.close()

if __name__ == "__main__":
    main()