# string_match
def string_match(a, b):
    cnt = 0
    for i in range(min(len(a), len(b)) - 1):
        a1 = a[i:i + 2]
        b1 = b[i:i + 2]
        if a1 == b1:
            cnt = cnt + 1
    return cnt
