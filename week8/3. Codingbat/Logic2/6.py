# close_far
def close_far(a, b, c):
    disAB = abs(a - b)
    disAC = abs(a - c)
    disCB = abs(c - b)
    return disAB <= 1 and disAC >= 2 and disCB >= 2 or disAC <= 1 and disAB >= 2 and disCB >= 2
