import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  ParseIntPipe,
  Logger,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { PostsService } from './post.service';
import { CreatePostDto } from './dto/create-post.dto';
import { Post as PostEntity } from './entity/post.entity';

@Controller('posts')
export class PostsController {
  private readonly logger = new Logger(PostsController.name);

  constructor(private readonly postsService: PostsService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() createPostDto: CreatePostDto) {
    return this.postsService.create(createPostDto);
  }

  @Get()
  findAll(): Promise<PostEntity[]> {
    return this.postsService.findAll();
  }

  @Get('user/:userId')
  findByUser(
    @Param('userId', ParseIntPipe) userId: number,
  ): Promise<PostEntity[]> {
    return this.postsService.findByUser(userId);
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number): Promise<PostEntity> {
    return this.postsService.findOne(id);
  }
}
