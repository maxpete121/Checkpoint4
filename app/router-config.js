import { AccountController } from "./controllers/AccountController.js";
import { HomeController } from "./controllers/HomeController.js";
import { QuoteController } from "./controllers/QuoteController.js";
import { ToDoController } from "./controllers/ToDoController.js";
import { BackgroundController } from "./controllers/backGroundController.js";
import { WeatherController } from "./controllers/weatherController.js";
import { AuthGuard } from "./services/AuthService.js";
import { Router } from "./utils/Router.js";


export const router = new Router([
  {
    path: '',
    controllers: [ToDoController, WeatherController, BackgroundController, QuoteController],
    view: 'app/views/HomeView.html'
  },
  {
    path: '#/about',
    view: 'app/views/AboutView.html'
  },
  {
    path: '#/account',
    middleware: [AuthGuard],
    controllers: [AccountController],
    view: 'app/views/AccountView.html',
  }
])




