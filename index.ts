import express from 'express';
import { V1DefaultRoutes } from './src/bff/api/defaultRouter';
import { ProductRoutes } from './src/bff/api/productRouter';
import { PORT } from './src/bff/config';
import { authenticateToken } from './src/bff/middleware';
import { NotFound } from 'http-errors';
var cors = require('cors');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

var allowedOrigins = ['http://localhost:3000', 'http://localhost:3001'];
app.use(cors({
    origin: function (origin: any, callback: any) {
        // allow requests with no origin 
        // (like mobile apps or curl requests)
        if (!origin) return callback(null, true);
        if (allowedOrigins.indexOf(origin) === -1) {
            var msg = 'The CORS policy for this site does not ' +
                'allow access from the specified Origin.';
            return callback(new Error(msg), false);
        }
        return callback(null, true);
    }
}));

app.use('/v1', V1DefaultRoutes());
app.use('/v1/api/products', authenticateToken, ProductRoutes());

// catch 404
app.use(function (req: express.Request, res: express.Response, next: express.NextFunction) {
    res.status(404).json({ success: false, ...NotFound(), data: {} });
});

// error handler
app.use(function (err: Error, req: express.Request, res: express.Response, next: express.NextFunction) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    res.status(500).json({ success: false, message: err.message, data: {} });
});

app.listen(PORT, () => {
    console.log("Server is Successfully Running, and App is listening on port " + PORT)
}
);