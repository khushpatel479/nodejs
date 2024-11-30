let mn = require("mongoose")
let sc = new mn.Schema(
    {
        sno: Number,
        sname: String,
        fees: Number,
        course: String,
      }
)
module.exports = mn.model("std1",sc)