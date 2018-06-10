var arrOrig=[{fullName : {surname : 'xxx', firstName : true, middleName: 'zzz',age: 3}}, {fullName : {surname : 'XXX', firstName : 'YYY', middleName: 'ZZZ',age: 31}}];
var arrLocation={"fullName.surname" : "Прізвище", "fullName.middleName" : "По-батькові"};
var arrRules={fullName : {surname : true, firstName : true, middleName: true, age:true}}; 
var arrResult=new Array();
var mainKey=Object.keys(arrOrig[0]);
var mainRuleKey=Object.keys(arrRules);
var arrLocationKeys=Object.keys(arrLocation);
var temp,curLocation,curVal;
var k=-1;
if (arrOrig.length>0){
  var arrOrigKeys=Object.keys(arrOrig[0][mainKey]);
  for (i=0; i<arrOrigKeys.length; i++) { 
    temp=mainKey+"."+arrOrigKeys[i];
    if (arrRules[mainRuleKey][arrOrigKeys[i]]){
      k++;
      if (arrLocationKeys.indexOf(temp) !=-1){
        curLocation=arrLocation[temp];
      }
      else{
        curLocation= arrOrigKeys[i];
      }
      //arrResult[k]= new Array({"name":curLocation });
    arrResult[k]= new Object({"name":curLocation });
      for (j=0; j<arrOrig.length; j++) { 
        curVal=arrOrig[j][mainKey][arrOrigKeys[i]];
        if (typeof curVal === typeof  true){
          if (curVal){
            curVal="Так";
          }
          else{
            curVal="Ні";
          }
        }
        //arrResult[k][0]["value"+(j+1)]=curVal;
    arrResult[k]["value"+(j+1)]=curVal;
      }
    }  
  }
}  
console.log(arrResult);