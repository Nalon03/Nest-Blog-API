import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Post } from './entity/post.entity';
import { CreatePostDto } from './dto/create-post.dto';
import { UsersService } from '../users/users.service';

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(Post)
    private postsRepository: Repository<Post>,
    private usersService: UsersService,
  ) {}

  async create(createPostDto: CreatePostDto): Promise<Post> {
    console.log('CreatePostDto:', createPostDto);

    const user = await this.usersService.findOne(createPostDto.userId);
    if (!user) {
      throw new NotFoundException('User not found');
    }

    console.log('Found User:', user);

    const post = this.postsRepository.create(createPostDto);
    console.log('Created Post Object:', post);

    const savedPost = await this.postsRepository.save(post);
    console.log('Saved Post:', savedPost);
    return savedPost;
  }

  async findAll(): Promise<Post[]> {
    return await this.postsRepository.find({
      relations: ['user'],
    });
  }

  async findByUser(userId: number): Promise<Post[]> {
    return await this.postsRepository.find({
      where: { userId },
      relations: ['user'],
    });
  }

  async findOne(id: number): Promise<Post> {
    const post = await this.postsRepository.findOne({
      where: { id },
      relations: ['user'],
    });
    if (!post) {
      throw new NotFoundException('Post not found');
    }
    return post;
  }
}
