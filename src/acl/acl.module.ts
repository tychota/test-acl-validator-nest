import { Module } from '@nestjs/common';
import { ACLService } from './acl.service';

@Module({
  providers: [ACLService],
  exports: [ACLService],
})
export class ACLModule {}
