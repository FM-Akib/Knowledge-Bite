const AddToDB=(id)=>{
const PreviousBM=GetPreviousBM();
PreviousBM[id]=5;
localStorage.setItem('bookmared',JSON.stringify(PreviousBM));
}


const GetPreviousBM=()=>{
    let BookMared={};
    const previousBM=localStorage.getItem('bookmared')
    if(previousBM){
        BookMared=JSON.parse(previousBM);
    }
    return BookMared;
}

const AddToTimeDB=(total)=>{
    // const previousTime=GetPreviousTime();
    // let total=previousTime+newtime;
    localStorage.setItem('totalTime',total+'')
}

const GetPreviousTime = () => {
  let previousTime = 0;
  const previousTotal =parseInt(localStorage.getItem("totalTime"));
  if (previousTotal) {
    previousTime = previousTotal;
  }
  return previousTime;
};




export {
    AddToDB,
    GetPreviousBM,
    AddToTimeDB,
    GetPreviousTime
}