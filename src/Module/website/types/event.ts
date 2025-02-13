
import { Nullable } from "@Module/core/types/core";

export interface eventType {
  id: number;
  name: string;
  price:string;
  isActive:boolean
  maxUserCountRegistered:number;
  _count:{
    matches:number
  }
}

export interface InitialValues {
  id: number;
  name: string;
  price:string;
  maxUserCountRegistered:number;
  isActive:boolean
}



export type eventInitialValuesType = Partial<Nullable<InitialValues>>;
