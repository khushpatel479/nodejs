let express = require("express")
let app = express()

app.use(express.json())
let module2 = express.Router()
let std = require("./std1")
let data = require("./data")
module2.put("/:sno",(req,res)=>
{
    console.log("Update")
    let updates = req.body
    console.log(updates)
    // console.log(req.params.sno," - ",req.body.fees)
    std.findOneAndUpdate({sno:req.params.sno},updates,{"fees":req.body.fees})
    console.log(req.body.fees)
})




module.exports = module2

// const express = require("express");
// const std = require("./std1");

// const router = express.Router();

// // Update handler
// router.put(":sno", async (req, res) => {
//     try {
//         const sno = req.params.sno;
//         const updates = req.body;

//         // Update the record
//         const updatedDoc = await std.findOneAndUpdate(
//             { sno: sno },
//             updates,
//             { new: true } // Return the updated document
//         );

//         if (!updatedDoc) {
//             return res.status(404).json({ message: "Record not found" });
//         }

//         res.status(200).json(updatedDoc);
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ message: "Internal Server Error", error });
//     }
// });

// module.exports = router;