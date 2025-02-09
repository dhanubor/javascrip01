const newSymp = Symbol("uniqueKey");

const mobileModel = {
    brand: 'samsung',
    model: 'realme c-12',
    processor: "Snapdrawn",
    camera: ['20mp', '12mp', '12mp'],
    hasZoomCamera: true,
    'selfie camera mp': 12,
    [newSymp]: 'MyKey1', 
    brandModel: function () {
        return `Mobile Brand is ${this.brand} and model is ${this.model}`;
    }
};

console.log(mobileModel.brandModel());
