const express = require("express");
const app = express();
const user = require("./route/authRoute");

// app.use(bodyParse.urlencoded({ extended: false }));
// app.use(bodyParse.json());
// app.use(cors());
// app.use(express.json());

app.use("/api/", user);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listining on port ${port}...`));
