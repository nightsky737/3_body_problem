from three_body import *
from numpy import  * 

body1 = body(np.array([0, 1, 1]), None, None, 1)
body2 = body(np.array([0, 1, 0]), None, None, 1)

body1.attract(body2) 