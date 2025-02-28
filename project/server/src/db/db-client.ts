import { Connection, createConnection } from 'typeorm';
import { Todo } from '../entities/Todo';

export const createDB = async (): Promise<Connection> => {
  console.log('DB_HOST:', process.env.DB_HOST);
  console.log('DB_USERNAME:', process.env.DB_USERNAME);
  console.log('DB_PASSWORD:', process.env.DB_PASSWORD);
  console.log('DB_DATABASE:', process.env.DB_DATABASE);
  try {
    const connection = await createConnection({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      database: process.env.DB_DATABASE,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      logging: false, // !(process.env.NODE_ENV === "production"),
      synchronize: false, // !(process.env.NODE_ENV === "production"), // entities에 명시된 데이터 모델들을 DB에 자동으로 동기화
      entities: [Todo], // entities 폴더의 모든 데이터 모델이 위치해야 한다.
      extra: {
        connectTimeout: 80000, // (밀리초 단위)
      },
    });
    console.log('Database connection established successfully.');
    return connection;
  } catch (error) {
    console.error('Error connecting to the database:', error);
    throw error; // 필요에 따라 에러를 다시 던져 상위 코드에서 처리할 수 있음
  }
};
