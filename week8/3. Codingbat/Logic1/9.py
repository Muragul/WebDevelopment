# near_ten
def near_ten(n):
    return (n - 2) % 10 == 0 or (n - 1) % 10 == 0 or n % 10 == 0 or (n + 1) % 10 == 0 or (n + 2) % 10 == 0
