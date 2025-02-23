import { DataSource } from 'typeorm';
import { Todo } from '../entities/Todo';

export async function createDB() {
  console.log('DB_HOST:', process.env.DB_HOST);
  console.log('DB_USERNAME:', process.env.DB_USERNAME);
  console.log('DB_PASSWORD:', process.env.DB_PASSWORD);
  console.log('DB_DATABASE:', process.env.DB_DATABASE);
  console.log('NODE_ENV:', process.env.NODE_ENV);

  const AppDataSource = new DataSource({
    type: 'mysql',
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    database: process.env.DB_DATABASE,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    logging: false, // !(process.env.NODE_ENV === 'production'),
    synchronize: false, // !(process.env.NODE_ENV === 'production'), // entities에 명시된 데이터 모델들을 DB에 자동으로 동기화
    entities: [Todo], // entities 폴더의 모든 데이터 모델이 위치해야 한다.
  });

  AppDataSource.initialize()
    .then(() => {
      console.log('Entities:', AppDataSource.options.entities);
      console.log('Database connection established successfully.');
    })
    .catch((error) => console.log(error));
}
