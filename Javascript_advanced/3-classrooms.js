function createClassRoom(numbersOfStudents){
    function studentSeats(seat){
        return function(){
            return seat;
        };
    }
    let students = [];
    for (let i = 0; i < numbersOfStudents; i++) {
        students.push(studentSeats(i + 1));
    }
    return students;
}
let classRoom = createClassRoom(10);