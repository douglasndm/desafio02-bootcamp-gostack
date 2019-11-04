import Sequelize from 'sequelize';
import databaseConfig from '../config/database';

import Admin from '../app/models/Admin';
import Students from '../app/models/Student';
import Plans from '../app/models/Plan';
import Enrolment from '../app/models/Enrolment';
import CheckIn from '../app/models/CheckIn';

const models = [Admin, Students, Plans, Enrolment, CheckIn];

class Database {
    constructor() {
        this.init();
    }

    init() {
        this.connection = new Sequelize(databaseConfig);

        models.map(model => model.init(this.connection));
    }
}

export default new Database();
