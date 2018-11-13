
var milestoneObj = {};
function createMilestone(name){
    milestoneObj = new Milestone(name, "", "");
}

function addProgressToMilestone(progress){
    var len = milestoneObj.progress.length;
    milestoneObj.progress[len] =  progress;
}

//================================================

function passMilestoneToFirebase(){
    
}