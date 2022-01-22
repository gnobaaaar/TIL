let month = prompt("월 입력 : ", "");

if(month ==1 || month ==3 || month ==3 ||month ==5 ||month ==7 ||month ==8 ||month ==10 ||month ==12){
    console.log('${month}월은 31까지 있습니다.');
}else if(month==2){
    console.log('${month}월은 28까지 있습니다.');
}
else if(month==4||month==6||month==9||month==11){
    console.log('${month}월은 30까지 있습니다.');
}
else{
    console.log('${month}월이 맞는지 확인하세요');
}