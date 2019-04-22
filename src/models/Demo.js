import mongoose, { Schema } from 'mongoose';
import mongoosePaginate from 'mongoose-paginate-v2';

const DemoSchema = new Schema({
    images: [String],
    create_time: Date,
    message: String,
    id: Number,
});

DemoSchema.plugin(mongoosePaginate);

export default mongoose.model('Demo', DemoSchema);