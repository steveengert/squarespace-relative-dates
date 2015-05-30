# Squarespace Relative Date Converter
Takes the published on dates for Squarespace posts and convertes dates formatted like this

` <time datetime="2015-05-25" id="yui_3_17_2_2_1433027076543_2919">May 25, 2015</time> `

and changes it to this

` <time datetime="2015-05-25">5 days ago</time> `

Input  | Result
------------- | -------------
A date that hasn't happened yet  | *The future!*
Same day as today  | *Today*
One day ago  | *Yesterday*
2–6 days ago | *n days ago*
7–13 days ago | *last week*
14–29 days ago | *n weeks ago*
30–59 days ago | *last month*
60–364 days ago | *n months ago*
365–729 days ago | *last year*
730+ days ago | *n years ago*
