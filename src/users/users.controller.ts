import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  ParseIntPipe,
  HttpCode,
  HttpStatus,
  Logger,
  // UseInterceptors,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
// import { LoggingInterceptor } from 'src/common/interceptor/logging-interceptor';

@Controller('users')
// @UseInterceptors(LoggingInterceptor)
export class UsersController {
  logger = new Logger('RequestLogger');

  constructor(private readonly usersService: UsersService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() createUserDto: CreateUserDto): Promise<User> {
    this.logger.log('Headers:', JSON.stringify(createUserDto));
    return await this.usersService.create(createUserDto);
  }

  @Get()
  findAll(): Promise<User[]> {
    return this.usersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number): Promise<User> {
    return this.usersService.findOne(id);
  }

  @Delete(':id')
  async removeOne(@Param('id') id: string): Promise<void> {
    await this.usersService.removeOne(parseInt(id, 10));
  }
}
