import app from './app';
import { environment } from './configs';

// tslint:disable:no-console
app.listen(environment.PORT, () => console.log(`App listening on port ${environment.PORT}!`));
