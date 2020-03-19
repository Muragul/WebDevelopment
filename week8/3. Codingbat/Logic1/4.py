# caught_speeding
def caught_speeding(speed, is_birthday):
    upper = 0
    if is_birthday:
        upper = 5
    if speed <= 60 + upper:
        return 0
    elif 61 + upper <= speed <= 80 + upper:
        return 1
    return 2
