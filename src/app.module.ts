import { Module } from '@nestjs/common';
import { BlogModule } from './blog/blog.module';
import { MongooseModule } from '@nestjs/mongoose';


@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://adxambek:kG3Lq6q4Jq6oSRBi@cluster0.mfleizm.mongodb.net/'),BlogModule],
  controllers: [],
  providers: [],
})
export class AppModule {}

// username - adxambek
// password - kG3Lq6q4Jq6oSRBi
