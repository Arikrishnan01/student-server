import  mongoose  from "mongoose";

const StudentSchema = new mongoose.Schema({
  
  name:{
    type: String,
    required: true
  },
  email:{
    type: String,
    required: true,
    lowercase: true
  }  ,
  phone: {
    type: String,
    required: true
  },
  endrollNumber: {
    type: String,
    required: true
  },
  dateOfAdmissoin: {
    type: Date,
    required: true,
    default: Date.now
  },
  userId: {
    type:mongoose.SchemaTypes.ObjectId,
    required:true,
    ref:"Users" 
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model('students', StudentSchema);