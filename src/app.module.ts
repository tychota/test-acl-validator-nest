import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { ACLModule } from './acl/acl.module';

@Module({
  imports: [AuthModule, ACLModule, UsersModule],
  controllers: [AppController],
})
export class AppModule {}
