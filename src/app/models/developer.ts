import { Experiences } from './experiences';
import { Graduations } from './graduations';
export interface Developer {
  id : number;
  nome : string;
  nascimento : string;
  endereco : string;
  bairro : string;
  cidade : string;
  email : string;
  site : string;
  telefone : string;
  sobre : string;
  resumo : string;
  informacao : string;
  cargo : string;
  cargocompleto : string;
  idade : number;
  graduations : Graduations[];
  experiences : Experiences[];
}
