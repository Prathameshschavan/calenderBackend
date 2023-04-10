const Data = require("../model/model");


async function enrollFun(hours){

    try {
        let arr = await Data.find().limit(300);
        let num = 0;
        var todaysData = new Date();
        let day = todaysData.getDay();
        if(day==5){
            num+=3;
        }
        else if(day==6){
            num+=2;
        }
        else if(day==0){
            num+=1;
        }
        else{
            num+=1;
        }

        var res = todaysData.setDate(todaysData.getDate() + num);
        let start = new Date(res)
        let Startday = start.getDay();

        let consumed = 0;
        
        let response = [];
        
       let afterJoiningAdd =0;
        for(let i =0; i<arr.length; i++){
             let  todaysDate = new Date(start);

             let courseStart = todaysDate.setDate(todaysDate.getDate() + afterJoiningAdd);
             let courseStartDate = new Date(courseStart)
             let day = courseStartDate.getDay();

            if(consumed+(+arr[i].duration)<= hours*60){
               
                if(day ==6){
                    afterJoiningAdd+=2
                    continue;
                }

               
                
                consumed+=(+arr[i].duration);
                
                let month = courseStartDate.getMonth()+1;
                
                if(month<10){
                    month="0"+month;
                }
                let year =courseStartDate.getFullYear();
                let date = courseStartDate.getDate();
                if(date<10){
                    date="0"+date;
                }
                let obj ={
                    id: arr[i].id,
                    title: arr[i].title,
                    description: arr[i].description,
                    type: arr[i].type,
                    duration: 16,
                    start: year+"-"+month+"-"+date,
                    end: year+"-"+month+"-"+date
                }
                response.push(obj);
            }
            else{
                consumed=0;
                i--;
                afterJoiningAdd++;
            }
        }

        return response;
    } catch (error) {
        throw new Error(error)
    }

}

module.exports = enrollFun