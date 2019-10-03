import {
  Controller,
  Request,
  Post,
  UseGuards,
  Get,
  Param,
  NotFoundException,
  ParseIntPipe,
  ForbiddenException,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth/auth.service';
import { UsersService } from './users/users.service';
import { ACLService } from './acl/acl.service';
import { OptionalJwtAuthGuard } from './auth/auth.guard';

@Controller('api')
export class AppController {
  constructor(
    private readonly authService: AuthService,
    private readonly aclService: ACLService,
    private readonly usersService: UsersService,
  ) {}

  @UseGuards(AuthGuard('local'))
  @Post('login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('me')
  getProfile(@Request() req) {
    return req.user;
  }

  @UseGuards(OptionalJwtAuthGuard)
  @Get('profile/:id')
  async getProfileById(
    @Request() req,
    @Param('id', new ParseIntPipe()) id: number,
  ) {
    const permission = this.aclService.getPermisssionFor({
      action: 'read',
      resource: 'profile',
      visitor: req.user,
      ressourceOwnerId: id,
    });
    this.aclService.assertGranted(permission, req.user);

    const user = await this.usersService.findOneById(id);

    if (!user) {
      throw new NotFoundException('No user');
    }

    return permission.filter(user);
  }
}
