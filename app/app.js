import {sampleComponent} from "./components/sample/sample.component";
import routing from "./app.routes";

const appName = 'sampleApp';

angular.module(appName,['ui.router'])
    .component('sample',sampleComponent)
    .config(routing);
