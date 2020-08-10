
input   | isLeapyear | output

2000                    true
1970                    false
1900                    false
1988                    true
1500                    false


- All years divisible by 400 ARE leap years (e.g. 2000 was a leap year)
year % 400 === 0

- All years divisible by 100 but not by 400 are NOT leap years (e.g. 1700, 1800 and 1900 were not leap years)
(year % 100 === 0) && (!year % 400 === 0)

- All years divisible by 4 and not by 100 ARE leap years (e.g. 2004, 2008 and 2012 were leap years)
else if (year % 4 === 0 && !year % 400 === 0)

- All years not divisible by 4 are NOT leap years (e.g. 2009, 2010 and 2011 were not leap years)
!year % 4 === 0