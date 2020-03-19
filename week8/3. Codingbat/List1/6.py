# rotate_left3
def rotate_left3(nums):
    c = nums[0]
    nums[0] = nums[1]
    nums[1] = nums[2]
    nums[2] = c
    return nums
