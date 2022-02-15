import { ExperienceDetails } from './experience-details';
export interface Experiences {
  id : number;
  cargo : string;
  inicio : string;
  fim : string;
  empresa : string;
  experience_details : ExperienceDetails[];
}
