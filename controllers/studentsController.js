import studentModel from "../models/studentModel.js";

/** create new todo */
export const createStudent = async(req, res) => {
    try{
        const { name, email, phone, endrollNumber, dateOfAdmissoin } = req.body;
        const userId = req.userId;

        /** create new todo  */
        const newStudent = new studentModel({
            userId,
            name,
            email,
            phone,
            endrollNumber,
            dateOfAdmissoin: new Date(dateOfAdmissoin)
        })
        await newStudent.save()
            return res.status(200).json({
                message: "students data created succussfully...",
                data: newStudent
            });
    }
    catch(error){
        return res.status(500).json({
            message: "Internal Server Error!!!",
            error: error.message
        });
    }
}

/**
 * REQ: INPUT
 * RES: OUTPUT
 * METHOD: GET
 * PATH: /getAllFunction
 */
export const getallStudents = async(req, res)=>{
    try{
        const userId = req.userId;
        //Chech the user is 
        if(!userId){
            return res.status(400).json({
                message: "Unautharaized!!!",
            });
        }
        //get all the data over here
        const getAllData = await studentModel.find({ userId });
        if(getAllData){
            return res.status(200).json({
                message: "Atlas data fetched successfuly!!!",
                data: getAllData
            });
        }
        else{
            return res.status(404).json({
                message: "Atlas couldn't fetch the data"
            });
        }

    }
    catch(error){
        return res.status(500).json({
            message: "Internal server Error!!!",
            error: error.message
        });
    }
}

/**
 * REQ: INPUT
 * RES: OUTPUT
 * METHOD: GET
 * PATH: /getById
 */
export const getById = async(req, res) => {
    try{
        const { id } =  req.params;
        const databyId = await studentModel.findById(id);

        if(databyId){
            return res.status(200).json({
                message: "Atlas data fetched successfully!!",
                data: databyId
            });
        }
        else{
            return res.status(404).json({
                message: "Atlas could not fetch the data!!!",
            });
        }

    }
    catch(error){
        return res.status(500).json({
            message: "Intenal server error!!",
            error: error
        });
    }
}

/**
 * REQ: INPUT
 * RES: OUTPUT
 * METHOD: PUT
 * PATH: /updateStudentById
 */
export const updateStudentById = async(req, res) => {
    try{
        const { id } = req.params;
        const updateById = await studentModel.findByIdAndUpdate(id, req.body, { new: true});
        if(updateById){
            return res.status(200).json({
                message: "Atlas, Data updated successfully!!!",
                data: updateById
            });
        }
        else{
            return res.status(404).json({
                message: "Atlas, couldn't fetch the data!!!!",
            });
        }

    }
    catch(error){
        return res.status(500).json({
            message: "Internal server error!!",
            error: error.message
        });
    }
};

/**
 * REQ: INPUT
 * RES: OUTPUT
 * METHOD: DELETE
 * PATH: /deleteStudentById
 */
export const deleteStudentById  = async(req, res) => {
    try{
        const { id } = req.params;
        const deleteById = await studentModel.findByIdAndDelete(id); 
        if(deleteById){
            return res.status(200).json({
                message: "Atlas, data deleted successfully!!",
                data: deleteById
            });
        }
    }
    catch(error){
        return res.status(500).json({
            message: "Internal server Error!!",
            error: error.message
        });
    }
};