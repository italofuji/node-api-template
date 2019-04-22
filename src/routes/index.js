import controllers from '../controllers';
import middlewares from './middlewares';

const routes = (app) => {

    app.post("/", controllers.DemoController);

}   
    

export default routes;