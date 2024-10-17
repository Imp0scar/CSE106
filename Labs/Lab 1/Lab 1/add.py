
def main():
    
        x = input("Enter two or more numbers separated by spaces: ").split()

        sum = 0
        if len(x) < 2:
            raise Exception("You need two or more numbers. Try again.")
        for i in x:
            try:
                sum += int(i)
            except ValueError:
                raise Exception("You must input only numbers.")
    
        print(sum)

    
if __name__ == "__main__":
    main()
