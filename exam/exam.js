//task1
const school = [ 
    {nameSchool: "Amjilt Cyber School"},
    {phoneNumber: "8 705 697 57 26"},
    {students:  
        {studentName: "Aiganym", top: "24/5", progress:  85, lessons: 2 }, 
        studentName: "Aya", top: "24/8", progress:  91, lessons: 3 },  
        {studentName: "Baqbergen", top: "24/6", progress:  97, lessons: 3 },  
        {studentName: "Alikhan", top: "24/7", progress:  45, lessons: 1 },  
        {studentName: "Asylbek", top: "24/5", progress:  29, lessons: 2 },   
];

//////////////////////////////////////////////////////////
function changeSchoolName() {
    let newName = prompt("Жана атауды енгізіңіз:");
    school.nameSchool = newName;
}
console.log(changeSchoolName());


//////////////////////////////////////////////////////////
function changePhoneNumber() {
    var newPhone = +prompt("Жаңа телефон номерін жазыңыз:")
    school.phoneNumber = newPhone;
};

//////////////////////////////////////////////////////////
function listStudentNames() {
    // return alert (school.studentName.studentName.map);
}
console.log(listStudentNames());

//////////////////////////////////////////////////////////
function addStudent() {
    const pushStudent = [
        
    ]
    return school.push = pushStudent;
}
//////////////////////////////////////////////////////////
function applyDecreaseToTop() {
   let progressChange =  prompt("Орташа улгерімін өзгертуге арналға топты енгізіңіз");
    let tomendetu = prompt("Қанша пайызға төмендету қажет");

    return 
}
//////////////////////////////////////////////////////////

function stop() {
    if (menu() = "stop") {
        alert("Сау бол!"); 
}
}

const menu = prompt(`
        1. Оқу орталығынын атауын өзгерту
        2. Телефон нөмірін өзгерту 
        3. Студенттер атауын шығару
        4. Жаңа студент қосу
        5. Топқа пайыздық мөлшерде орташа үлгерімін төмендету
        6. Тоқтат
        - Таңдауыңызды енгізіңіз:
        ` );


while(true) {
    switch (menu) {
        case 1:
            changeSchoolName();
            break;
            case 2:
                changePhoneNumber();
                break; 
                case 3:
                listStudentNames();
                break;
                case 4:
                    addStudent();
                    break;
                    case 5:
                        applyDecreaseToTop();
                        break;
                        case 6:
                            stop();
                        break;
    }
};
