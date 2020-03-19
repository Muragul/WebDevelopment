# max_end3
def max_end3(nums):
    nums[0] = max(nums[0], nums[2])
    nums[1] = nums[0]
    nums[2] = nums[0]
    return nums
