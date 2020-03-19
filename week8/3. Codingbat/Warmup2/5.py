# last2
def last2(str):
    if len(str) < 2:
        return 0
    s = str[len(str) - 2:]
    cnt = 0
    for i in range(len(str) - 2):
        sub = str[i:i + 2]
        if sub == s:
            cnt += 1
    return cnt