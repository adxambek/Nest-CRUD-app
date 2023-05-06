import { Injectable } from '@nestjs/common';
import { BlogDto } from './dto/dto/blog.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Blog, BlogDocument } from './blog.schema';
import { Model } from 'mongoose';

@Injectable()
export class BlogService {
    constructor(@InjectModel(Blog.name) private blogModel: Model<BlogDocument>) {}
    async getAllBlogs() {
        return this.blogModel.find();
    }
    
    async create(dto: BlogDto){
        return this.blogModel.create(dto);
    };

    async getById(id: number){
            return this.blogModel.findById(id);
    }

    async update(id: number, dto: BlogDto){
        return this.blogModel.findByIdAndUpdate(id, dto, {new: true})
    }

    async delete(id: number){
        return this.blogModel.findByIdAndRemove(id);
    }


}
