
export const getTime=()=>{
  let time = "";
  const hour=new Date().getHours();
  if(hour<=6){
    time="凌晨"
  }
  else if(hour<=9){
    time="早上";
  }
  else if(hour<12){
    time="上午";
  }
  else if(hour<18){
    time="下午";
  }
  else{
    time="晚上";
  }
  return time;
}
