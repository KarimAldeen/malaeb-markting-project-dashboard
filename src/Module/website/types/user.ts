
import { Nullable } from "@Module/core/types/core";

export interface userType {
  eventId : number 
  eventName: string;
  userEmailOrPhone : string ,
  user_count:number 
}

export interface InitialValues {
  id: number;
  name: string;
}



export type userInitialValuesType = Partial<Nullable<InitialValues>>;
