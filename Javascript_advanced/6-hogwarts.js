const studentHogwarts = () => {
    let privateScore = 0;
    let name = null;

    const changeScoreBy = (points) => {
        privateScore += points;
    };

    const setName = (newName) => {
        name = newName;
    };
    const rewardStudent = () => {
        changeScoreBy(1);
    };
    const penalizeStudent = () => {
        changeScoreBy(-1);
    };
    const getScore = () => {
        return `${name}: ${privateScore}`;
    };

    return {setName, rewardStudent, penalizeStudent, getScore};
};

const harry = studentHogwarts();
harry.setName('Harry');
harry.rewardStudent();
harry.rewardStudent();
harry.rewardStudent();
harry.rewardStudent();

console.log(harry.getScore());

const draco = studentHogwarts();
draco.setName('Draco');
draco.rewardStudent();
draco.penalizeStudent();
draco.penalizeStudent();
draco.penalizeStudent();

console.log(draco.getScore());