const roomDimensions = {
    width: 50,
    height: 100,
    getArea: function(){
        return this.width * this.height;
    }
};

const boundGetArea = roomDimensions.getArea.bind(roomDimensions);

console.log(boundGetArea());