import { Body, Controller, Delete, Get, HttpCode, Param, ParseIntPipe, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { BlogDto } from './dto/dto/blog.dto';
import { BlogService } from './blog.service';



@Controller()
export class BlogController {
    constructor(private readonly blogService: BlogService) { }

    @HttpCode(200)
    @Get()
    async getAll() {
        return this.blogService.getAllBlogs();
    }
    @HttpCode(201)
    @Post()
    @UsePipes(ValidationPipe)
    async create(@Body() dto: BlogDto) {
        return this.blogService.create(dto);
    }
    @HttpCode(200)
    @Get(":id")
    async getById(@Param("id", ParseIntPipe) id: number) {
        return this.blogService.getById(id);
    }
    @HttpCode(200)
    @Patch(":id")
    async update(@Param("id", ParseIntPipe) id: number, @Body() dto: BlogDto) {
        return this.blogService.update(id, dto);
    }
    @HttpCode(200)
    @Delete(":id")
    async delete(@Param("id") id: number) {
        return this.blogService.delete(id);
    }
}