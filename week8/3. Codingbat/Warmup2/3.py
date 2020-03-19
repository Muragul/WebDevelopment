# string_bits
def string_bits(str):
    s = ""
    for i in range(0, len(str), 2):
        s = s + str[i]
    return s
