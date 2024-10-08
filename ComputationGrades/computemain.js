
let q1,q2,q3;
let item1,item2,item3;

    let result = 0;
    let percent = 0;
    let res = 0;
function computeQuiz(){

    q1 = parseInt(document.getElementById("txtq1").value);
    q2 = parseInt(document.getElementById("txtq2").value);
    q3 = parseInt(document.getElementById("txtq3").value);

    item1 = parseInt(document.getElementById("ItemsQ1").value);
    item2 = parseInt(document.getElementById("ItemsQ2").value);
    item3 = parseInt(document.getElementById("ItemsQ3").value);

    result = q1+q2+q3;
    percent = item1+item2+item3;
    s = (result/percent)*100;
    res = (result/percent)*20;
    document.getElementById("totalQuizzes").value = s.toFixed(2);
    document.getElementById("itemQuiz").value = res.toFixed(2);
}
document.getElementById("btnQuiz").addEventListener("click", computeQuiz);

let pt1,pt2,pt3;
let score1,score2,score3;

    let final = 0;
    let finals = 0;
    let rest= 0;
function pT(){

    pt1 = parseInt(document.getElementById("Pt1").value);
    pt2 = parseInt(document.getElementById("Pt2").value);
    pt3 = parseInt(document.getElementById("Pt3").value);

    score1 = parseInt(document.getElementById("S1").value);
    score2 = parseInt(document.getElementById("S2").value);
    score3 = parseInt(document.getElementById("S3").value);

    final = pt1+pt2+pt3;
    finals = score1+score2+score3;
    r = (final/finals)*100;
    rest = (final/finals)*60;
    document.getElementById("totalPt").value = r.toFixed(2);
    document.getElementById("totalScore").value = rest.toFixed(2);
}
document.getElementById("btnPt").addEventListener("click", pT);

let exam;
let totalOfExam;

    let results = 0;
    let resu = 0;
function computeExam(){

    exam = parseInt(document.getElementById("ExamScore").value);
    
    totalOfExam = parseInt(document.getElementById("ItemsExam").value);
    

    examF = (exam/totalOfExam)*100;
    resu = (exam/totalOfExam)*20;
    document.getElementById("totalExam").value = examF.toFixed(2);
    document.getElementById("resuExam").value = resu.toFixed(2);
}
document.getElementById("btnExam").addEventListener("click", computeExam);

let grade = 0;

function computeGrade(){

    grade = (res+rest+resu);

    document.getElementById("grade").value = grade.toFixed(4);

}
document.getElementById("output").addEventListener("click", computeGrade);

