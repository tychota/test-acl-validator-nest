import { accessInfos } from './abac.rules';
import { AccessControlRe } from 'accesscontrol-re';
import { Permission } from 'accesscontrol';
import { UnauthorizedException, ForbiddenException } from '@nestjs/common';

interface PermissionQuery {
  action: 'list' | 'create' | 'read';
  resource: 'profile';
  visitor: User | null;
  ressourceOwnerId: number;
}
interface User {
  userId: number;
  role: string;
}

export class ACLService {
  private accessControl: AccessControlRe;
  public constructor() {
    this.accessControl = new AccessControlRe(accessInfos).build();
  }

  public getPermisssionFor({
    action,
    resource,
    visitor,
    ressourceOwnerId,
  }: PermissionQuery) {
    const visitorId = visitor && visitor.userId;
    const possession = visitorId === ressourceOwnerId ? 'own' : 'any';
    const role = (visitor && visitor.role) || 'anonymous';
    return this.accessControl.permission({
      action,
      resource,
      role,
      possession,
    });
  }

  public assertGranted(permission: Permission, user: any) {
    if (!permission.granted) {
      if (!user) {
        throw new UnauthorizedException('Please connect');
      }
      throw new ForbiddenException('Unauthorized');
    }
  }
}
