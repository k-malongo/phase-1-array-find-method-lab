
 function superbowlWin(findWin){
     const yearWin = findWin.find(win => win.result === "W")
 if(yearWin){
    return yearWin.year
 }else{
    return undefined
 }

 }