from collections import Counter
def ArrayChallenge(strArr):

  # code goes here
  p = []
  c = []

  for i in strArr:
    p.append(i[3])
    c.append(i[1])

  for k,v in Counter(p).items():
    if(v>2):
      return False

  for k,v in Counter(c).items():
    if(v>1):
      return False

  return True

# keep this function call here 
print ArrayChallenge(raw_input())