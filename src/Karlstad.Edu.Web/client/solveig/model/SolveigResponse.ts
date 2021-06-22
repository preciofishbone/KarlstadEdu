import { SolveigItem } from "./SolveigItem";

export interface SolveigResponse{
    hitsPerPage:number,
    results:Array<SolveigItem>
}