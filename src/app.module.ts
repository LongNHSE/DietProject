import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FoodTypeModule } from './food_type/food_type.module';
import { FoodModule } from './food/food.module';

@Module({
  imports: [FoodTypeModule, FoodModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
