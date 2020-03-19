# array_front9
def array_front9(nums):
    l = len(nums)
    if l > 4:
        l = 4
    for i in range(0, l):
        if nums[i] == 9:
            return True
    return False
