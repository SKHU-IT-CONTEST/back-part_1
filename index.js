const schoolNotice = require("./crawl-lib/schoolNotice.js");
const express = require("express");
const app = express();
const jebal = new schoolNotice();

app.use(express.json());
app.use(express.urlencoded({ extended: true}));



app.get("/api/schoolNotice", (req, res) => {
    jebal.updateData().then((res2) => res.json(res2));
})

app.listen(32023, () => console.log("작동되게 해주세요 ㅠㅠ"));