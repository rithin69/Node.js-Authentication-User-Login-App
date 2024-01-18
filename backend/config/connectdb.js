import mongoose from "mongoose"
const Connectdb = async () => {
try {
const conn = await mongoose.connect(process.env.MONGO_URI, {
// useNewUrlParser: true,
// useUnifiedTopology: true,


});
console.log(`MongoDB Connected: ${conn.connection. host}`);
} catch (error) {
console.log(`Error: ${error.message}`);
process.exit();
}
};
export default Connectdb;