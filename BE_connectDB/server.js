import express from "express";
import oracledb from "oracledb";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/employee-report/:department",async(req,res) => {
    let connection;

    try {
        connection = await oracledb.getConnection(
            {
                user : "report_user",
                password : "report123",
                connectString : "localhost:1521/XEPDB1"
            }
        )
        const result = await connection.execute(
            `select empid,emp_name,department,designation,salary from employees where department = :dept`,
            {dept: req.params.department},
            { outFormat : oracledb.OUT_FORMAT_OBJECT }
        );
        res.json(result.rows);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error : error.message})
    }
    finally{
        if(connection){
            await connection.close();
        }
    }
});

app.listen(3000,()=>{
    console.log("server connected");
})