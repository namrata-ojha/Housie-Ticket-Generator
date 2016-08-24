        $(document).ready(function(){
               
        var count =0;
        var baseArrayNew = new Array(0,9,19,29,39,49,59,69,79,90);
        var baseArrayStart = new Array(0,1,10,20,30,40,50,60,70,80);
        var number = 0;               
        var base = 0;
        var selectRow=0 ;
        var j =0 ;
        var newNo=0;
        var countArray =0;
        var arrNew = [];  
        var arr = []
        var aryKeyValue = [];
        var arrKeyValuePair=[];
                
        publish();
               
        function init(){
            arrKeyValuePair=[];
            aryKeyValue = [];
         arrKeyValuePair=[];
             arr = [];
             arrNew = []; 
             count =0;
             number = 0; 
             base = 0; 
             selectRow=0 ;  
             j =0 ;
             newNo=0;
             countArray =0;

                    arr=    getRandomColumn();
                     arr.sort(function(a, b){return a-b});
                  for(var i = 0; i<arr.length; i++){
                   
                    var num=getRandomNum(arr[i]);
                    if(checkUniqueNess(num,arrKeyValuePair)==false){
                     while(checkUniqueNess(num,arrKeyValuePair)==false){
                      var num=getRandomNum(arr[i])
                     }
                     //console.log(" true ");  
                    }   
                        pushToAry(arr[i],num);
                        sortArray(arrKeyValuePair,arr[i],num);
                         
                    }
                    return arrKeyValuePair;
                    //publish(arrKeyValuePair);
                   // printArray(arrKeyValuePair);
                }
           // get random columns 	
        function getRandomColumn(){

                while(arr.length <15){
                      var randomnumber=Math.ceil(Math.random()*9)
                      var found=false;
                      if(count>=5 && count<10){
                            randomnumber=randomnumber+10;
                        }else if(count>=10){
                             randomnumber=randomnumber+20;
                        }
                      for(var i=0;i<arr.length;i++){
                        
                        if(arr[i]==randomnumber){
                          found=true;
                          break;
                        }
                      }
                      if(!found){
                        arr[arr.length]=randomnumber;
                        count++;
                    }
                    }
               return arr;
             }
             //get random nuumber for respective column
        function getRandomNum(i){
          var start =0;
                    if(i>10){
                            // convert number to a string, then extract the first digit
                    var one = String(i).charAt(1);
                    // convert the first digit back to an integer
                    newNo =Number(one); 
                     j =newNo ;  
                           }
                    else{
                        j = i ;
                        }
                     base = (baseArrayNew[j]);
                     start =  baseArrayStart[j];
                    //return Math.floor(Math.random() * (max - min + 1)) + min;
                    
                    number = Math.floor(Math.random() * (base-start + 1)) + start;
                    
                   //number = base + Math.floor(Math.random()*9)+1;
                    return   number;      
                        }
        //check for uniqueness                
        function checkUniqueNess(number,arrNew){
             var res =0 ;
              var value=0;
                   var found =false;

                    for(var i=0;i<arrNew.length;i++){
                         res = arrNew[i].split(":");
                          value=res[1];
                        if(value==number){
                          found=true;
                          return false;
                          break;
                          
                        }
                      }
                       if(!found){
                       // arrNew[arrNew.length]=number;
                        return true;
                       
                    }
                            
        }
        //sort the array
        function sortArray(arr,keySort,num){
               var res =0 ;
               var key =[];
               var value=[];
                var arySort = [];
                var sort = false;
                 value[value.length]=num;  
               for(var i=0;i<arr.length;i++){
                 
                res = arr[i].split(":");
                  //console.log("RES : "+ res);
                 key=res[0];
                 if(keySort+10==key || keySort+20==key ||keySort-10==key || keySort-20==key){
                 //console.log("key : "+ key);
                  value[value.length]=res[1];  
                  sort = true; 
               }
           }
              
               if (sort){
                 value.sort(function(a, b){return a-b});
                 arrangeSort(arr,key, value)
               }
            
             }
// arrange the array
        function arrangeSort(arr, keyOld,val) {
              var str ;
              var j=0 ;
               for(var i=0;i<arr.length;i++){
                 
                res = arr[i].split(":");
               //  console.log("RES : "+ res);
                 key=res[0];
                 if(keyOld+10==key || keyOld+20==key ||keyOld== key||keyOld-10==key || keyOld-20==key){
                //console.log("key : "+ key);
                   str = key+":"+val[j] ;
                  //  console.log("str : "+ str);
                  arr[i]=str;
                  j++;
               }
            }
            } 
// add to arr random no. with random columns
        function pushToAry(name, val) {
            arrKeyValuePair.push(name+":"+val);
             return  arrKeyValuePair;
              
            }
        function publish() {
        var res =0 ;
        var value=0;
        var key =0;
        var rownum=0;
        var aryKeyValue =[];
        for(var j =1;j<=12;j++){
        aryKeyValue=  init();
        var table = document.getElementById("table"+j);
            for(var i=0;i<aryKeyValue.length;i++){
                res = aryKeyValue[i].split(":");
                key=res[0];
                value=res[1];
               // console.log("KEY "+key);
                if(key>10){

              rownum= ~~(key/10);
                }else{
                    rownum=0;
                }
                // console.log("rownum: "+rownum);
                 table.rows[rownum].cells["cell"+key].innerHTML=value;
            }
        }
         }
// clear all colums
    function clear() {
        
        for(var j =1;j<=12;j++){
        var table = document.getElementById("table"+j);
        for(var row =0 ;row<=2;row++){
            for(var i=1+(row*10);i<=9+(row*10);i++){
                if (i==10||i==20){

                }else{
                     table.rows[row].cells["cell"+i].innerHTML="";
                }
                
            }
        }
        }
         }
// print command to check
        function printArray(aryKeyValue) {
              
            for(var i=0;i<aryKeyValue.length;i++){
            console.log( aryKeyValue[i]);
            }
            }
           
    function printDiv() {
            var toPrint = document.getElementById('printarea');
            var popupWin = window.open('', '_blank', 'width=350,height=150,location=no,left=200px');
            popupWin.document.open();
            popupWin.document.write('<html><title>::Preview::</title><link rel="stylesheet" type="text/css" href="assets/css/style.css" /></head><body onload="window.print()">')
            popupWin.document.write(toPrint.innerHTML);
            popupWin.document.write('</html>');
            popupWin.document.close();
    }

            	 
                $('#newCard').click(function(){
                    clear();
                    publish();
                });

                $('#printBut').click(function(){
                   printDiv()
                });
            	 
        
            });