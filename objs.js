class Project{
    constructor(name, arrayOfMilestones){
        this.name = name;
        this.arrayOfMilestones = arrayOfMilestones;
    }
}


var arrayOfMilestones = [];
class Milestone{
    constructor(name, achieved){
        this.name = name;
        this.progress = [];
        this.achieved = achieved;
    }
}