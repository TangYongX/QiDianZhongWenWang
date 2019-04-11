
document.getElementById('my').onclick = function(){
    location.href = 'logon.html';
}
window.onload = function(){
    // 倒计时

    /*
    let day = document.getElementsByClassName('timer')[0].innerHTML;
    let timer = document.getElementsByClassName('Minute')[0].innerHTML;
    let Minute = document.getElementsByClassName('second')[0].innerHTML;
    let Second = document.getElementsByClassName('MilliSecond')[0].innerHTML;
    let mytimer = setInterval(()=>{
        Second--;
        if(Second <= 0){
            Second = '59';
            Minute--;
            if(Minute <= 0){
                Minute = "59";
                timer--;
            }if(timer <= 0){
                timer = '00';
                if(day <= 0){
                    day = '00';
                    // timer = '23';
                }else{
                    day--;
                    timer = '23';
                }
            }
        }
        document.getElementsByClassName('timer')[0].innerHTML = day;
        document.getElementsByClassName('Minute')[0].innerHTML = timer;
        document.getElementsByClassName('second')[0].innerHTML = Minute;
        document.getElementsByClassName('MilliSecond')[0].innerHTML = Second;
    },10)
    */
    // switch(表达式){
// 	case 表达式1:语句一;break;
// 	case 表达式2:语句二;break;
// 	case 表达式3:语句三;break;
// 	……
// 	case 表达式n:语句n;break;
// 	default:默认语句
// }
    function text(arr){
        let num = arr<10?'0'+arr:arr;
        return num;
    }

    let timer = setInterval(()=>{
        let nowTime = new Date();
        let setTimer = new Date('2019/4/29 00:00:00');
        let str = setTimer.getTime() - nowTime.getTime();

        let day = parseInt(str/(60*60*24*1000));
        let hour = parseInt(str/(60*60*1000)%24);
        let minute = parseInt(str/(60*1000)%60);
        let second = parseInt(str/1000%60);

        if((day<=0)&&(hour<=0)&&(minute<=0)&&(second<=0)){
            clearInterval(timer);
        }
        document.getElementsByClassName('timer')[0].innerHTML = text(day);
        document.getElementsByClassName('Minute')[0].innerHTML = text(hour);
        document.getElementsByClassName('second')[0].innerHTML = text(minute);
        document.getElementsByClassName('MilliSecond')[0].innerHTML = text(second);
    },1000)




}
