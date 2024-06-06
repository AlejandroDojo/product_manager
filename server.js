const express = require('express');
const cors = require('cors');
const app = express();
const ProductRoute = require('./server/routes/productRoutes')
require('./server/config/mongoose.config');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

ProductRoute(app);
app.listen(8000, () => {
    console.log("Listening at Port 8000")
})