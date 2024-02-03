const roomDimensions = {
	width: 50,
	lenght: 100,
	getArea: function() {
		return this.width * this.lenght;
	}
};

const boundGetArea = roomDimensions.getArea.bind(roomDimensions);
