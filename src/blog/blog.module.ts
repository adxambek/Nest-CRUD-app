import { Module } from '@nestjs/common';
import { BlogService } from './blog.service';
import { BlogController } from './blog.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Blog, BlogSchema } from './blog.schema';

@Module({
  controllers: [BlogController],
  providers: [BlogService],
  imports: [MongooseModule.forFeature([{name:Blog.name,schema:BlogSchema}])]
})
export class BlogModule {}

