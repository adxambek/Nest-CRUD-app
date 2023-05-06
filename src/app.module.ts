import { Module } from '@nestjs/common';
import { BlogModule } from './blog/blog.module';
import { MongooseModule } from '@nestjs/mongoose';


@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://name:<password>@cluster0.mfleizm.mongodb.net/'),BlogModule],
  controllers: [],
  providers: [],
})
export class AppModule {}

