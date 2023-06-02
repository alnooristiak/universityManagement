import mongoose from "mongoose";
import app from "./app";
import config from "./config/index";

async function bootstrap() {
    try {
        await mongoose.connect(config.database_url as string);
        console.log(`database connect succesfully`)
        // leastining port
        app.listen(config.port, () => {
            console.log(`Applicaation Listening Port ${config.port}`)
        })
    } catch (err) {
        console.log('its an error', err)
    }
}

bootstrap();
