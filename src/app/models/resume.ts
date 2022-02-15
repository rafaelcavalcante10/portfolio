import { Experiences } from './experiences';
import { Graduations } from './graduations';
export interface Resume {
  id : number;
  nome : string;
  informacao : string;
  endereco : string;
  bairro : string;
  cidade : string;
  telefone : string;
  email : string;
  graduations : Graduations[];
  experiences : Experiences[];
}
