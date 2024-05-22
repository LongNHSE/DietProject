import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FoodTypeModule } from './food_type/food_type.module';

@Module({
  imports: [FoodTypeModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
