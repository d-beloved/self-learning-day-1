import churchMember from './main';
//implementing inheritance
export default class Tayo extends churchMember {

  constructor(name, nameOfChurch) {
    super(name, nameOfChurch);
    
  }

  subGroup() {
    return 'works in Ushering subgroup'
  }

}