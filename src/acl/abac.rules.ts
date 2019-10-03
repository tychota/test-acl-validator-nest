import { IAccessInfo } from 'accesscontrol';

export const accessInfos: IAccessInfo[] = [
  {
    role: 'anonymous',
    resource: '*',
    action: 'list:own',
    attributes: ['*'],
    denied: true,
  },
  {
    role: 'admin',
    resource: 'profile',
    action: 'list:own',
    attributes: ['*'],
  },
  {
    role: 'admin',
    resource: 'profile',
    action: 'list:any',
    attributes: ['*', '!password'],
  },
  {
    role: 'user',
    resource: 'profile',
    action: 'list:own',
    attributes: ['*', '!role'],
  },
  {
    role: 'user',
    resource: 'profile',
    action: 'list:any',
    attributes: ['*', '!password', '!role'],
  },
  {
    role: 'admin',
    resource: 'profile',
    action: 'read:own',
    attributes: ['*'],
  },
  {
    role: 'admin',
    resource: 'profile',
    action: 'read:any',
    attributes: ['*', '!password'],
  },
  {
    role: 'user',
    resource: 'profile',
    action: 'read:own',
    attributes: ['*', '!role'],
  },
  {
    role: 'user',
    resource: 'profile',
    action: 'read:any',
    attributes: ['*', '!password', '!role'],
  },
];
