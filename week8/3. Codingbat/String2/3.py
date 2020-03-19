# cat_dog
def cat_dog(str):
    catcnt = 0
    dogcnt = 0
    for i in range(len(str) - 2):
        s = str[i] + str[i + 1] + str[i + 2]
        if s == 'cat':
            catcnt += 1
        elif s == 'dog':
            dogcnt += 1
    return catcnt == dogcnt
