
var milestoneObj = {};
function createMilestone(name){
    milestoneObj = new Milestone(name, "", "");
}

function addProgressToMilestone(progress){
    milestoneObj.progress.append(progress);
}