
import { Nullable } from "@Module/core/types/core";

export interface matchType {
  id: number;
  eventId:number ;
  secondTeamName:string;
  firstTeamName:string;
  firstTeamImage:string;
  secondTeamImage:string;
  event:{
    id:number ,
    name:string
  }
}

export interface InitialValues {
  id: number;
  eventId:number ;
  secondTeamName:string;
  firstTeamName:string;
  firstTeamImage:any;
  secondTeamImage:any;


}



export type matchInitialValuesType = Partial<Nullable<InitialValues>>;
