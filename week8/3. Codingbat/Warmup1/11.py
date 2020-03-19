# front_back
def front_back(str):
    if len(str) <= 1:
        return str
    s = str[1:len(str) - 1]
    return str[len(str) - 1] + s + str[0]