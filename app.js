const express = require('express');
const userRoutes = require('./routes/userRoutes');

const app = express();
app.use(express.json());

// No security headers (intentional weakness)
app.use('/api', userRoutes);

app.listen(3000, () => {
    console.log('App running on port 3000');
});
