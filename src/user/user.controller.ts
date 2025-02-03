import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { JwtGaurd } from 'src/auth/guards/jwt.guard';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @UseGuards(JwtGaurd)
  @Get(':id')
  async getUserId(@Param('id') id: number) {
    return await this.userService.findById(id);
  }
}
