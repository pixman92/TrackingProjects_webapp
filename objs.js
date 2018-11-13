class Project{
    constructor(name, arrayOfMilestones){
        this.name = name;
        this.arrayOfMilestones = arrayOfMilestones;
    }
}


var arrayOfMilestones = [];
class Milestone{
    constructor(name, progress, achieved){
        this.name = name;
        this.progress = [progress];
        this.achieved = achieved;
    }
}