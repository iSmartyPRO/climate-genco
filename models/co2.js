const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate-v2");
const Schema = mongoose.Schema;

const co2Schema = new Schema({
    location: String,
    date: mongoose.SchemaTypes.Date,
    ppm: mongoose.SchemaTypes.Number,
    temperature: mongoose.SchemaTypes.Number,
}, {
    timestamps: true,
    versionKey: false,
});
co2Schema.set("toJSON", {
    virtuals: true,
    versionKey: false,
    transform: function(doc, ret) {
        delete ret._id;
    },
});
co2Schema.plugin(mongoosePaginate);

module.exports = mongoose.model("co2", co2Schema);