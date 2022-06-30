export class TaskModel{
    constructor(
        public id:string,
        public title:string, 
        public description:string, 
        public creationDate:string, 
        public isImportant:boolean = false, 
        public isCompleted:boolean = false, 
        public date_MarkAsCompleted:string
        ){}
}