
 function superbowlWin(findWin){
     const yearWin = findWin.find(win => win.result === "W")
 //return yearWin ? yearWin.yearWin : undefined
 if(yearWin){
    return yearWin.year
 }else{
    return undefined
 }

 }