const projects = [
    {pno:"p001", pname:"전자인사관리시스템", pdes:"기업 내 인사관리"},
    {pno:"p002", pname:"도서관리시스템", pdes:"기업 내 도서관리"},
    {pno:"p003", pname:"IaaS 서비스", pdes:"기업 내 IaaS 서비스"},
    {pno:"p004", pname:"PaaS 서비스", pdes:"기업 내 PaaS 서비스"},
    {pno:"p005", pname:"SaaS 서비스", pdes:"기업 내 SaaS 서비스"},
    {pno:"p006", pname:"AI보안시스템", pdes:"기업 내 AI보안시스템"}
]
function setText(value){
    if(document.getElementById('radio').checked){
        document.getElementById('pNum').value = projects[value].pno;
        document.getElementById('pName').value = projects[value].pname;
        document.getElementById('pDes').value = projects[value].pdes;
    }
}