import { Question } from "./question";

export interface Assessment {
    id: number;
    caseName: string;
    complete: boolean;
    questions?: Question[];
}
