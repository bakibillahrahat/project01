import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { AdminInfo } from './admin.dto';

@Controller('manager')
export class ManagerController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('index')
  getIndex(): string {
    return 'Hello, Manager, Index';
  }

  @Get('searchuser/:id')
  getUser(@Param('id') id: number): string {
    return 'This user is ' + id;
  }

  @Get('searchuser/:name')
  getUserName(@Param('name') name: string): string {
    return 'This user is ' + name;
  }

  @Get('searchuser')
  getUseridName(@Query('name') name: string, @Query('id') id: number): string {
    return `id: ${id}\nname: ${name}`;
  }
  @Get('searchuserobject')
  getUserBody(@Body('name') name: string, @Body('id') id: string): object {
    return {
      name,
      id,
    };
  }
  @Post('adduser')
  getUserBodyPost(@Body() userInfo: AdminInfo): string {
    return userInfo.name;
  }
}
