import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import * as dotenv from 'dotenv';
import { Post } from 'src/posts/entity/post.entity';
import { User } from 'src/users/entities/user.entity';

dotenv.config();
export const databaseConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT, 10),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: [Post, User],
  synchronize: true,
  ssl: { rejectUnauthorized: false },
  autoLoadEntities: true,
  connectTimeoutMS: 10000,
  retryDelay: 3000,
  retryAttempts: 10,
  keepConnectionAlive: true,
  logging: true,
};
