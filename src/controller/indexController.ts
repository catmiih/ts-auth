import app from "../config/routes";

let indexRoute = app;

indexRoute.get("/", async (request, response) => {
    console.log('test route')
});

export {indexRoute};