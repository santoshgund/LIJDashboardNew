export class Environment{
    public id:number;
    public name:string;
    public description:string;
    public installedOn:string;

    constructor(id,name,desc,installed){
        this.id=id;
        this.name=name;
        this.description=desc;
        this.installedOn=installed;
    }

}