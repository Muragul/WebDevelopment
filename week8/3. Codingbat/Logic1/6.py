# alarm_clock
def alarm_clock(day, vacation):
    if (day == 6) or (day == 0):
        if vacation:
            return "off"
        return "10:00"
    if vacation:
        return "10:00"
    return "7:00"
