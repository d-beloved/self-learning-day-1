import { expect } from 'chai';
import churchMember from '../src/main';

describe('Testing churchMember class function',()=>{

  let ChurchMember = new churchMember('Tayo','Christ Like Assembly');
  it('Should return Tayo',()=>{
    expect(churchMember.getName()).to.equal('Tayo');
  })
  it('Should return Christ Like Assembly',()=>{
    expect(churchMember.getNameOfChurch()).to.equal('Christ Like Assembly');
  })
  it('Should return undefined',()=>{
    expect(churchMember.name).to.equal(undefined);
  })
  it('Should return the subgroup church member functions in',()=>{
    expect(churchMember.subGroup()).to.equal('Church member functions in subgroup');
  })

})