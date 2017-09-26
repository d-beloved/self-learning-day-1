export default class churchMember {

  constructor(name, nameOfChurch, subGroup = 'Church member functions in subgroup') {
    // this implements encapsulation
    // name and nameOfChurch can only be accessed via instance method
    const data = {name, nameOfChurch};
    this.getName = () => data.name;//instance method
    this.getNameOfChurch = () => data.nameOfChurch;//instance method
    this.setName = name => data.name = name;//instance method

    this.subGroup = subGroup;
  }

  subGroup() {
    return this.subGroup;
  }

  instanceOf() {
    return 'churchMember';
  }
  
}